import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getClientIp, isRateLimited, passesSpamChecks } from '@/lib/form-protection'

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  contact: z.string().trim().min(5).max(160).refine(
    (value) => z.string().email().safeParse(value).success || /^(\+254|0)[17]\d{8}$/.test(value),
    'Enter a valid email or Kenyan phone number',
  ),
  subject: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10).max(2_000),
  website: z.string().optional(),
  formStartedAt: z.string().optional(),
})

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, message: 'Too many requests' }, { status: 429 })
  }

  const parsed = contactSchema.safeParse(await req.json())
  if (!parsed.success || !passesSpamChecks(parsed.data)) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }

  const { website: _website, formStartedAt: _formStartedAt, ...data } = parsed.data
  console.log('=== NEW CONTACT ===', JSON.stringify(data, null, 2))
  return NextResponse.json({ success: true })
}
