# Intelous Labs Platform

## Overview

This is a dual-mode marketing and services website for Intelous, featuring two distinct brand experiences:
- **Scale Mode (Intelous.ai)**: Revenue growth platform and GTM engine for B2B companies
- **Build Mode (Intelous Labs)**: Technical execution partner and development services

The application is a full-stack React + Express project with a dark-themed, technical aesthetic inspired by the design guidelines emphasizing precision-focused UI with neon accents and glass morphism effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state, React Context for mode switching
- **Styling**: Tailwind CSS with custom design tokens, shadcn/ui component library (New York style)
- **Build Tool**: Vite with HMR support

### Mode Switching System
The application implements a dual-mode experience through React Context (`ModeProvider`):
- Routes automatically set the appropriate mode based on URL path
- Mode toggle in header allows manual switching
- Each mode has distinct navigation items, branding, and content

### Design System
Custom component library built on shadcn/ui with Intelous-specific components:
- `GlassCard`: Glassmorphism effect cards with backdrop blur
- `BladeCard`: Horizontal cards with accent border on hover
- `MonoLabel`: Technical monospace labels in brand colors
- `TerminalWindow`: Animated code terminal display
- `AnimatedButton`: Neon-bordered buttons with hover glow effects

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful API with `/api` prefix
- **Storage Interface**: Abstracted storage layer (`IStorage`) currently using in-memory implementation, designed for easy database swap

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit for schema management
- **Current Tables**: Users table with UUID primary keys

### Build System
- **Client Build**: Vite bundles to `dist/public`
- **Server Build**: esbuild bundles server with selective dependency bundling
- **Production**: Single bundled Node.js server serving static files

## External Dependencies

### UI Components
- Radix UI primitives (full suite: dialog, dropdown, tabs, toast, etc.)
- shadcn/ui component patterns
- Embla Carousel for carousels
- cmdk for command palette
- react-day-picker for calendars

### Data & Forms
- TanStack React Query for data fetching
- react-hook-form with zod validation
- drizzle-zod for schema-to-validation integration

### Database
- PostgreSQL (via `DATABASE_URL` environment variable)
- connect-pg-simple for session storage (available but not currently configured)

### Fonts
- Inter (UI/body text)
- IBM Plex Mono (technical elements, code)
- Loaded via Google Fonts CDN

### Development Tools
- Replit-specific plugins for development (cartographer, dev-banner, error overlay)
- TypeScript with strict mode
- Path aliases: `@/*` for client, `@shared/*` for shared code