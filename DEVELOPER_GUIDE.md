# Developer Guide

Welcome to the frontend project! We use a **Feature-Driven Architecture**, prioritizing the precise colocation of logic and strict isolation of E2E tests, following modern 2026 standard practices.

## 📁 1. Structuring Features
Do not dump new components into a massive `src/components/` folder.
Whenever you are building a new piece of the application (e.g., `user-dashboard`), isolate it completely inside `src/features/`:

```text
src/features/user-dashboard/
├── components/          # Specific UI for the dashboard
│   ├── DashboardHeader.tsx
│   └── DashboardHeader.test.tsx  <-- Tests go strictly NEXT to the component!
├── hooks/               # Specific business logic
│   └── useDashboardData.ts
├── api/                 # Specific API wrappers
└── index.ts             # The Public API Export Barrier
```

> **Rules of Colocation**: Every Unit and Component test (`.test.tsx`) must live immediately adjacent to the exact file it aims to test.

> **The Public API Rule (`index.ts`)**: The `index.ts` file acts as the strictly controlled "Public API" of your feature. Other features or routes should **only ever** import from the feature's `index.ts`. They should absolutely never deeply import internal files like `import { Header } from '@/features/user-dashboard/components/DashboardHeader'`.

## 🧩 2. Global Components (`src/shared/components/ui`)
We use `shadcn/ui` for our generic, reusable atomic components (Buttons, Modals, Inputs). These belong natively in `src/shared/components/ui/`. If you are manually writing a highly reusable UI utility or hook that is completely disconnected from business logic, place it in `src/shared/`.

## 🧪 3. Writing Tests (Vitest)
We use Vitest and React Testing Library for fast, reliable component testing. 
Instead of repeatedly wrapping your components in `<QueryClientProvider>` or Theme providers across hundreds of tests, always import `render` exclusively from our custom test utilities:

```tsx
// ❌ Bad (native RTL)
import { render } from '@testing-library/react';

// ✅ Good (Custom global wrapper included automatically)
import { render, screen } from '../testing/test-utils.tsx';
```

## 🕸️ 4. Mocking the Network (MSW)
We use MSW (Mock Service Worker) for all API mocking. 
If you need mock data for a unit test or for local browser development where the API is unfinished:
1. Define a Mock Handler in `src/mocks/handlers/`.
2. Generate mock data using Factory patterns in `src/mocks/factories/`. (Do not dump massive, unwieldy hardcoded JSON blobs if you can avoid it—use factories to inject conditional overrides safely).

## 🌍 5. End-to-End Testing (Playwright)
Playwright E2E tests operate over a real network against actual DOM boundaries. They are safely separated from our React source code.
*   Place tests in `e2e/tests/`.
*   Maintain complex UI selection logic inside `e2e/pages/` (Page Object Model) to prevent deeply brittle test code across UI revisions.
*   Store E2E mock-states and presets in `e2e/fixtures/`.

## 🔌 6. API Type Client
Rather than manually writing `fetch` definitions and interfaces, we generate them securely utilizing OpenAPI bindings.
Run:
```bash
npm run generate-client
```
This automatically parses our configured OpenAPI URL and generates entirely typed request and response objects into `src/client/`. Keep this updated whenever your backend endpoints evolve!
