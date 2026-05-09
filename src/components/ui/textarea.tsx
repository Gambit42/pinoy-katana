import * as React from 'react'

import { cn } from '#/lib/utils.ts'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex field-sizing-content min-h-16 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-zinc-500 focus-visible:border-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-950/10 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-700 aria-invalid:ring-red-700/15 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
