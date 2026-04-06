# React + TypeScript + Vite + shadcn/ui

This project is built on a **Feature-Driven Architecture**, prioritizing the precise colocation of logic and strict isolation of E2E tests.

## 📁 Project Folder Structure

```text
vite-app-1/
├── e2e/                           # 1. E2E Tests (ISOLATED)
│   ├── tests/                     # Playwright test files (.spec.ts)
│   ├── fixtures/                  # Reusable E2E states
│   └── pages/                     # Page Object Models (POM)
│
├── public/                        # Static public assets
│   └── mockServiceWorker.js       # MSW local browser worker
│
├── src/
│   ├── assets/                    # Project assets (fonts, images)
│   ├── routes/                    # TanStack file-based routing definitions
│   │   ├── __root.tsx
│   │   └── index.tsx
│   │
│   ├── features/                  # 2. Domain-Driven Feature Modules (COLOCATED)
│   │   └── example-feature/
│   │       ├── example.test.tsx   # Colocated testing files
│   │       └── index.ts           # Strictly controlled "Public API" export barrier
│   │
│   ├── shared/                    # 3. Global Shared Utilities
│   │   ├── components/            # Shadcn UI (e.g., Button, Dialog)
│   │   ├── hooks/                 # Generic hooks
│   │   └── lib/                   # Utils (e.g., twMerge, clsx)
│   │
│   ├── mocks/                     # 4. MSW Mocks (CENTRALIZED)
│   │   ├── handlers/              # Modular handlers by domain
│   │   ├── factories/             # Factory patterns for dynamic test data
│   │   ├── browser.ts             
│   │   └── server.ts              
│   │
│   ├── testing/                   # 5. Global Testing Utilities
│   │   ├── setup.ts               # Vitest globals (e.g. MSW lifecycle)
│   │   └── test-utils.tsx         # A custom 'render' wrapping providers
│   │
│   ├── client/                    # 6. OpenAPI Generated Client
│   │
│   ├── main.tsx                   # React entry point
│   ├── index.css                  # Global Tailwind styles
│   └── routeTree.gen.ts           # Auto-generated TanStack router bindings
│
├── components.json                # Shadcn configuration mapped to @/shared
├── openapi-ts.config.ts           # OpenAPI Generator Config
├── playwright.config.ts               
└── vitest.config.ts               
```

## Adding components
To add components to your app, run the following command:
```bash
npx shadcn@latest add button
```
This will place the ui components in the `src/shared/components/ui` directory based on our custom `components.json`.

## Using components
To use the global components in your app, import them as follows:
```tsx
import { Button } from "@/shared/components/ui/button"
```

## Testing Protocol
- **Unit/Component Tests:** Powered by Vitest natively mapping from `tsconfig.json`. Run `npm run test` (watch) and `npm run test:run`. All `.test.tsx` files must live *immediately* next to the components they test.
- **E2E Tests:** Run `npm run test:e2e` to execute Playwright headlessly over the fully isolated UI.
