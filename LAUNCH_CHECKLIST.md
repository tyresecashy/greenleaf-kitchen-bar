# GreenLeaf Kitchen & Bar Launch Checklist

## Domain and Hosting

- Confirm the production domain is `https://greenleafbar.co.ke`.
- Confirm HTTPS is active and HTTP redirects to HTTPS.
- Connect the project to GitHub for source control and review history.
- Connect GitHub to Vercel for automated deployments.
- Confirm Vercel project settings, production branch, and rollback access.
- Keep a recent zipped backup until the GitHub/Vercel flow is fully trusted.

## Business Details

- Confirm phone and WhatsApp number: `+254 712 092 244`.
- Confirm location copy: `Kamakis Bypass, Eastern Bypass, Ruiru · Opposite Galana Energies Petrol Station`.
- Confirm opening hours: `Monday–Sunday, 9:00 AM till late`.
- Confirm landmark and Google Maps pin with owner before public launch.
- Confirm the Google Maps link opens the correct location.
- Confirm opening hours across the website.
- Confirm menu items, prices, happy hour details, and event details.
- Confirm Instagram and Facebook links.

## Environment and Integrations

- Set environment variables if future integrations require them.
- Do not hardcode tracking IDs, API keys, payment keys, or business credentials.
- Confirm contact and reservation API routes work in production.

## Pre-Launch Testing

- Test `/`, `/menu`, `/events`, `/reservations`, `/gallery`, `/about`, `/contact`, and `/privacy`.
- Test the branded 404 page with a fake URL.
- Test the contact form.
- Test the reservation form.
- Test WhatsApp booking links on desktop and mobile.
- Test phone, email, map, Instagram, and Facebook links.
- Test mobile layout on Safaricom/Airtel-style slower connections where possible.
- Run `pnpm build` before launch.

## SEO and Indexing

- Confirm `sitemap.xml` is available after deployment.
- Confirm `robots.txt` is available after deployment.
- Submit the sitemap to Google Search Console later.
- Add Google Search Console verification later without hardcoding private credentials.

## Backup and Rollback

- Keep the last known-good deployment available in Vercel for rollback.
- Tag or note launch commits in GitHub once the repo is connected.
- Keep a copy of current image assets and business copy.
- After launch, document any urgent fixes in the repository before redeploying.
