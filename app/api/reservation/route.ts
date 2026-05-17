import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getClientIp, isRateLimited, passesSpamChecks } from '@/lib/form-protection'

const reservationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().regex(/^(\+254|0)[17]\d{8}$/),
  email: z.string().trim().email().max(160).optional().or(z.literal('')),
  date: z.string().trim().min(1).max(40),
  time: z.string().trim().min(1).max(20),
  guests: z.coerce.number().int().min(1).max(50),
  occasion: z.string().trim().min(1).max(80),
  specialRequests: z.string().trim().max(500).optional(),
  website: z.string().optional(),
  formStartedAt: z.string().optional(),
})

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, message: 'Too many requests' }, { status: 429 })
  }

  const parsed = reservationSchema.safeParse(await req.json())
  if (!parsed.success || !passesSpamChecks(parsed.data)) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }

  const { website: _website, formStartedAt: _formStartedAt, ...data } = parsed.data
  console.log('=== NEW RESERVATION ===', JSON.stringify(data, null, 2))
  return NextResponse.json({ success: true, message: 'Reservation received!' })
}
