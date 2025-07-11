import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'malangcode.pythonanywhere.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
    ],

  },
  
}
 
export default config

// domains: ['malangcode.pythonanywhere.com'],