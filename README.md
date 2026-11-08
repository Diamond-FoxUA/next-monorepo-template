Next.js & Express Full-Stack Monorepo Template

A modern, lightning-fast developer boilerplate for full-stack web development powered by **pnpm workspaces**. Fully configured and optimized to work **100% offline** using local caching.

## 📂 Project Structure

 `apps/frontend` — **Next.js 16** web application structured with strict **Feature-Driven Architecture (FDA)** guidelines inside the `src/` directory:
  - `app/` — Global configs, root layout, application providers, global styles, and Next.js App Router definitions.
  - `pages/` — Composition layer for full-screen application views and route targets.
  - `widgets/` — Self-contained, structural UI blocks (e.g., `Header`, `Footer`, `Sidebar`).
  - `features/` — User interactions bringing direct business value (e.g., `AuthForm`, `LanguageSwitcher`).
  - `entities/` — Core business models, light components, and state definitions (e.g., `UserCard`, `ProductRow`).
  - `shared/` — Reusable, completely decoupled utility logic, global hooks, API clients, and common UI primitives (`shared/ui`).
- `apps/backend` — **Express** API server + TypeScript structured with a clean, production-ready three-tier architecture:
  - `config/` — Database, JWT, and third-party configuration layers.
  - `middlewares/` — Global auth filters, request interceptors, and centralized error handlers.
  - `routes/` — Explicit endpoint routing declarations mapping requests to controllers.
  - `controllers/` — HTTP request/response handlers extracting route payloads.
  - `services/` — Core business logic execution and direct database transaction isolation layer.
  - `utils/` — Auxiliary helpers, global custom exception instances (`AppError`), and async wrappers (`catchAsync`).
- `packages/shared` — Local internal workspace package for sharing code (e.g., global **Zod schemas** and TypeScript types) between the frontend and backend.

## 🛠 Offline Workspace Workflow

All dependencies are dynamically resolved from your local storage at `~/development/pnpm-store` without making external network requests.

### Bootstrapping a New Project from this Template:
1. Clone or copy this template folder under your new project name:
   ```bash
   cp -R next-monorepo-template my-new-fullstack-app
   ```
2. Navigate into the folder and trigger a clean offline layout link (modules will mount instantly):
   ```bash
   cd my-new-fullstack-app
   pnpm i --shamefully-hoist --offline
   ```

## ⚡ CLI Reference Scripts

All execution scripts must be run directly from the **root directory** of the monorepo:

- `pnpm dev` — Parallel development mode. Spins up Next.js (port 3000) and Express (port 5000) simultaneously in a single terminal instance.
- `pnpm dev:frontend` — Boots up the Next.js frontend web platform only.
- `pnpm dev:backend` — Boots up the Node.js / Express backend server only.
- `pnpm build` — Triggers a production compilation across all application modules recursively.
- `pnpm reinstall` — Full system hard reset. Nukes local `node_modules` and `.next` caches, then cleanly remounts the workspace links with proper hoisting.

## 🧩 Shared Code Execution (`@monorepo/shared`)

1. Define your data types or Zod request validation rules inside `packages/shared/src/index.ts`.
2. Seamlessly import them across your full-stack applications with absolute path isolation:
   ```typescript
   import { LoginSchema } from '@monorepo/shared';
   ```