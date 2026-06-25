interface HeaderProps {
  language: "tr" | "zh-CN";
  setLanguage: React.Dispatch<React.SetStateAction<"tr" | "zh-CN">>;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  return (
    <div className="header">
      <h1>How I Learn English with Your Mother</h1>

      <select
        className="languageSelect"
        value={language}
        onChange={(e) => setLanguage(e.target.value as "tr" | "zh-CN")}
      >
        <option value="tr">Türkçe</option>
        <option value="zh-CN">Chinese</option>
      </select>
    </div>
  );
}
