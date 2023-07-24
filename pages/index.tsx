import Image from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'

import { Chat } from '@/components/chat'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <Chat />
  )
}
