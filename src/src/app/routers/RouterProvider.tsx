import { RouterProvider as TanstackReactRouterProvider } from '@tanstack/react-router'

import { router } from './routes'

export const RouterProvider = () => {
  return <TanstackReactRouterProvider router={router} />
}
