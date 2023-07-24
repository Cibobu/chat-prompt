import * as React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center w-full h-16 px-4 border-b shrink-0 bg-transparent backdrop-blur-xl">
      <div className="flex items-center space-x-2 relative width-full">
        <div className="absolute left-1/2 transform -translate-x-1/2"> {/* Memposisikan div di tengah secara horizontal */}
          <Image
            src="/images/avatar_big.png"
            width={60}
            height={60}
            alt="Picture of the author"
            className={cn("z-10 min-w-fit absolute")}
          />
        </div>
      </div>
    </header>
  )
}