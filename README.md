# Holo Exhibition Platform

This repository establishes a clean production-ready foundation for a 3D holographic exhibition and project deployment platform. The current implementation is intentionally architecture-first and deliberately avoids a large visual rewrite. It focuses on maintainable structure, secure configuration, and a buildable foundation for the future platform layers.

## What is included

- Next.js app shell with App Router
- TypeScript configuration and strict typing
- TailwindCSS visual foundation
- 3D holographic concept scene using react-three-fiber
- Project catalog, dashboard, documentation, login, signup, and contact pages
- API routes for health and project data
- Documentation and architecture guidance
- .env.example for secure configuration
- Unit test setup with Vitest

## Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Prisma schema stub
- Three.js + react-three-fiber
- Vitest

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production-ready conventions captured in this repo

- UI, business logic, API, database, auth, and three-engine concerns are separated into dedicated areas.
- Secret-bearing values are kept in environment variables, not client code.
- Architecture documentation lives in `docs/ARCHITECTURE.md`.
- The project is ready for Phase 2 feature expansion without a disruptive rewrite.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm test
```

## Environment

Copy `.env.example` to `.env.local` and fill in the values before running the app in a production-like environment.
