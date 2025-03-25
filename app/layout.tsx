import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "agenziamarketing.ai - SEO Automatizzata con Intelligenza Artificiale",
  description: "Ottimizza la tua presenza online con l'AI che analizza, scrive e pubblica contenuti SEO-ready. Più traffico, meno lavoro.",
  keywords: ["Automazione SEO AI", "AI SEO Keyword Research", "Contenuti SEO AI", "SEO Automatizzata", "Intelligenza Artificiale SEO"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}



import './globals.css'