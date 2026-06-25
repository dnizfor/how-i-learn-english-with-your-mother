# 🎬 How I Learn English with Your Mother

An interactive English learning platform built around **How I Met Your Mother** clips.

Instead of passively watching videos, this project lets learners **explore every subtitle**, understand grammar structures, compare translations, and practice listening with multiple subtitle modes.

---

## ✨ Features

### 📖 Interactive Transcript && 🧩 Grammar Chunk Highlighting

- Each sentence is automatically divided into meaningful learning units.
- Click any subtitle line to jump to that part of the video
- Automatically pauses at the end of the selected sentence
- Expand transcript lines to reveal:
  - Grammar chunks
  - Native translation

Every chunk receives a different color, making grammar easier to understand.

---

### 🌍 Multiple Subtitle Modes

Choose how you want to practice.

- 🌍 **Bilingual**
- 📘 **English Only**
- 🎧 **Native Translation**
- 🚫 **Off**

Perfect for progressing from guided learning to full listening practice.

---

### ✏️ Drawing Mode

Study directly on the transcript.

Features include:

- Freehand drawing
- Multiple pen colors
- Eraser
- Adjustable pen size
- Drawing persistence using LocalStorage
- Clear canvas

---

### 💾 Persistent Learning Progress

The application automatically saves:

- Last watched video
- Playback position
- Transcript drawings

Everything is restored automatically on the next visit.

---

## 📚 Learning Workflow

1. Select an episode.
2. Watch the clip.
3. Click any transcript line.
4. Study grammar chunks.
5. Read the translation.
6. Draw notes directly on the transcript.
7. Repeat without losing progress.

---

## 🌍 Supported Languages

The project currently provides AI-generated translations for the following languages:

| Language              | Status       |
| --------------------- | ------------ |
| 🇬🇧 English            | Original     |
| 🇹🇷 Turkish            | ✅ Supported |
| 🇨🇳 Simplified Chinese | ✅ Supported |
| 🇪🇸 Spanish            | ✅ Supported |
| 🇸🇦 Arabic             | ✅ Supported |

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

There are several ways you can help improve the project:

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

---

### 📝 Improve Existing Translations

Although the subtitles are generated using modern LLMs, AI is not perfect.

If you notice:

- awkward wording
- unnatural expressions
- cultural inaccuracies
- grammar mistakes
- translation inconsistencies

feel free to submit improvements through a Pull Request.

Every contribution helps make the learning experience better for everyone.

---

### 🎬 Improve Subtitle Quality

You can also help by improving:

- subtitle timing
- grammar chunk segmentation
- punctuation
- sentence splitting
- translation quality

Small improvements across many subtitle files make a significant difference.

---

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

❤️ Thank You

Whether you fix a typo, improve a translation, or add support for an entirely new language, your contribution helps thousands of English learners around the world.

Every contribution matters.
