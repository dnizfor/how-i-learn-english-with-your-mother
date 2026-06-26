import { useEffect, useRef, useState } from "react";
import type {
  Language,
  TranscriptItem,
  VideoItem,
} from "../types/transcript.types";
import TranscriptLine from "./TranscriptLine";
import { colors } from "../utils/utils";
import PenToolbar from "./PenToolbar";

interface TranscriptSectionProps {
  video: VideoItem;
  videoIndex: number;
  language: Language;
  openTranscriptIndex: number | null;
  setOpenTranscriptIndex: React.Dispatch<React.SetStateAction<number | null>>;
  penEnabled: boolean;
  setPenEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  seekToTranscript: (item: TranscriptItem) => void;
}

type ToolType = "pen" | "eraser";

interface CanvasPosition {
  x: number;
  y: number;
}

export default function TranscriptSection({
  video,
  videoIndex,
  language,
  openTranscriptIndex,
  setOpenTranscriptIndex,
  penEnabled,
  setPenEnabled,
  seekToTranscript,
}: TranscriptSectionProps) {
  const [tool, setTool] = useState<ToolType>("pen");
  const [penColor, setPenColor] = useState("#3b82f6");
  const [penSize, setPenSize] = useState(4);
  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorPos, setCursorPos] = useState<CanvasPosition | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const transcriptRef = useRef<HTMLDivElement | null>(null);

  function resizeCanvas() {
    const canvas = canvasRef.current;
    const wrapper = transcriptRef.current;
    if (!canvas || !wrapper) return;

    const oldImage = canvas.toDataURL();

    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;

    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
    };

    img.src = oldImage;
  }

  function loadDrawing() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const saved = localStorage.getItem(`drawings-${videoIndex}`);
    if (!saved) return;

    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
    };

    img.src = saved;
  }

  function saveDrawing() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    localStorage.setItem(`drawings-${videoIndex}`, canvas.toDataURL());
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    localStorage.removeItem(`drawings-${videoIndex}`);
  }

  function getCanvasPosition(
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ): CanvasPosition {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  function startDrawing(
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) {
    if (!penEnabled) return;

    e.preventDefault();
    setIsDrawing(true);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const pos = getCanvasPosition(e);

    ctx?.beginPath();
    ctx?.moveTo(pos.x, pos.y);
  }

  function draw(
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) {
    if (!penEnabled || !isDrawing) return;

    e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const pos = getCanvasPosition(e);

    ctx.lineWidth = tool === "eraser" ? penSize * 3 : penSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = penColor;
    }

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    ctx.globalCompositeOperation = "source-over";
  }

  function stopDrawing() {
    if (!isDrawing) return;

    setIsDrawing(false);
    saveDrawing();
  }

  useEffect(() => {
    setTimeout(() => {
      resizeCanvas();
      loadDrawing();
    }, 100);
  }, [videoIndex, openTranscriptIndex]);

  useEffect(() => {
    function handleResize() {
      resizeCanvas();
      loadDrawing();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [videoIndex]);

  return (
    <div>
      <PenToolbar
        penEnabled={penEnabled}
        setPenEnabled={setPenEnabled}
        tool={tool}
        setTool={setTool}
        penColor={penColor}
        setPenColor={setPenColor}
        penSize={penSize}
        setPenSize={setPenSize}
        clearCanvas={clearCanvas}
      />

      <div className="transcriptCanvasWrap" ref={transcriptRef}>
        <canvas
          ref={canvasRef}
          className={`drawCanvas ${penEnabled ? "active" : ""}`}
          onMouseDown={startDrawing}
          onMouseMove={(e) => {
            setCursorPos(getCanvasPosition(e));
            draw(e);
          }}
          onMouseUp={stopDrawing}
          onMouseLeave={() => {
            stopDrawing();
            setCursorPos(null);
          }}
          onTouchStart={startDrawing}
          onTouchMove={(e) => {
            setCursorPos(getCanvasPosition(e));
            draw(e);
          }}
          onTouchEnd={stopDrawing}
        />

        {penEnabled && cursorPos && (
          <div
            className="penDot"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              width: tool === "eraser" ? penSize * 3 : Math.max(6, penSize),
              height: tool === "eraser" ? penSize * 3 : Math.max(6, penSize),
              background: tool === "eraser" ? "rgba(255,255,255,.2)" : penColor,
              border: tool === "eraser" ? "2px solid white" : "none",
            }}
          />
        )}

        <div className="transcript">
          {video.transcript.map((item, index) => (
            <TranscriptLine
              key={index}
              item={item}
              index={index}
              language={language}
              colors={colors}
              openTranscriptIndex={openTranscriptIndex}
              setOpenTranscriptIndex={setOpenTranscriptIndex}
              penEnabled={penEnabled}
              seekToTranscript={seekToTranscript}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
