# Sri Ganesh Silks — Thekkatte

Website for Sri Ganesh Silks, a family textile showroom in Thekkatte, Kundapura, serving coastal Karnataka since 1956.

## Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

## Build & Deploy

```sh
npm run build   # outputs to dist/
```

Deploy the `dist/` folder to Vercel (static SPA). The `vercel.json` handles client-side routing rewrites automatically.

## Stack

- Vite + React 19
- TypeScript
- TanStack Router (client-side)
- Tailwind CSS v4
