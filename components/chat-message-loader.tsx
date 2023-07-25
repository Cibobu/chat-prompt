
// import Image from 'next/image'
import { cn } from '@/lib/utils'
import { IconOpenAI, IconUser } from '@/components/ui/icons'
import { Loader } from '@/public'


export interface ChatMessageLoadingProps {
  // message: Message
}

export function ChatMessageLoading({ ...props }: ChatMessageLoadingProps) {
  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12 text-sm')}
      {...props}
    >
      <div
        className={cn(
          'flex h-8 w-8 mr-4 shrink-0 select-none items-center justify-center rounded-md border shadow bg-primary text-primary-foreground'
        )}
      >
        <IconOpenAI />
      </div> 
      <div
        className={cn('flex-1 space-y-2 overflow-hidden px-4 py-3.5 max-w-fit bg-assistant text-start')}
        style={{
          borderRadius: '0 50px 50px 20px',
        }}
      >
        <Loader />
      </div>
    </div>
  )
}
