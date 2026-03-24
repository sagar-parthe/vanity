import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Outlet />
        <ReactQueryDevtools />
        <TanStackRouterDevtools position="bottom-right" />
      </TooltipProvider>
    </ThemeProvider>
  )
}
