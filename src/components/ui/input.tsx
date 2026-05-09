import * as React from 'react'

import { cn } from '#/lib/utils.ts'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-9 w-full min-w-0 rounded-md border border-zinc-300 bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-red-700 selection:text-white file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-950/10',
        'aria-invalid:border-red-700 aria-invalid:ring-red-700/15',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
