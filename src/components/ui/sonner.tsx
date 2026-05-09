import * as React from 'react'
import { CheckCircle2, X } from 'lucide-react'

type Toast = {
  id: number
  title: string
  description?: string
}

let toasts: Toast[] = []
const listeners = new Set<(toasts: Toast[]) => void>()

function emit() {
  listeners.forEach((listener) => listener(toasts))
}

function dismiss(id: number) {
  toasts = toasts.filter((toastItem) => toastItem.id !== id)
  emit()
}

function addToast(toastItem: Omit<Toast, 'id'>) {
  const id = Date.now()
  toasts = [{ ...toastItem, id }, ...toasts].slice(0, 3)
  emit()
  window.setTimeout(() => dismiss(id), 4200)
}

export const toast = {
  success(title: string, options?: { description?: string }) {
    addToast({ title, description: options?.description })
  },
}

export function Toaster() {
  const [visibleToasts, setVisibleToasts] = React.useState(toasts)

  React.useEffect(() => {
    listeners.add(setVisibleToasts)

    return () => {
      listeners.delete(setVisibleToasts)
    }
  }, [])

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed right-4 bottom-4 z-[130] grid w-[min(380px,calc(100vw-32px))] gap-3"
      role="status"
    >
      {visibleToasts.map((toastItem) => (
        <div
          className="pointer-events-auto flex items-start gap-3 rounded border border-zinc-200 bg-white px-4 py-3 text-left shadow-2xl"
          key={toastItem.id}
        >
          <CheckCircle2
            className="mt-0.5 shrink-0 text-emerald-600"
            size={18}
          />
          <div className="min-w-0 flex-1">
            <div className="font-heading text-sm font-bold uppercase text-zinc-950">
              {toastItem.title}
            </div>
            {toastItem.description ? (
              <div className="mt-1 text-sm leading-6 text-zinc-600">
                {toastItem.description}
              </div>
            ) : null}
          </div>
          <button
            aria-label="Dismiss notification"
            className="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded text-zinc-500 outline-none hover:bg-zinc-100 hover:text-zinc-950 focus-visible:ring-1 focus-visible:ring-zinc-950/15"
            onClick={() => dismiss(toastItem.id)}
            type="button"
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  )
}
