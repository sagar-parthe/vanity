npx shadcn@latest add sidebar-07
✔ Checking registry.
✔ The file button.tsx already exists. Would you like to overwrite? … yes
✔ The file separator.tsx already exists. Would you like to overwrite? … yes
✔ The file input.tsx already exists. Would you like to overwrite? … yes
✔ The file dropdown-menu.tsx already exists. Would you like to overwrite? … yes
✔ Created 13 files:
  - src/components/ui/tooltip.tsx
  - src/hooks/use-mobile.ts
  - src/components/ui/skeleton.tsx
  - src/components/ui/breadcrumb.tsx
  - src/components/ui/collapsible.tsx
  - src/components/ui/avatar.tsx
  - src/components/ui/sheet.tsx
  - src/components/ui/sidebar.tsx
  - src/components/app-sidebar.tsx
  - src/components/nav-main.tsx
  - src/components/nav-projects.tsx
  - src/components/nav-user.tsx
  - src/components/team-switcher.tsx
ℹ Updated 4 files:
  - src/components/ui/button.tsx
  - src/components/ui/separator.tsx
  - src/components/ui/input.tsx
  - src/components/ui/dropdown-menu.tsx

The `tooltip` component has been added. Remember to wrap your app with the `TooltipProvider` component.

```tsx title="app/layout.tsx"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
```