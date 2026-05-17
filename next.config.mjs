import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85, 90],
    localPatterns: [
      {
        pathname: '/images/upscaled/**',
      },
    ],
    minimumCacheTTL: 60,
  },
}

export default nextConfig
