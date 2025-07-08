import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [new URL('https://malangcode.pythonanywhere.com/media/hero_images/**')],
  },
}
 
export default config

// domains: ['malangcode.pythonanywhere.com'],