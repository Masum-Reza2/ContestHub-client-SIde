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

import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      <QueryClientProvider client={queryClient}>
        <ControlRoom>
          <Toaster />
          <RouterProvider router={Routes} />
        </ControlRoom>
      </QueryClientProvider>

    </HelmetProvider>
  </React.StrictMode>,
)
