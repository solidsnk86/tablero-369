import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tablero Digital - BAP',
  description: 'Tablero de tantos para Bochas - Desarrollo de software por solidSnk86 todos los derechos reservados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
      <meta name="apple-mobile-web-app-title" content="Tablero PWA"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
