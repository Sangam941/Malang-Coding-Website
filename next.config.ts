import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'malangcode.pythonanywhere.com',
      },
    ],

  },
  
}
 
export default config

// domains: ['malangcode.pythonanywhere.com'],