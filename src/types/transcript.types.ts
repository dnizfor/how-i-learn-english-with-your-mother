export interface TranscriptPart {
  text: string;
  type: string;
}

export interface TranscriptTranslations {
  tr: string;
  es: string;
  "zh-CN": string;
  hi: string;
  vi: string;
  id: string;
  th: string;
}

export interface TranscriptOffsets {
  from: number;
  to: number;
}

export interface TranscriptTimestamps {
  from: string;
  to: string;
}

export interface TranscriptItem {
  text: string;
  translation?: string;

  offsets: TranscriptOffsets;
  timestamps: TranscriptTimestamps;

  parts?: TranscriptPart[];
  translations: TranscriptTranslations;
}

export interface VideoItem {
  name: string;
  url: string;
  transcript: TranscriptItem[];
}

export type AllTranscripts = VideoItem[];

export type Language = "tr" | "es" | "zh-CN" | "hi" | "vi" | "id" | "th";
