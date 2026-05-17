# GreenLeaf Image Upgrade Plan

Current image strategy: core images are documented in `lib/images.ts`. The app will use `public/images/upscaled/*` only after real files are added to the inventory as `upscaledSrc`; until then, existing originals remain the safe fallback.

## Weak Images

| Current image | Current size | Issue | Recommended replacement size | Target filename | Used on |
|---|---:|---|---:|---|---|
| `/images/ribs-platter.png` | 384x343 | Used as hero/menu/gallery; too small for full-screen hero | 2400x1600 | `/images/upscaled/ribs-platter.png` | Home hero, menu grills, gallery |
| `/images/guest-cocktails.png` | 384x343 | Used as lifestyle/cocktail fallback across many cards | 1800x2400 | `/images/upscaled/guest-cocktails.png` | About snippet, about hero, cocktails, gallery |
| `/images/beef-fry.png` | 384x343 | Good subject, low card resolution | 1600x1600 | `/images/upscaled/beef-fry.png` | Featured dishes, menu grills, gallery |
| `/images/beef-rice-meal.png` | 384x342 | Good subject, low card resolution | 1600x1200 | `/images/upscaled/beef-rice-meal.png` | Featured dishes, menu mains, gallery |
| `/images/ugali-chicken.png` | 384x343 | Reused for unrelated seafood/vegetarian dishes | 1600x1200 | `/images/upscaled/ugali-chicken.png` | Featured dishes, menu mains, gallery |
| `/images/og-image.jpg` | 225x225 | Too small and wrong aspect for social preview | 1200x630 | `/images/upscaled/og-image.jpg` | Open Graph metadata |

## Replace First

1. `/images/upscaled/ribs-platter.png` - highest impact because it drives the home hero.
2. `/images/upscaled/guest-cocktails.png` - improves about, cocktails, and fallback cards.
3. `/images/upscaled/beef-fry.png` and `/images/upscaled/beef-rice-meal.png` - improves menu credibility.
4. A real cocktail close-up - add to inventory and use for cocktail/mocktail items instead of guest-cocktails.
5. Real bar/interior and outdoor seating photos - add for about/contact/location ambience.

## Notes

- Keep hero-grade images at least 2400px wide.
- Keep menu images square or near-square, at least 1600px on the short side.
- Avoid using small downloaded JPG placeholders for cards; they are mostly 168-250px wide.
- After adding real upscaled files, update `lib/images.ts` with the exact `upscaledSrc` path for each existing file.
