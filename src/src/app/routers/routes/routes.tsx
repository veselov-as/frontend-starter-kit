import { createRoute } from '@tanstack/react-router'

import { rootRoute } from './root'

// Создаем маршруты
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>home</div>,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <div>about</div>,
})

// Создаем дерево маршрутов
export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])
