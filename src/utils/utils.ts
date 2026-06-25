export const getYoutubeId = (url: string): string => {
  return new URL(url).searchParams.get("v") ?? "";
};

export const colors: string[] = [
  "#3b82f6",
  "#ef4444",
  "#22c55e",
  "#f59e0b",
  "#a855f7",
  "#06b6d4",
  "#ec4899",
  "#84cc16",
  "#14b8a6",
  "#f97316",
];
