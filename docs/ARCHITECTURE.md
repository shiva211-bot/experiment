# Architecture Overview

## System goals

The platform supports a production-grade exhibition lifecycle for immersive 3D experiences, including project exhibition, project management, authentication, search and filtering, visualization, deployment operations, and public-facing documentation.

## Layered architecture

### Presentation layer
- `src/app` contains route-based pages and the app shell.
- `src/components` holds reusable presentation components.
- `src/three` contains the WebGL/Three.js rendering layer.

### Application layer
- `src/services` contains business operations for project data access.
- `src/lib` contains config, utilities, env validation, and reusable logic.
- `src/dashboard` and `src/projects` organize domain-specific UI/state boundaries.

### API and integration layer
- `src/app/api` contains app route handlers for health and project endpoints.
- `src/api` provides a service structure for project data and external integration adapters.
- `prisma/schema.prisma` defines the persistence model boundary with a future Postgres implementation.

### Security model
- `.env.example` is the canonical secret reference.
- Secrets must remain on the server; no browser code should access `DATABASE_URL`, `AUTH_SECRET`, or OAuth token values.
- Authentication is structured for future provider integration without embedding secrets into the frontend.

### Testing and quality gates
- `vitest` is configured for smoke tests.
- Build, typecheck, lint, and test scripts are included as the baseline quality gate.

## Deployment posture

The repo is intentionally prepared for a modern hosting model such as Vercel or a Node-based production environment. The architecture is separate enough to allow routing, API, data persistence, and 3D rendering to evolve independently over time.
