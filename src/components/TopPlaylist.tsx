import type { VideoItem } from "../types/transcript.types";

interface TopPlaylistProps {
  videos: VideoItem[];
  videoIndex: number;
  changeVideo: (index: number) => void;
}

export default function TopPlaylist({
  videos,
  videoIndex,
  changeVideo,
}: TopPlaylistProps) {
  return (
    <div className="topPlaylist">
      {videos.map((item, index) => (
        <button
          key={index}
          className={videoIndex === index ? "active" : ""}
          onClick={() => changeVideo(index)}
        >
          <span>{index + 1}</span>

          <div className="playlistInfo">
            <div>{item.name}</div>

            {index === videoIndex && <small>▶ Son izlenen</small>}
          </div>
        </button>
      ))}
    </div>
  );
}
