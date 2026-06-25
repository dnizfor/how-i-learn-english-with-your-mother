interface PenToolbarProps {
  penEnabled: boolean;
  setPenEnabled: React.Dispatch<React.SetStateAction<boolean>>;

  tool: "pen" | "eraser";
  setTool: React.Dispatch<React.SetStateAction<"pen" | "eraser">>;

  penColor: string;
  setPenColor: React.Dispatch<React.SetStateAction<string>>;

  penSize: number;
  setPenSize: React.Dispatch<React.SetStateAction<number>>;

  clearCanvas: () => void;
}

export default function PenToolbar({
  penEnabled,
  setPenEnabled,
  tool,
  setTool,
  penColor,
  setPenColor,
  penSize,
  setPenSize,
  clearCanvas,
}: PenToolbarProps) {
  return (
    <div className="penToolbar">
      <button
        className={penEnabled ? "active" : ""}
        onClick={() => setPenEnabled(!penEnabled)}
      >
        ✏️ Kalem
      </button>

      <button
        className={
          tool === "pen" && penColor === "#3b82f6" ? "selectedColor" : ""
        }
        onClick={() => {
          setTool("pen");
          setPenColor("#3b82f6");
        }}
      >
        🔵
      </button>

      <button
        className={
          tool === "pen" && penColor === "#ef4444" ? "selectedColor" : ""
        }
        onClick={() => {
          setTool("pen");
          setPenColor("#ef4444");
        }}
      >
        🔴
      </button>

      <button
        className={
          tool === "pen" && penColor === "#22c55e" ? "selectedColor" : ""
        }
        onClick={() => {
          setTool("pen");
          setPenColor("#22c55e");
        }}
      >
        🟢
      </button>

      <button
        className={
          tool === "pen" && penColor === "#facc15" ? "selectedColor" : ""
        }
        onClick={() => {
          setTool("pen");
          setPenColor("#facc15");
        }}
      >
        🟡
      </button>

      <button
        className={tool === "eraser" ? "active" : ""}
        onClick={() => setTool("eraser")}
      >
        🧽 Silgi
      </button>

      <input
        type="range"
        min="2"
        max="18"
        value={penSize}
        onChange={(e) => setPenSize(Number(e.target.value))}
      />

      <button onClick={clearCanvas}>🗑️ Temizle</button>
    </div>
  );
}
