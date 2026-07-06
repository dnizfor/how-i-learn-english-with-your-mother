import type { Language } from "../types/transcript.types";

interface HeaderProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  return (
    <div className="header">
      <h1>How I Learn English with Your Mother</h1>

      <select
        className="languageSelect"
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
      >
        <option value="tr">Türkçe</option>
        <option value="zh-CN">Chinese</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="vi">Vietnamese</option>
        <option value="id">Indonesian</option>
        <option value="th">Thai</option>
        <option value="pt">Portuguese</option>
      </select>
    </div>
  );
}
