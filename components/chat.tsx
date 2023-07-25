'use client'

// import { useChat, type Message } from 'ai/react'

import { cn, generateUID } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
import { getCookie, setCookieWithExpiration } from '@/lib/hooks/use-cookies-storage'
import { useEffect, useState } from 'react'
import ExampleChats from "@/exampleChat.json";
import { io } from 'socket.io-client'
import { signInService } from '@/services'
import { Message } from '@/store/state'


const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'
export interface ChatProps extends React.ComponentProps<'div'> {
  // initialMessages?: Message[]
  id?: string
}

export function Chat({ id, className }: ChatProps) {
  const EXAMPLE_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string
  const socket = io(EXAMPLE_BACKEND_URL);

  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<Message[]>([]);
  const [dataUID, setDataUID] = useState('');

  const fetchData = async (randomUID: string) => {
    try {
      const response = await signInService(randomUID); // Ganti dengan payload yang sesuai
      setData(response.data.data);
      console.log('response :', response.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    const randomUID = getCookie('uid') || '';

    if (!randomUID) {
      const idRandom = generateUID();
      setCookieWithExpiration('uid', idRandom);
    }
    if (randomUID) {
      setDataUID(randomUID)
      fetchData(randomUID)
    }
  }, []);

  useEffect(() => {
    socket.on('serverLoading', (data) => {
      console.log('loading :', data)
      setIsLoading(data)
    });
    // Fungsi yang akan dijalankan saat pesan diterima dari server
    socket.on('msgToClient', (data) => {
      console.log('Pesan dari server:', data);
      fetchData(dataUID)
    });
  }, [socket]);


  // Fungsi onSubmit untuk digunakan di PromptForm
  const handleSubmit = async (inputValue: string) => {
    // Lakukan sesuatu dengan nilai inputValue, misalnya mengirim pesan
    let messageDto = {
      conv_id: dataUID,
      user_message: inputValue
    }
    socket.emit('msgToServer', messageDto);
    const submitMessage = {
      "id": 64,
      "conv_id": "Zpq5Q7aa-PNJ3-hRiB-mDgs-nwfFzR2eCcCA",
      "ai_chat_role": "2",
      "message": inputValue,
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      "os": "Mac OS",
      "is_mobile": "0",
      "device": "Macintosh",
      "created_at": "2023-07-25 15:59:27"
    }
    data.push(submitMessage)
    // fetchData(dataUID)
  };
  

  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        <ChatList messages={data} isLoading={isLoading} />
        <ChatScrollAnchor trackVisibility={isLoading} />
      </div>
      <ChatPanel
        id={dataUID}
        isLoading={isLoading}
        // stop={stop}
        // append={append}
        // reload={reload}
        // messages={messages}
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
      />
    </>
  )
}
