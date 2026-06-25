interface SubtitleTabsProps {
  subtitleMode: "bilingual" | "english" | "off" | "native";
  setSubtitleMode: React.Dispatch<
    React.SetStateAction<"bilingual" | "english" | "off" | "native">
  >;
}

export default function SubtitleTabs({
  subtitleMode,
  setSubtitleMode,
}: SubtitleTabsProps) {
  return (
    <div className="subtitleTabs">
      <button
        className={subtitleMode === "bilingual" ? "active" : ""}
        onClick={() => setSubtitleMode("bilingual")}
      >
        🌍 Dual
      </button>

      <button
        className={subtitleMode === "english" ? "active" : ""}
        onClick={() => setSubtitleMode("english")}
      >
        🎧 English
      </button>

      <button
        className={subtitleMode === "native" ? "active" : ""}
        onClick={() => setSubtitleMode("native")}
      >
        💙 Native
      </button>

      <button
        className={subtitleMode === "off" ? "active" : ""}
        onClick={() => setSubtitleMode("off")}
      >
        🚫 Off
      </button>
    </div>
  );
}
