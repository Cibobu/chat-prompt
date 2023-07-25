import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconRefresh, IconStop } from '@/components/ui/icons'
import { getCookie, setCookieWithExpiration } from '@/lib/hooks/use-cookies-storage'

export interface ChatPanelProps {
  id?: string,
  isLoading: boolean,
  input: string,
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (input: string) => Promise<void>;
}

export function ChatPanel({
  id, isLoading, input, setInput, onSubmit
}: ChatPanelProps) {

  const resetUIDExpiration = (id: string) => {
    setCookieWithExpiration('uid', id); // Hanya mengatur ulang waktu kadaluarsa tanpa mengubah nilai "uid"
  };

  useEffect(() => {
    if (id) {
      resetUIDExpiration(id);
    }
  }, [isLoading, input, id]);
  
  return (
    <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%">
      <ButtonScrollToBottom />
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="flex h-10 items-center justify-center">
          {input?.length > 0 && (
            <Button
              variant="outline"
              // onClick={() => reload()}
              className="bg-background"
            >
              <IconRefresh className="mr-2" />
              Regenerate response
            </Button>)}
        </div>
        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm
            onSubmit={onSubmit}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  )
}
