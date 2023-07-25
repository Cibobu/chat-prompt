import { useReducer } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { StoreContextWrapper } from '@/store'
import reducer from '@/store/reducer'
import { globalState } from '@/store/state'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/headers'
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
            <div className="fixed w-full h-full">
              <div className="top-left absolute w-full h-full top-0 left-0 bg-no-repeat" style={{ backgroundImage: 'url("/gradient_purple_circle_topleft.png")' }}></div>
              <div className="bottom-right absolute w-full h-full bottom-0 right-0 bg-no-repeat" style={{ backgroundImage: 'url("/gradient_purple_circle_bottom_right.png")' }}></div>
            </div>
            {/* @ts-ignore */}
            <Header />
            <main className="flex flex-col flex-1">
              <Component {...pageProps} />
            </main>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </StoreContextWrapper.Provider>
  )
}
