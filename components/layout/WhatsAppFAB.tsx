'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { whatsappUrl } from '@/lib/constants'

export function WhatsAppFAB() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max rounded-full bg-green-deep px-3 py-1 text-xs font-semibold opacity-0 shadow-lg transition group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
      <MessageCircle className="relative size-7" />
    </motion.a>
  )
}
