import { NextRequest } from 'next/server'

const WINDOW_MS = 60_000
const MAX_REQUESTS = 5
const MIN_SUBMIT_MS = 2_000
const MAX_SUBMIT_MS = 24 * 60 * 60 * 1_000

const requestsByIp = new Map<string, number[]>()

export type SpamCheckInput = {
  website?: string
  formStartedAt?: string
}

export function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0]?.trim() || 'unknown'
  return req.headers.get('x-real-ip') || 'unknown'
}

export function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (requestsByIp.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS)

  if (recent.length >= MAX_REQUESTS) {
    requestsByIp.set(ip, recent)
    return true
  }

  requestsByIp.set(ip, [...recent, now])
  return false
}

export function passesSpamChecks(input: SpamCheckInput) {
  if (input.website?.trim()) return false

  const startedAt = Number(input.formStartedAt)
  if (!Number.isFinite(startedAt)) return false

  const elapsed = Date.now() - startedAt
  return elapsed >= MIN_SUBMIT_MS && elapsed <= MAX_SUBMIT_MS
}
