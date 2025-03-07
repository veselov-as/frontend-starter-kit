import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div>Header</div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
