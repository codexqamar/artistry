# artistry

Minimal Vite + React + TypeScript starter using Tailwind CSS.

## Tech stack

- Vite
- React (TSX)
- TypeScript
- Tailwind CSS / PostCSS

## Project structure

- `index.html` — app entry
- `src/` — application source
- `public/` — static assets (e.g. `videos/`)

## Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build

npm run preview
```

## Git / GitHub

Initialize repository and push to a new GitHub repo:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_REMOTE_URL>
git push -u origin main
```

Replace `<YOUR_REMOTE_URL>` with the repository URL you created on GitHub.

## Notes

- This project includes Tailwind and PostCSS configuration files. Adjust `tailwind.config.js` and `postcss.config.js` as needed.
- Large media files can be kept under `public/videos/` (already excluded by `.gitignore`).
