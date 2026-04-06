import type { QueryClient } from "@tanstack/react-query"
import {
  createRootRouteWithContext,
  Outlet,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "@/shared/components/theme-provider"
import { TooltipProvider } from "@/shared/components/ui/tooltip"
import { ErrorPage } from "@/shared/components/error-page"
import { NotFoundPage } from "@/shared/components/not-found-page"

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  errorComponent: ErrorPage,
  notFoundComponent: NotFoundPage,
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
