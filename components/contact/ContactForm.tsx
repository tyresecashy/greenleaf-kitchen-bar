'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { LOCATION_LOCALITY, OPENING_HOURS_DISPLAY, whatsappUrl } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Enter your name'),
  contact: z.string().min(5, 'Enter your phone or email').refine(
    (value) => z.string().email().safeParse(value).success || /^(\+254|0)[17]\d{8}$/.test(value),
    'Enter a valid email or Kenyan phone number',
  ),
  subject: z.string().min(2, 'Choose what this is about'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  website: z.string().optional(),
  formStartedAt: z.string(),
})

type ContactValues = z.infer<typeof contactSchema>
const fieldClass = 'h-12 rounded-lg border border-green-deep/15 bg-white px-4 outline-none ring-gold/40 focus:ring-4'
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'
const initialValues = () => ({ subject: 'General Enquiry', website: '', formStartedAt: Date.now().toString() })

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const form = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: initialValues() })

  async function onSubmit(data: ContactValues) {
    setSubmitState('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Contact request failed')
      setSubmitState('success')
      toast.success('Message received. GreenLeaf will get back to you soon.')
      form.reset(initialValues())
    } catch {
      setSubmitState('error')
      toast.error('We could not send the form. WhatsApp is still available.')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl bg-white p-5 shadow-sm" noValidate>
      <p className="text-sm font-semibold text-green-primary">
        4.4 rating {'\u00b7'} Loved in {LOCATION_LOCALITY} {'\u00b7'} Open daily: {OPENING_HOURS_DISPLAY}
      </p>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" tabIndex={-1} autoComplete="off" {...form.register('website')} />
        <input type="hidden" {...form.register('formStartedAt')} />
      </div>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Name <span className="text-red-600" aria-label="required">*</span></span>
        <input className={fieldClass} placeholder="Name *" required {...form.register('name')} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Phone or email <span className="text-red-600" aria-label="required">*</span></span>
        <input className={fieldClass} placeholder="Phone or email *" required {...form.register('contact')} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>What is this about? <span className="text-red-600" aria-label="required">*</span></span>
        <select className={fieldClass} required {...form.register('subject')}>
          {['General Enquiry', 'Reservation Help', 'Private Event', 'Feedback'].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Message <span className="text-red-600" aria-label="required">*</span></span>
        <textarea
          className="min-h-40 rounded-lg border border-green-deep/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-4"
          placeholder="Message *"
          required
          {...form.register('message')}
        />
      </label>
      {Object.values(form.formState.errors)[0]?.message ? <p className="text-sm text-red-600">{Object.values(form.formState.errors)[0]?.message}</p> : null}
      {submitState === 'success' ? <p className="text-sm font-medium text-green-primary">Message sent. We will get back to you soon.</p> : null}
      {submitState === 'error' ? (
        <p className="text-sm text-red-600">
          The form could not be sent. You can still reach us on{' '}
          <a className="font-bold underline" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </p>
      ) : null}
      <Button disabled={submitState === 'submitting'} className="h-12 rounded-full bg-green-primary hover:bg-green-deep">
        {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
