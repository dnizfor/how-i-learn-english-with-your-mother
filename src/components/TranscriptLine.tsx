import type { Language, TranscriptItem } from "../types/transcript.types";

interface TranscriptLineProps {
  item: TranscriptItem;
  index: number;

  language: Language;

  colors: string[];

  openTranscriptIndex: number | null;
  setOpenTranscriptIndex: React.Dispatch<React.SetStateAction<number | null>>;

  penEnabled: boolean;

  seekToTranscript: (item: TranscriptItem) => void;
}

export default function TranscriptLine({
  item,
  index,
  language,
  colors,
  openTranscriptIndex,
  setOpenTranscriptIndex,
  penEnabled,
  seekToTranscript,
}: TranscriptLineProps) {
  const expanded = openTranscriptIndex === index;

  return (
    <div
      className={`line ${expanded ? "expanded" : ""}`}
      onClick={() => {
        if (penEnabled) return;

        seekToTranscript(item);

        setOpenTranscriptIndex(expanded ? null : index);
      }}
    >
      <div className="lineHeader">
        <span className="time">
          {item.timestamps.from} - {item.timestamps.to}
        </span>

        <span className="arrow">{expanded ? "▲" : "▼"}</span>
      </div>

      <p>
        {expanded
          ? (item.parts ?? []).map((part, i) => (
              <b
                key={i}
                style={{
                  color: colors[i % colors.length],
                }}
                title={part.type}
              >
                {part.text}{" "}
              </b>
            ))
          : item.text}
      </p>

      <div className={`translationWrapper ${expanded ? "show" : ""}`}>
        <p className="translation">{item.translations[language]}</p>
      </div>
    </div>
  );
}
