import type { router } from './routes'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { RouterProvider } from './RouterProvider'
