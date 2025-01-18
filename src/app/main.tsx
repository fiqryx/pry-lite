import { StrictMode } from 'react'
import { routes } from '../lib/route.ts'
import { createRoot } from 'react-dom/client'

import { Middleware } from './middleware.tsx'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { ThemeProvider } from '@/components/providers/theme-provider'

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

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
            <Routes>
              {routes.map(
                ({ page: Comp, ...props }, idx) => Comp && (
                  <Route {...props} key={idx} element={<Comp />} />
                )
              )}
            </Routes>
          </Middleware>
        </BrowserRouter>
      </ThemeProvider>

      <Toaster />
      <Analytics />
      <SonnerToaster />
    </HelmetProvider>
  </StrictMode>,
)
