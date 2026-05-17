import { LOCATION_AREA } from './constants'

export const upcomingEvents = [
  {
    title: 'Live Jazz & Cocktails',
    day: 'Every Friday',
    time: '7:00 PM onwards',
    description: 'Live jazz band, signature cocktails, and an electric Friday atmosphere',
    price: 'Free Entry',
    tag: 'Weekly',
  },
  {
    title: 'BBQ Sunday Sessions',
    day: 'Every Sunday',
    time: '1:00 PM - 8:00 PM',
    description: 'Kenyan music, nyama choma, cold Tuskers, and good vibes all afternoon',
    price: 'Free Entry',
    tag: 'Weekly',
  },
  {
    title: 'Happy Hour',
    day: 'Mon - Fri',
    time: '5:00 PM - 6:00 PM',
    description: '20% off all cocktails and selected spirits. Bring the team.',
    price: 'Discounts',
    tag: 'Daily',
  },
]

export const guestNotes = [
  {
    label: 'Guest note',
    text: 'The ribs are worth coming back for.',
  },
  {
    label: 'From guest feedback',
    text: 'Cocktails were on point.',
  },
  {
    label: 'Guest note',
    text: 'Perfect spot for a chilled evening.',
  },
]

export const galleryImages: Array<{
  src: string
  category: string
  caption: string
  aspect?: 'landscape' | 'portrait' | 'square'
  teaserLabel?: string
  teaserSize?: 'feature'
}> = [
  { src: '/images/upscaled/hq/greenleaf-spacious-bar-lounge.webp', category: 'Interior', caption: 'Spacious GreenLeaf lounge with guests and modern seating', aspect: 'landscape', teaserLabel: 'Modern lounge', teaserSize: 'feature' },
  { src: '/images/upscaled/hq/greenleaf-modern-cafe-lounge.webp', category: 'Interior', caption: 'Modern GreenLeaf cafe lounge with warm seating', aspect: 'portrait', teaserLabel: 'Warm seating' },
  { src: '/images/upscaled/hq/greenleaf-neon-bar-interior.webp', category: 'Events', caption: 'GreenLeaf evening bar atmosphere with neon glow', aspect: 'portrait', teaserLabel: 'Night mood' },
  { src: '/images/upscaled/hq/greenleaf-entrance-sunny.webp', category: 'Location', caption: `Sunny GreenLeaf entrance on ${LOCATION_AREA}`, aspect: 'portrait', teaserLabel: 'GreenLeaf entrance' },
  { src: '/images/upscaled/greenleaf-rib-rack-platter.webp', category: 'Food', caption: 'GreenLeaf signature rib rack fresh from the grill', aspect: 'portrait', teaserLabel: 'Rib rack' },
  { src: '/images/upscaled/greenleaf-beef-wet-fry-skillet.webp', category: 'Food', caption: 'Beef wet fry sizzling in a skillet', aspect: 'portrait', teaserLabel: 'Beef wet fry' },
  { src: '/images/upscaled/greenleaf-grilled-meat-closeup.webp', category: 'Food', caption: 'Char-grilled meat close-up with smoky edges', aspect: 'portrait' },
  { src: '/images/upscaled/greenleaf-singleton-cocktail-meal.webp', category: 'Drinks', caption: 'Singleton, cocktails and a GreenLeaf meal pairing', aspect: 'landscape' },
  { src: '/images/upscaled/greenleaf-drinks-menu-card.webp', category: 'Drinks', caption: 'GreenLeaf drinks menu card for cocktails and spirits', aspect: 'portrait' },
  { src: '/images/upscaled/hq/greenleaf-cozy-dining-interior.webp', category: 'Interior', caption: 'Cozy GreenLeaf dining interior for easy evenings', aspect: 'landscape' },
  { src: '/images/upscaled/greenleaf-roadside-menu-sign.webp', category: 'Location', caption: `Roadside menu sign on ${LOCATION_AREA}`, aspect: 'portrait' },
  { src: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp', category: 'Drinks', caption: 'Cocktails and a bold GreenLeaf plate on the table', aspect: 'landscape' },
  { src: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp', category: 'Events', caption: 'Dinner and Happy Hour menu for weekly specials', aspect: 'square' },
]
