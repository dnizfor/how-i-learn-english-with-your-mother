import { useEffect, useRef, useState } from "react";
import allTranscriptsJson from "./data/all_transcripts.json";
import "./styles/app.css";

import Header from "./components/Header";
import TopPlaylist from "./components/TopPlaylist";
import VideoPlayer from "./components/VideoPlayer";
import SubtitleTabs from "./components/SubtitleTabs";
import ModeSwitch from "./components/ModeSwitch";
import TranscriptSection from "./components/TranscriptSection";

import type {
  AllTranscripts,
  TranscriptItem,
  Language,
} from "./types/transcript.types";
import { getYoutubeId } from "./utils/utils";
import Footer from "./components/Footer";

const allTranscripts = allTranscriptsJson as AllTranscripts;

type Mode = "transcript" | "subtitle";
type SubtitleMode = "bilingual" | "english" | "off" | "native";

export default function App() {
  const transcriptSectionRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const stopIntervalRef = useRef<number | null>(null);

  const savedIndex = Number(localStorage.getItem("lastVideoIndex")) || 0;

  const [videoIndex, setVideoIndex] = useState(savedIndex);
  const [mode, setMode] = useState<Mode>("transcript");
  const [subtitleMode, setSubtitleMode] = useState<SubtitleMode>("bilingual");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [openTranscriptIndex, setOpenTranscriptIndex] = useState<number | null>(
    null,
  );
  const [language, setLanguage] = useState<Language>("tr");
  const [penEnabled, setPenEnabled] = useState(false);

  const video = allTranscripts[videoIndex];
  const videoId = getYoutubeId(video.url);

  function getSavedTime(index: number): number {
    return Number(localStorage.getItem(`videoTime-${index}`)) || 0;
  }

  function onReady(event: any) {
    playerRef.current = event.target;

    const savedTime = getSavedTime(videoIndex);

    if (savedTime > 0) {
      event.target.seekTo(savedTime, true);
    }
  }

  function changeVideo(index: number) {
    if (playerRef.current) {
      localStorage.setItem(
        `videoTime-${videoIndex}`,
        String(playerRef.current.getCurrentTime()),
      );
    }

    setVideoIndex(index);
    localStorage.setItem("lastVideoIndex", String(index));
    setCurrentIndex(-1);
    setOpenTranscriptIndex(null);
    setPenEnabled(false);
  }

  function seekToTranscript(item: TranscriptItem) {
    if (!playerRef.current) return;

    const player = playerRef.current;
    const startSeconds = item.offsets.from / 1000;
    const endSeconds = item.offsets.to / 1000;

    if (stopIntervalRef.current !== null) {
      clearInterval(stopIntervalRef.current);
      stopIntervalRef.current = null;
    }

    player.pauseVideo();
    player.seekTo(startSeconds, true);
    player.playVideo();

    stopIntervalRef.current = window.setInterval(() => {
      if (!playerRef.current) {
        if (stopIntervalRef.current !== null) {
          clearInterval(stopIntervalRef.current);
          stopIntervalRef.current = null;
        }
        return;
      }

      const currentTime = playerRef.current.getCurrentTime();

      if (currentTime >= endSeconds) {
        playerRef.current.pauseVideo();

        if (stopIntervalRef.current !== null) {
          clearInterval(stopIntervalRef.current);
          stopIntervalRef.current = null;
        }
      }
    }, 100);
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!playerRef.current) return;

      const time = playerRef.current.getCurrentTime();
      localStorage.setItem(`videoTime-${videoIndex}`, String(time));

      const timeMs = time * 1000;

      const index = video.transcript.findIndex(
        (item) => timeMs >= item.offsets.from && timeMs < item.offsets.to,
      );

      setCurrentIndex(index);
    }, 500);

    return () => clearInterval(interval);
  }, [videoIndex, video]);

  useEffect(() => {
    const activeButton = document.querySelector(".topPlaylist button.active");

    activeButton?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [videoIndex]);

  useEffect(() => {
    return () => {
      if (stopIntervalRef.current !== null) {
        clearInterval(stopIntervalRef.current);
      }
    };
  }, []);

  const currentSubtitle =
    currentIndex >= 0 ? video.transcript[currentIndex] : null;

  return (
    <div className="page">
      <Header language={language} setLanguage={setLanguage} />

      <TopPlaylist
        videos={allTranscripts}
        videoIndex={videoIndex}
        changeVideo={changeVideo}
      />

      <div className="videoContainer">
        <VideoPlayer videoId={videoId} onReady={onReady} />

        {mode === "subtitle" && subtitleMode !== "off" && (
          <div className="subtitleBox subtitleBoxOverlay">
            {(subtitleMode === "english" || subtitleMode === "bilingual") && (
              <p className="subtitleText">{currentSubtitle?.text}</p>
            )}
            {(subtitleMode === "native" || subtitleMode === "bilingual") && (
              <p className="subtitleText subtitleTranslation">
                {currentSubtitle?.translations[language]}
              </p>
            )}
          </div>
        )}
      </div>

      {mode === "subtitle" && (
        <SubtitleTabs
          subtitleMode={subtitleMode}
          setSubtitleMode={setSubtitleMode}
        />
      )}

      <ModeSwitch
        mode={mode}
        setMode={setMode}
        transcriptSectionRef={transcriptSectionRef}
      />

      {mode === "subtitle" && subtitleMode !== "off" && (
        <div className="subtitleBox subtitleBoxMobile">
          {(subtitleMode === "english" || subtitleMode === "bilingual") && (
            <p className="subtitleText">{currentSubtitle?.text}</p>
          )}
          {(subtitleMode === "native" || subtitleMode === "bilingual") && (
            <p className="subtitleText subtitleTranslation">
              {currentSubtitle?.translations[language]}
            </p>
          )}
        </div>
      )}

      {mode === "transcript" && (
        <div ref={transcriptSectionRef}>
          <TranscriptSection
            video={video}
            videoIndex={videoIndex}
            language={language}
            openTranscriptIndex={openTranscriptIndex}
            setOpenTranscriptIndex={setOpenTranscriptIndex}
            penEnabled={penEnabled}
            setPenEnabled={setPenEnabled}
            seekToTranscript={seekToTranscript}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}
