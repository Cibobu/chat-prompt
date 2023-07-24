'use client'

// import { useChat, type Message } from 'ai/react'

import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { toast } from 'react-hot-toast'
import { Message } from '@/store/state'
import ExampleChats from "@/exampleChat.json";


const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'
export interface ChatProps extends React.ComponentProps<'div'> {
  // initialMessages?: Message[]
  id?: string
}

export function Chat({ id, className }: ChatProps) {
  const [isLoading, setIsLoading] = useState()
  const [data, setData] = useState(null);

  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        <ChatList messages={ExampleChats} />
        <ChatScrollAnchor trackVisibility={isLoading} />
      </div>
      <ChatPanel
        id={id}
        // isLoading={isLoading}
        // stop={stop}
        // append={append}
        // reload={reload}
        // messages={messages}
        // input={input}
        // setInput={setInput}
      />
    </>
  )
}
