import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Navbar App',
  description: 'Next.js + Tailwind CSS Navbar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${inter.className} `} style={{backgroundColor:"var(--bg-color)"}}>
        <Navbar />
        <main className="px-3 sm:px-3 md:px-4 lg:px-6 xl:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
