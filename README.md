# Studio Starter Template

Generic website starter built with Next.js 16, React 19, and Tailwind CSS 4.
This repo was cleaned from an old bus-management project so it can be reused as a base template for a new website.

## Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## What remains

- `src/app/layout.tsx` for metadata, fonts, and the root layout
- `src/app/page.tsx` for the landing page template
- `src/app/globals.css` for the visual system and base styling
- `Dockerfile` and `docker-compose.yml` for standalone deployment

## Suggested next edits

1. Replace the brand name and copy in `src/app/page.tsx`
2. Update metadata in `src/app/layout.tsx`
3. Add or remove sections based on the real sitemap
4. Introduce project-specific data, APIs, or CMS integrations only when needed

## Environment

No environment variables are required for the base template.
See `.env.example` if you want a starter env file for deployment settings.

## Remove from Git

Remove a file from Git tracking but keep it locally:

```bash
git rm --cached <filename>
```

Force remove (use when file has local modifications):

```bash
git rm -f --cached <filename>
```

Remove a directory from Git tracking but keep it locally:

```bash
git rm -r --cached <directory>
```

Force remove directory:

```bash
git rm -rf --cached <directory>
```

Commit the changes:

```bash
git commit -m "Remove <file/directory> from Git tracking"
```

Remove Git repository completely (PowerShell):

```powershell
Remove-Item -Recurse -Force .git
```

## Deploy

The project keeps `output: "standalone"` in `next.config.ts`, so it can be deployed with Docker or any Node.js host that supports standalone Next.js builds.

```bash
docker compose up --build
```
