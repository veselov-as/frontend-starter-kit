import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ReduxProvider } from './providers'
import { RouterProvider } from './routers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  </StrictMode>,
)
