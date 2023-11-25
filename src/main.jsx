import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import ControlRoom from './ControlRoom/ControlRoom.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <ControlRoom>
        <Toaster />
        <RouterProvider router={Routes} />
      </ControlRoom>
    </QueryClientProvider>

  </React.StrictMode>,
)