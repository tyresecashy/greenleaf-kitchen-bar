export const BUSINESS_NAME = 'GreenLeaf Kitchen & Bar'
export const SITE_URL = 'https://greenleaf-kitchen-bar.vercel.app'
export const LOCATION_AREA = 'Kamakis Bypass, Eastern Bypass, Ruiru'
export const LOCATION_LOCALITY = 'Ruiru'
export const LOCATION_ADMIN_AREA = 'Kiambu County'
export const LOCATION_REGION = 'Ruiru, Nairobi, Kenya'
export const LOCATION_LANDMARK = 'Opposite Galana Energies Petrol Station'
export const ADDRESS = `${LOCATION_AREA} \u00b7 ${LOCATION_LANDMARK}`
export const ADDRESS_INLINE = ADDRESS
export const LOCATION_ACCESS_COPY = 'Easy access by car, boda, or cab from Kamakis, Ruiru town, and the Eastern Bypass.'
export const LOCATION_DISTANCE_COPY = 'About 5 minutes from Ruiru town.'

export const WHATSAPP_NUMBER = '254712092244'
export const PHONE_DISPLAY = '+254 712 092 244'
export const PHONE_TEL = '+254712092244'
export const EMAIL = 'info@greenleafbar.co.ke'
export const INSTAGRAM_URL = 'https://www.instagram.com/greenleafkitchenbar'
export const INSTAGRAM_HANDLE = '@greenleafkitchenbar'
export const FACEBOOK_URL = 'https://web.facebook.com/p/GreenLeaf-Kitchen-Bar-100087524223980'
export const FACEBOOK_LABEL = 'GreenLeaf Kitchen & Bar'
export const TIKTOK_URL = ''

export const OPENING_HOURS_DISPLAY = 'Monday\u2013Sunday, 9:00 AM till late'
export const OPENING_HOURS_STRUCTURED = 'Mo-Su 09:00-23:59'

export const openingHoursDisplay = [OPENING_HOURS_DISPLAY]
export const HAPPY_HOUR_DISPLAY = 'Happy Hour Mon-Fri, 5PM-6PM'

export type SocialIcon = 'instagram' | 'facebook' | 'whatsapp' | 'tiktok'
export type SocialLink = {
  label: string
  href: string
  icon: SocialIcon
}

export const whatsappMessages = {
  enquiry: 'Hello GreenLeaf, I\u2019d like to make a general enquiry.',
  booking: 'Hello GreenLeaf, I\u2019d like to book a table.',
  groupBooking: 'Hello GreenLeaf, I\u2019d like to plan a group booking.',
  eventBooking: (eventTitle: string) => `Hello GreenLeaf, I\u2019d like to ask about an event: ${eventTitle}.`,
  menuNote: (itemName: string) => `Hello GreenLeaf, I\u2019d like to reserve for a menu item: ${itemName}.`,
  reservationDetails: (data: {
    fullName: string
    date: string
    time: string
    guests: number
    occasion: string
    specialRequests?: string
  }) =>
    `Hello GreenLeaf, I\u2019d like to book a table.\nName: ${data.fullName}\nDate: ${data.date} at ${data.time}\nGuests: ${data.guests}\nOccasion: ${data.occasion}${data.specialRequests ? `\nNotes: ${data.specialRequests}` : ''}`,
}

export function whatsappUrl(message = whatsappMessages.enquiry) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const optionalTikTokLink: SocialLink[] = TIKTOK_URL
  ? [{ label: 'TikTok', href: TIKTOK_URL, icon: 'tiktok' }]
  : []

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: INSTAGRAM_URL, icon: 'instagram' },
  { label: 'Facebook', href: FACEBOOK_URL, icon: 'facebook' },
  { label: 'WhatsApp', href: whatsappUrl(), icon: 'whatsapp' },
  ...optionalTikTokLink,
]

export const socialProfileLinks = [INSTAGRAM_URL, FACEBOOK_URL, ...optionalTikTokLink.map((link) => link.href)]

export const mapUrl =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_NAME} ${ADDRESS_INLINE}`)}`

export const mapEmbedUrl =
  `https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_NAME} ${ADDRESS_INLINE}`)}&output=embed`
