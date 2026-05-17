export type RestaurantImageKey =
  | 'heroFeature'
  | 'heroSupport'
  | 'heroRibs'
  | 'guestCocktails'
  | 'beefFry'
  | 'beefWetFry'
  | 'ugaliChicken'
  | 'ribRack'
  | 'grilledMeat'
  | 'happyHourMenu'
  | 'roadsideMenuSign'
  | 'drinksMenuCard'
  | 'logoPrimary'
  | 'barInterior'
  | 'outdoorSeating'
  | 'aboutInterior'
  | 'eventsNightInterior'
  | 'menuFallback'
  | 'ogImage'

export type ImageFit = 'cover' | 'contain'

type RestaurantImage = {
  src: string
  alt: string
  usedOn: string[]
  weak: boolean
  recommendedReplacement: string
  objectPosition?: string
  fit: ImageFit
}

const upscaled = '/images/upscaled'
const hq = `${upscaled}/hq`

/*
 * Image inventory:
 * - Every source is kept inside the upscaled image pack.
 * - WebP is preferred for the current website inventory.
 * - Menu, signage, and logo assets use `fit: "contain"` so text/branding is not cropped.
 */
export const restaurantImages: Record<RestaurantImageKey, RestaurantImage> = {
  heroFeature: {
    src: `${hq}/greenleaf-spacious-bar-lounge.webp`,
    alt: 'Spacious GreenLeaf Kitchen and Bar lounge with guests and modern seating',
    usedOn: ['Home hero', 'Menu page hero'],
    weak: false,
    recommendedReplacement: 'Current HQ lounge image is the preferred large hero source',
    objectPosition: 'center',
    fit: 'cover',
  },
  heroSupport: {
    src: `${upscaled}/greenleaf-cocktail-spicy-meal.webp`,
    alt: 'GreenLeaf spicy cocktail and meal pairing',
    usedOn: ['Gallery', 'Hero support imagery', 'Cocktail menu feature'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for feature use',
    objectPosition: 'center 48%',
    fit: 'cover',
  },
  heroRibs: {
    src: `${upscaled}/greenleaf-rib-rack-platter.webp`,
    alt: 'GreenLeaf signature rib rack platter',
    usedOn: ['Menu ribs', 'Featured grills', 'Gallery'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for menu cards',
    objectPosition: 'center 45%',
    fit: 'cover',
  },
  guestCocktails: {
    src: `${hq}/greenleaf-modern-cafe-lounge.webp`,
    alt: 'Modern GreenLeaf Kitchen and Bar cafe lounge with warm seating',
    usedOn: ['Home story image', 'Lifestyle ambience'],
    weak: false,
    recommendedReplacement: 'Current HQ lounge image is suitable for large homepage storytelling',
    objectPosition: 'center',
    fit: 'cover',
  },
  beefFry: {
    src: `${upscaled}/greenleaf-beef-wet-fry-skillet.webp`,
    alt: 'GreenLeaf beef wet fry in skillet',
    usedOn: ['Menu grills', 'Featured dishes', 'Gallery'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for menu cards',
    objectPosition: 'center 50%',
    fit: 'cover',
  },
  beefWetFry: {
    src: `${upscaled}/greenleaf-beef-wet-fry-skillet.webp`,
    alt: 'Beef wet fry skillet at GreenLeaf',
    usedOn: ['Wet fry and nyama dish menu cards'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for menu cards',
    objectPosition: 'center 50%',
    fit: 'cover',
  },
  ugaliChicken: {
    src: `${upscaled}/greenleaf-cocktail-spicy-meal.webp`,
    alt: 'GreenLeaf plated meal with cocktail',
    usedOn: ['Menu mains', 'Gallery'],
    weak: false,
    recommendedReplacement: 'Replace with dedicated ugali chicken photo when available',
    objectPosition: 'center 48%',
    fit: 'cover',
  },
  ribRack: {
    src: `${upscaled}/greenleaf-rib-rack-platter.webp`,
    alt: 'GreenLeaf rib rack platter',
    usedOn: ['Ribs menu cards', 'Grill highlights'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for menu cards',
    objectPosition: 'center 45%',
    fit: 'cover',
  },
  grilledMeat: {
    src: `${upscaled}/greenleaf-grilled-meat-closeup.webp`,
    alt: 'GreenLeaf grilled meat close-up',
    usedOn: ['Nyama choma', 'Mixed grill', 'Gallery'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for menu cards',
    objectPosition: 'center 50%',
    fit: 'cover',
  },
  happyHourMenu: {
    src: `${upscaled}/greenleaf-dinner-happy-hour-menu.webp`,
    alt: 'GreenLeaf dinner and happy hour menu',
    usedOn: ['Happy hour menu reference', 'Events page proof'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for menu/signage use',
    objectPosition: 'center',
    fit: 'contain',
  },
  roadsideMenuSign: {
    src: `${upscaled}/greenleaf-roadside-menu-sign.webp`,
    alt: 'GreenLeaf roadside menu sign',
    usedOn: ['Contact proof', 'About proof', 'Gallery signage'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for signage proof',
    objectPosition: 'center',
    fit: 'contain',
  },
  drinksMenuCard: {
    src: `${upscaled}/greenleaf-drinks-menu-card.webp`,
    alt: 'GreenLeaf drinks menu card',
    usedOn: ['Cocktails', 'Mocktails', 'Beer and wine', 'Spirits'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for menu reference cards',
    objectPosition: 'center',
    fit: 'contain',
  },
  logoPrimary: {
    src: `${upscaled}/greenleaf-logo-primary.webp`,
    alt: 'GreenLeaf Kitchen and Bar logo',
    usedOn: ['Header logo', 'Footer logo'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable for brand use',
    objectPosition: 'center',
    fit: 'contain',
  },
  barInterior: {
    src: `${hq}/greenleaf-spacious-bar-lounge.webp`,
    alt: 'Spacious GreenLeaf Kitchen and Bar lounge with guests and modern seating',
    usedOn: ['Gallery interior', 'Large hospitality storytelling'],
    weak: false,
    recommendedReplacement: 'Current HQ lounge image is suitable for large interior use',
    objectPosition: 'center',
    fit: 'cover',
  },
  outdoorSeating: {
    src: `${hq}/greenleaf-entrance-sunny.webp`,
    alt: 'Sunny GreenLeaf Kitchen and Bar entrance exterior',
    usedOn: ['Home find us proof', 'Contact page location image'],
    weak: false,
    recommendedReplacement: 'Current HQ entrance image is suitable for exterior/location use',
    objectPosition: 'center',
    fit: 'cover',
  },
  aboutInterior: {
    src: `${hq}/greenleaf-spacious-bar-lounge.webp`,
    alt: 'Spacious GreenLeaf Kitchen and Bar lounge with guests and modern seating',
    usedOn: ['About page hero', 'Our Story ambience'],
    weak: false,
    recommendedReplacement: 'Current HQ lounge image is suitable for about hero use',
    objectPosition: 'center',
    fit: 'cover',
  },
  eventsNightInterior: {
    src: `${hq}/greenleaf-neon-bar-interior.webp`,
    alt: 'GreenLeaf bar interior with neon evening atmosphere',
    usedOn: ['Events page night-vibe feature'],
    weak: false,
    recommendedReplacement: 'Current HQ neon interior is suitable for event ambience',
    objectPosition: 'center',
    fit: 'cover',
  },
  menuFallback: {
    src: `${upscaled}/greenleaf-drinks-menu-card.webp`,
    alt: 'GreenLeaf menu card',
    usedOn: ['Menu cards with missing dish-specific photos'],
    weak: false,
    recommendedReplacement: 'Current upscaled WebP is suitable as a menu fallback',
    objectPosition: 'center',
    fit: 'contain',
  },
  ogImage: {
    src: `${upscaled}/greenleaf-singleton-cocktail-meal.webp`,
    alt: 'GreenLeaf Kitchen and Bar social preview',
    usedOn: ['Open Graph metadata'],
    weak: false,
    recommendedReplacement: 'Use a dedicated 1200x630 social card when available',
    objectPosition: 'center 45%',
    fit: 'cover',
  },
}

export function imageSrc(key: RestaurantImageKey) {
  return restaurantImages[key].src
}

export function imageObjectPosition(src: string) {
  const image = Object.values(restaurantImages).find((item) => item.src === src)
  return image?.objectPosition ?? 'center'
}

export function imageFit(src: string): ImageFit {
  const image = Object.values(restaurantImages).find((item) => item.src === src)
  return image?.fit ?? 'cover'
}

export function resolveImage(src: string | null | undefined, fallback: RestaurantImageKey = 'menuFallback') {
  if (!src) return imageSrc(fallback)
  return src
}
