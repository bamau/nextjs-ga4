import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GA4 NextJs',
  description: 'This is an example of implement GA4 for NextJs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId='G-CCR7P4N45X' dataLayerName='dataLayer' />
    </html>
  )
}
