<img width="1536" height="1024" alt="Image" src="https://github.com/user-attachments/assets/cbbd0822-7b2a-42e6-a4c4-81195c712fa4" />

# 🎬 How I Learn English with Your Mother

An interactive English learning platform built around **How I Met Your Mother** clips.

Instead of passively watching videos, this project lets learners **explore every subtitle**, understand grammar structures, compare translations, and practice listening with multiple subtitle modes.

<p align="center">
  <a href="https://howilearnenglishwithyourmother.vercel.app/">
    <strong>🚀 Visit Website</strong>
  </a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="ANDROID_DOWNLOAD_LINK">
    <strong>📱 Download for Android</strong>
  </a>
    &nbsp;&nbsp;•&nbsp;&nbsp;
    <a href="ANDROID_DOWNLOAD_LINK">
    <strong>🍎 Download for IOS </strong>
  </a>
</p>

---

## ✨ Features

- 📖 Interactive Transcript
- 🌍 Multiple Subtitle Modes
- ✏️ Drawing Mode

  <img width="1826" height="236" alt="Image" src="https://github.com/user-attachments/assets/b91063e8-b2c2-491b-a27a-2f598a957b6b" />
  <img width="1763" height="271" alt="Image" src="https://github.com/user-attachments/assets/044cd910-276f-483b-a6f8-68aaa49399b9" />
  <img width="1758" height="353" alt="Image" src="https://github.com/user-attachments/assets/90664026-17c6-476f-b8a3-0f04d0780035" />

---
## 🌍 Explore Our Language Learning Apps

Looking for more language learning tools? Explore our growing collection of projects designed to make learning languages more engaging through TV shows, anime, and interactive exercises.

| Project | Language | Description |
|----------|----------|-------------|
| ☕ **[Learn English with Friends](https://play.google.com/store/apps/details?id=com.dnizfor.friendsenglish)** | English | Improve your English through **Friends** episodes with interactive subtitles, listening exercises, and vocabulary learning. |
| 🌸 **[Lingonime](https://play.google.com/store/apps/details?id=com.dnizfor.lingonime)** |  Japanese | Learn Japanese through **anime** . |

---

## 📚 Learning Workflow

1. Select an episode.
2. Watch the clip.
3. Click any transcript line.
4. Study grammar chunks.
5. Read the translation.
6. Draw notes directly on the transcript.
7. Repeat without losing progress.

💾 The application automatically saves:

- Last watched video
- Playback position
- Transcript drawings

Everything is restored automatically on the next visit.

---

## 🌍 Supported Languages

The project currently provides AI-generated translations for the following languages:

| Language              | Status       |
| --------------------- | ------------ |
| 🇬🇧 English            | Original     |
| 🇹🇷 Turkish            | ✅ Supported |
| 🇨🇳 Simplified Chinese | ✅ Supported |
| 🇪🇸 Spanish            | ✅ Supported |
| 🇵🇹 Portuguese         | ✅ Supported |
| 🇮🇳 Hindi              | ✅ Supported |
| 🇻🇳 Vietnamese         | ✅ Supported |
| 🇮🇩 Indonesian         | ✅ Supported |
| 🇹🇭 Thai               | ✅ Supported |

More languages are welcome through community contributions.

---

## 🤖 AI-Powered Translations

Unlike traditional subtitle projects that rely on machine translation services such as Google Translate, this project uses **Large Language Models (LLMs)** to generate more natural and context-aware translations.

The subtitles are translated using modern AI models (such as **Gemini**) that better understand:

- Context
- Idioms
- Humor
- Natural conversation
- Spoken English

This produces translations that are much more suitable for language learning.

---

## 🤝 Contributing

Contributions are always welcome!

### 🌍 Add a New Language

Want subtitles in your native language?

You can contribute by adding a new translation to the transcript dataset. Every subtitle entry follows a simple JSON structure, making it easy to extend with additional languages.

Example:

```json
"translations": {
  "tr": "...",
  "zh-CN": "...",
  "es": "...",
  "ar": "...",
  "fr": "..."
}
```

### ⭐️ Show Your Support

- If you find this project useful, please consider giving it a ⭐ on GitHub.
- Your support helps the project reach more people, motivates future development, and is greatly appreciated. Thank you!

> \[!IMPORTANT]
>
> **⭐️ Star Us**, You will receive all release notifications from GitHub without any delay \~

<a href="https://github.com/dnizfor/how-i-learn-english-with-your-mother/stargazers">
  <img width="1920" height="289" alt="Image" src="https://github.com/user-attachments/assets/4096ad79-bc90-4e05-9cad-ab20daff5852" />
</a>

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- react-youtube
- LocalStorage API
- CSS3

---

## 📁 Project Structure

```text
src
├── assets
│   └── all_transcripts.json
├── components
│   ├── Header.tsx
│   ├── ModeSwitch.tsx
│   ├── PenToolbar.tsx
│   ├── SubtitleTabs.tsx
│   ├── TopPlaylist.tsx
│   ├── TranscriptLine.tsx
│   ├── TranscriptSection.tsx
│   └── VideoPlayer.tsx
├── types
│   └── transcript.ts
├── utils
│   └── utils.ts
├── App.tsx
└── App.css
```

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/how-i-learn-english-with-your-mother.git

cd how-i-learn-english-with-your-mother

npm install

npm run dev
```

---

## 📄 License

This project is intended for educational purposes.

---

## ❤️ Thank You

Whether you fix a typo, improve a translation, or add support for an entirely new language, your contribution helps thousands of English learners around the world.

Every contribution matters.
