import * as React from 'react'
import Textarea from 'react-textarea-autosize'

import { Button, buttonVariants } from '@/components/ui/button'
import { IconArrowElbow, IconPlus } from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { getCookie, setCookieWithExpiration } from '@/lib/hooks/use-cookies-storage'

export interface PromptProps {
  onSubmit?: (value: string) => Promise<void>;
  isLoading: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input?: string;
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const router = useRouter()

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const resetUIDExpiration = () => {
    const currentUID = getCookie('uid');
    if (currentUID) {
      setCookieWithExpiration('uid', currentUID);
    } // Hanya mengatur ulang waktu kadaluarsa tanpa mengubah nilai "uid"
  };

  const onChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Tangkap setiap perubahan yang terjadi pada textarea
    setInput && setInput(event.target.value);
    resetUIDExpiration();
  };

  const onFocuses = () => {
    // Tangkap aktifitas ketika textarea mendapatkan fokus
    resetUIDExpiration();
  };

  const onBlurs = () => {
    // Tangkap aktifitas ketika textarea kehilangan fokus
    resetUIDExpiration();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input?.trim()) {
      return;
    }
    setInput('');
    if (onSubmit) {
      await onSubmit(input); // Panggil onSubmit yang disediakan di komponen Chat
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={e => {
                e.preventDefault()
                router.refresh()
                router.push('/')
              }}
              className={cn(
                buttonVariants({ size: 'sm', variant: 'outline' }),
                'absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4'
              )}
            >
              <IconPlus />
              <span className="sr-only">New Chat</span>
            </button>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
        </Tooltip>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={onChanges}
          onFocus={onFocuses}
          onBlur={onBlurs}
          placeholder="Send a message."
          spellCheck={false}
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
        />
        <div className="absolute right-0 top-4 sm:right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || input === ''}
              >
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}
