import { createContext, useContext, useMemo, useState } from 'react'
import type { ComponentProps, FormEvent, ReactNode } from 'react'
import { ExternalLink, LoaderCircle } from 'lucide-react'
import { Button } from '#/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { toast } from '#/components/ui/sonner'
import { Textarea } from '#/components/ui/textarea'
import { requestForm } from './content'

type RequestFormContextValue = {
  closeRequestForm: () => void
  openRequestForm: () => void
}

type RequestFormValues = {
  bladeType: string
  budget: string
  details: string
  email: string
  intendedUse: string
  name: string
  timeline: string
}

const initialRequestFormValues: RequestFormValues = {
  bladeType: '',
  budget: '',
  details: '',
  email: '',
  intendedUse: '',
  name: '',
  timeline: '',
}

const RequestFormContext = createContext<RequestFormContextValue | null>(null)

export function useRequestForm() {
  const context = useContext(RequestFormContext)

  if (!context) {
    throw new Error('useRequestForm must be used within RequestFormProvider')
  }

  return context
}

export function RequestFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      closeRequestForm: () => setIsOpen(false),
      openRequestForm: () => setIsOpen(true),
    }),
    [],
  )

  return (
    <RequestFormContext.Provider value={value}>
      {children}
      <RequestFormDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </RequestFormContext.Provider>
  )
}

export function RequestFormButton({
  children,
  onClick,
  type = 'button',
  ...props
}: ComponentProps<typeof Button> & { children: ReactNode }) {
  const { openRequestForm } = useRequestForm()

  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          openRequestForm()
        }
      }}
      type={type}
    >
      {children}
    </Button>
  )
}

function RequestFormDialog({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}) {
  const hasJotform = requestForm.jotformUrl.trim().length > 0
  const [formValues, setFormValues] = useState(initialRequestFormValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isFormValid = Object.values(formValues).every(
    (value) => value.trim().length > 0,
  )

  function updateFormValue<Field extends keyof RequestFormValues>(
    field: Field,
    value: RequestFormValues[Field],
  ) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))
  }

  function handleSampleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSubmitting || !isFormValid) {
      return
    }

    const form = event.currentTarget

    setIsSubmitting(true)
    window.setTimeout(() => {
      form.reset()
      setFormValues(initialRequestFormValues)
      setIsSubmitting(false)
      onOpenChange(false)
      toast.success('Request submitted', {
        description:
          "Thanks. We'll review your blade request and get back to you.",
      })
    }, 900)
  }

  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogContent className="flex h-auto max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-3xl flex-col gap-0 overflow-hidden rounded border-zinc-800 bg-white p-0 shadow-2xl sm:max-w-3xl">
        <DialogHeader className="border-b border-zinc-200 px-5 py-4 pr-14 text-left">
          <DialogTitle className="font-heading text-xl font-bold uppercase text-zinc-950 md:text-2xl">
            {requestForm.title}
          </DialogTitle>
        </DialogHeader>

        <div className="min-h-0 overflow-auto bg-stone-100">
          {hasJotform ? (
            <iframe
              className="block h-[min(680px,calc(100vh-10rem))] min-h-[520px] w-full border-0 bg-white"
              src={requestForm.jotformUrl}
              title={requestForm.title}
            />
          ) : (
            <div className="px-4 py-5 md:px-5">
              <form
                aria-busy={isSubmitting}
                className="mx-auto grid max-w-3xl gap-4 rounded border border-zinc-200 bg-white p-4 md:p-5"
                onSubmit={handleSampleSubmit}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label
                      className="font-mono text-[11px] uppercase text-zinc-600"
                      htmlFor="sample-name"
                    >
                      Full Name
                    </Label>
                    <Input
                      className="min-h-11 rounded border-zinc-300 bg-white px-3 text-sm"
                      disabled={isSubmitting}
                      id="sample-name"
                      name="name"
                      onChange={(event) =>
                        updateFormValue('name', event.target.value)
                      }
                      required
                      type="text"
                      value={formValues.name}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      className="font-mono text-[11px] uppercase text-zinc-600"
                      htmlFor="sample-email"
                    >
                      Email Address
                    </Label>
                    <Input
                      className="min-h-11 rounded border-zinc-300 bg-white px-3 text-sm"
                      disabled={isSubmitting}
                      id="sample-email"
                      name="email"
                      onChange={(event) =>
                        updateFormValue('email', event.target.value)
                      }
                      required
                      type="email"
                      value={formValues.email}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label className="font-mono text-[11px] uppercase text-zinc-600">
                      Blade Type
                    </Label>
                    <Select
                      disabled={isSubmitting}
                      name="bladeType"
                      onValueChange={(value) =>
                        updateFormValue('bladeType', value)
                      }
                      required
                      value={formValues.bladeType}
                    >
                      <SelectTrigger className="min-h-11 w-full rounded border-zinc-300 bg-white px-3 text-sm">
                        <SelectValue placeholder="Select blade type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-katana">
                          Custom Katana
                        </SelectItem>
                        <SelectItem value="daisho-set">Daisho Set</SelectItem>
                        <SelectItem value="practice-blade">
                          Practice Blade
                        </SelectItem>
                        <SelectItem value="restoration">
                          Restoration or refurbishment
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label className="font-mono text-[11px] uppercase text-zinc-600">
                      Intended Use
                    </Label>
                    <Select
                      disabled={isSubmitting}
                      name="intendedUse"
                      onValueChange={(value) =>
                        updateFormValue('intendedUse', value)
                      }
                      required
                      value={formValues.intendedUse}
                    >
                      <SelectTrigger className="min-h-11 w-full rounded border-zinc-300 bg-white px-3 text-sm">
                        <SelectValue placeholder="Select intended use" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="collection">
                          Collection or display
                        </SelectItem>
                        <SelectItem value="training">
                          Martial arts training
                        </SelectItem>
                        <SelectItem value="cosplay">
                          Cosplay or costume
                        </SelectItem>
                        <SelectItem value="gift">Gift or souvenir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label
                      className="font-mono text-[11px] uppercase text-zinc-600"
                      htmlFor="sample-budget"
                    >
                      Budget Range
                    </Label>
                    <div className="relative">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-zinc-500"
                      >
                        {'\u20b1'}
                      </span>
                      <Input
                        className="min-h-11 rounded border-zinc-300 bg-white pr-3 pl-8 text-sm"
                        disabled={isSubmitting}
                        id="sample-budget"
                        inputMode="decimal"
                        name="budget"
                        onChange={(event) =>
                          updateFormValue('budget', event.target.value)
                        }
                        required
                        type="text"
                        value={formValues.budget}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label
                      className="font-mono text-[11px] uppercase text-zinc-600"
                      htmlFor="sample-timeline"
                    >
                      Target Timeline
                    </Label>
                    <Input
                      className="min-h-11 rounded border-zinc-300 bg-white px-3 text-sm"
                      disabled={isSubmitting}
                      id="sample-timeline"
                      name="timeline"
                      onChange={(event) =>
                        updateFormValue('timeline', event.target.value)
                      }
                      required
                      type="text"
                      value={formValues.timeline}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label
                    className="font-mono text-[11px] uppercase text-zinc-600"
                    htmlFor="sample-details"
                  >
                    Design and Specifications
                  </Label>
                  <Textarea
                    className="min-h-28 rounded border-zinc-300 bg-white px-3 py-3 text-sm"
                    disabled={isSubmitting}
                    id="sample-details"
                    name="details"
                    onChange={(event) =>
                      updateFormValue('details', event.target.value)
                    }
                    required
                    value={formValues.details}
                  />
                </div>

                <Button
                  className="min-h-12 w-full rounded border border-red-700 bg-red-700 font-heading text-xs font-bold uppercase text-white hover:bg-white hover:text-red-700 disabled:cursor-not-allowed disabled:border-red-700 disabled:bg-red-700 disabled:text-white disabled:opacity-45"
                  disabled={isSubmitting || !isFormValid}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="animate-spin" size={15} />
                      Submitting...
                    </>
                  ) : (
                    'Submit Order'
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>

        {hasJotform ? (
          <DialogFooter className="border-t border-zinc-200 bg-white p-4">
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded border border-zinc-950 bg-zinc-950 px-4 font-heading text-xs font-bold uppercase text-white no-underline hover:bg-white hover:text-zinc-950"
              href={requestForm.jotformUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open Full Form
              <ExternalLink size={15} />
            </a>
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
