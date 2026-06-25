interface ModeSwitchProps {
  mode: "transcript" | "subtitle";
  setMode: React.Dispatch<React.SetStateAction<"transcript" | "subtitle">>;
  transcriptSectionRef: React.RefObject<HTMLDivElement | null>;
}

export default function ModeSwitch({
  mode,
  setMode,
  transcriptSectionRef,
}: ModeSwitchProps) {
  return (
    <div className="modeSwitch">
      <button
        className={mode === "transcript" ? "active" : ""}
        onClick={() => {
          setMode("transcript");

          setTimeout(() => {
            transcriptSectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 50);
        }}
      >
        📄 Transcript
      </button>

      <button
        className={mode === "subtitle" ? "active" : ""}
        onClick={() => setMode("subtitle")}
      >
        🎬 Subtitle
      </button>
    </div>
  );
}
