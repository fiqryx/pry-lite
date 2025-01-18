import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Route } from '@/app/route'
import { BrowserRouter } from "react-router-dom"
import { Middleware } from '@/app/middleware.tsx'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { ThemeProvider } from '@/components/providers/theme-provider'

import '@/assets/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider
        enableSystem
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <BrowserRouter>
          <Middleware>
            <Route />
          </Middleware>
        </BrowserRouter>

        <Toaster />
        <Analytics />
        <SonnerToaster />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
