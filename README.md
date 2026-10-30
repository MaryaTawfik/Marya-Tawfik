# Marya Tawfik — Personal Portfolio

A flat, casual, and joyful personal portfolio with warm paper tones, thick dark outlines, solid bright color blocks, and hard offset shadows.

## 🎨 Visual Identity & Moods

The website features 4 custom mood themes with no blur, no glow, and no soft shadows:
- **sunny (default):** Warm cream paper (`#FFF4DC`), chocolate/dark outlines (`#221A12`), bright yellow (`#FFC21A`), coral accent (`#FF6150`).
- **coral:** Soft peach (`#FFEFE6`), deep mahogany (`#2A1712`), coral (`#FF6F59`), teal (`#27B5A3`).
- **mono:** High-contrast crisp black & white (`#FFFFFF`, `#0B0B0B`).
- **ink:** Deep dark mode with warm white highlights (`#0D0D0D`, `#F4F1EA`).

Mood is remembered in `localStorage` (`portfolio-mood`) and set as `data-mood` on `<html>` with an inline script to prevent flash of unstyled theme.

---

## 📝 How to Edit Portfolio Content

All copy, stats, projects, and links live in:
- `data/portfolio.ts` (and `src/data/portfolio.ts`)

You can edit:
- **`meta`**: Your name, tagline, pitch, display email, and resume URL.
- **`socials`**: Links to GitHub, LinkedIn, Codeforces, LeetCode, and email.
- **`hero`**: Typewriter roles and floating sticker chips around the avatar.
- **`about`**: The interactive `marya.ts` code snippet, narrative paragraph, bullets, and stat count-ups.
- **`skills`**: Skill names, categories, proficiency levels, and 5-pip ratings.
- **`projects`**: The 4 featured projects with problem, architecture, hard parts, and the signature **Request Traces** (step names, types, and millisecond start/end timestamps).
- **`competitive`**: Codeforces rating ladder, platform profile handles, contest ranks, and expandable problem deep-dives.
- **`experience`**: Timeline entries, roles, and bullets.
- **`contact`**: Interactive simulated chat prompts, replies, and display email.

---

## 📸 Where to Put Your Photo

In `src/components/Hero.tsx`, the hero section currently displays the custom morphing blob with interactive pointer-following smiley face and blinking eyes.

To replace the smiley with your real photograph:
1. Place your photo file (e.g., `photo.jpg` or `portrait.png`) into the `public/` directory (e.g. `public/marya.jpg`).
2. Open `src/components/Hero.tsx` around line 230 where the morphing blob is rendered:
   ```tsx
   <div className="w-64 h-64 sm:w-72 sm:h-72 bg-[var(--a1)] border-[3px] border-[var(--fg)] shadow-hard-large animate-blob-morph overflow-hidden flex items-center justify-center">
     <img
       src="/marya.jpg"
       alt="Marya Tawfik"
       className="w-full h-full object-cover"
     />
   </div>
   ```
This preserves the thick 3px outline, the 8px hard offset shadow, and the smooth blob morph!

---

## 🚀 Running the Project

```bash
# Run development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Type check & lint
npm run lint
```
