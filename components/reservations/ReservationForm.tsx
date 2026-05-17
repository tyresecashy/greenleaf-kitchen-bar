'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { OPENING_HOURS_DISPLAY, whatsappMessages, whatsappUrl } from '@/lib/constants'

const reservationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^(\+254|0)[17]\d{8}$/, 'Enter a valid Kenyan phone number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  date: z.string().min(1, 'Choose a date'),
  time: z.string().min(1, 'Choose a time'),
  guests: z.coerce.number().min(1, 'Enter your party size').max(50, 'For groups over 50, please contact us directly'),
  occasion: z.string().min(1, 'Choose an occasion'),
  specialRequests: z.string().max(500, 'Message should be 500 characters or less').optional(),
  website: z.string().optional(),
  formStartedAt: z.string(),
})

type ReservationValues = z.infer<typeof reservationSchema>

const fieldClass = 'h-12 rounded-lg border border-green-deep/15 bg-white px-4 outline-none ring-gold/40 focus:ring-4'
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'
const initialValues = () => ({ occasion: 'None', guests: 2, time: '19:00', website: '', formStartedAt: Date.now().toString() })

export function ReservationForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [fallbackUrl, setFallbackUrl] = useState(whatsappUrl(whatsappMessages.booking))
  const form = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: initialValues(),
  })

  async function onSubmit(data: ReservationValues) {
    setSubmitState('submitting')
    const message = whatsappMessages.reservationDetails(data)
    const nextFallbackUrl = whatsappUrl(message)
    setFallbackUrl(nextFallbackUrl)

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Reservation request failed')
      window.open(nextFallbackUrl, '_blank', 'noopener,noreferrer')
      setSubmitState('success')
      toast.success('Opening WhatsApp to confirm your reservation.')
      form.reset(initialValues())
    } catch {
      setSubmitState('error')
      toast.error('We could not send the form, but WhatsApp booking is still available.')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 grid gap-4 rounded-2xl bg-white p-5 shadow-sm sm:grid-cols-2" noValidate>
      <p className="text-sm font-semibold text-green-primary sm:col-span-2">
        Fill this short form {'\u2192'} tap Confirm via WhatsApp {'\u2192'} we reply to confirm.
      </p>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="reservation-website">Website</label>
        <input id="reservation-website" tabIndex={-1} autoComplete="off" {...form.register('website')} />
        <input type="hidden" {...form.register('formStartedAt')} />
      </div>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Name <span className="text-red-600" aria-label="required">*</span></span>
        <input className={fieldClass} placeholder="Full name *" required {...form.register('fullName')} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Phone <span className="text-red-600" aria-label="required">*</span></span>
        <input className={fieldClass} placeholder="Phone e.g. 0712092244 *" required {...form.register('phone')} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        Email
        <input className={fieldClass} placeholder="Email optional" {...form.register('email')} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Date <span className="text-red-600" aria-label="required">*</span></span>
        <input className={fieldClass} type="date" required {...form.register('date')} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Time <span className="text-red-600" aria-label="required">*</span></span>
        <select className={fieldClass} required {...form.register('time')}>
          {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Guests / party size <span className="text-red-600" aria-label="required">*</span></span>
        <input className={fieldClass} type="number" min={1} max={50} required {...form.register('guests')} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep">
        <span>Occasion <span className="text-red-600" aria-label="required">*</span></span>
        <select className={fieldClass} required {...form.register('occasion')}>
          {['None', 'Birthday', 'Anniversary', 'Business Lunch', 'Date Night', 'Group Outing', 'Private Event', 'Other'].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-green-deep sm:col-span-2">
        Message / notes
        <textarea
          className="min-h-28 rounded-lg border border-green-deep/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-4"
          placeholder="Special requests or notes"
          {...form.register('specialRequests')}
        />
      </label>
      {Object.values(form.formState.errors)[0]?.message ? <p className="text-sm text-red-600 sm:col-span-2">{Object.values(form.formState.errors)[0]?.message}</p> : null}
      {submitState === 'success' ? <p className="text-sm font-medium text-green-primary sm:col-span-2">Reservation received. WhatsApp should be opening to confirm.</p> : null}
      {submitState === 'error' ? (
        <p className="text-sm text-red-600 sm:col-span-2">
          The form could not be sent. You can still confirm directly on{' '}
          <a className="font-bold underline" href={fallbackUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </p>
      ) : null}
      <Button disabled={submitState === 'submitting'} className="h-12 rounded-full bg-green-primary hover:bg-green-deep sm:col-span-2">
        {submitState === 'submitting' ? 'Sending booking...' : 'Confirm via WhatsApp'}
      </Button>
      <p className="text-center text-sm font-semibold text-green-primary sm:col-span-2">
        We confirm bookings within minutes during opening hours: {OPENING_HOURS_DISPLAY}.
      </p>
    </form>
  )
}
