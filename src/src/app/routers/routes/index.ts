import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routes'
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
})
