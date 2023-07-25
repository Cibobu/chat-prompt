import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import { cn } from '@/lib/utils'
import { MemoizedReactMarkdown } from '@/components/markdown'
import { IconOpenAI, IconUser } from '@/components/ui/icons'
import { Message } from '@/store/state'

export interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12 text-sm')}
      {...props}
    >
      {message.role !== 'user' ?
        <div
          className={cn(
            'flex h-8 w-8 mr-4 shrink-0 select-none items-center justify-center rounded-md border shadow bg-primary text-primary-foreground'
          )}
        >
          <IconOpenAI />
        </div> : null }
      <div
        className={cn('flex-1 space-y-2 overflow-hidden px-4 py-3.5 max-w-fit',
        message.role === 'user' ? 'ml-auto bg-user text-end' : 'bg-assistant text-start')}
        style={{
          borderRadius: message.role === 'user' ? '50px 0 20px 50px' : '0 50px 50px 20px',
        }}
      >
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
      </div>
      {message.role === 'user' ? 
        <div
          className={cn(
            'flex h-8 w-8 shrink-0 ml-4 select-none items-center justify-center rounded-md border shadow bg-background'
          )}
        >
          <IconUser />
        </div> : null }
    </div>
  )
}
