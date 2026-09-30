# We Hear You — Humans of Podar (v1 frontend)

Next.js 15 (App Router) + TypeScript + Framer Motion. No backend yet.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Routes
- `/` home, `/about`, `/support`, `/resources`
- `/moderators` (sign-in shell), `/moderators/dashboard`, `/moderators/conversations/[id]`

## Editing content
All copy lives in `data/*.ts`. Replace placeholders in `team.ts`, `voices.ts`, `resources.ts`.
Check `site.helplines` numbers with your school before launch.

## Backend hand-off
Search for `TODO(backend)`: support form, tracking lookup, moderator sign-in, moderator reply.
Replace `data/conversations.ts` with API calls. Add `/check` by moving `TrackingLookup`.

## Design tokens
`app/globals.css` `:root` (from DESIGN.md: canvas, ink, pencil, terracotta). Fonts: Domine, Geist, JetBrains Mono.
