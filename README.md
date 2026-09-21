# Stack

A production-ready monorepo starter for building full-stack applications with **Next.js**, **NestJS**, **pnpm**, **Turborepo**, and **Docker**.

Designed to be used as a starting point for Payable projects and other TypeScript-based applications.

## ✨ What's Included

- **Next.js 16** — React web application
- **NestJS** — Backend API
- **Swagger / OpenAPI** — API documentation
- **pnpm workspaces** — Monorepo package management
- **Turborepo** — Build and task orchestration
- **TypeScript** — Shared TypeScript configuration
- **ESLint** — Shared linting configuration
- **Shared UI package** — Reusable React components
- **Docker** — Production-ready container configuration
- **Docker Compose** — Run the web and API applications together
- **Node.js 22** — Common runtime across local development and containers

## 📁 Project Structure

```text
.
├── apps/
│   ├── api/                       # NestJS API
│   │   ├── src/
│   │   ├── test/
│   │   ├── nest-cli.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.build.json
│   │
│   └── web/                       # Next.js application
│       ├── app/
│       ├── public/
│       ├── next.config.ts
│       └── tsconfig.json
│
├── packages/
│   ├── eslint-config/             # Shared ESLint configuration
│   ├── typescript-config/         # Shared TypeScript configuration
│   └── ui/                        # Shared React UI components
│
├── docker/
│   ├── api.Dockerfile
│   └── web.Dockerfile
│
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── turbo.json
└── README.md
```
