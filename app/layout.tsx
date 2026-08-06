import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orbit AI – AI Employee for Modern Businesses',
  description:
    'Orbit AI helps businesses automate customer conversations, qualify leads, book appointments and grow sales using AI.',
  generator: 'v0.app',
  openGraph: {
    title: 'Orbit AI – AI Employee for Modern Businesses',
    description:
      'Your AI Employee That Never Sleeps. Automate customer conversations, qualify leads, and close sales 24/7.',
    type: 'website',
    url: 'https://orbitai.com',
    images: [
      {
        url: 'https://orbitai.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orbit AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbit AI – AI Employee for Modern Businesses',
    description:
      'Your AI Employee That Never Sleeps. Automate customer conversations, qualify leads, and close sales 24/7.',
    images: ['https://orbitai.com/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0F19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
