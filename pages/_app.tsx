import { useReducer } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { StoreContextWrapper } from '@/store'
import reducer from '@/store/reducer'
import { globalState } from '@/store/state'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/headers'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from 'react-hot-toast'
import { TooltipProvider } from '@/components/ui/tooltip'


export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, globalState)
  // return <Component {...pageProps} />

  return (
    <StoreContextWrapper.Provider value={{state, dispatch}}>
      <Toaster />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            {/* @ts-ignore */}
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">
              <Component {...pageProps} />
            </main>
          </div>
          <TailwindIndicator />
        </TooltipProvider>
      </ThemeProvider>
    </StoreContextWrapper.Provider>
  )
}
