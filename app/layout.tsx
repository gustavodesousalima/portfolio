import type { Metadata } from 'next'
import profileImage from "../public/profile.png"
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio -  Gustavo',
  description: 'Portfólio de Gustavo',
  icons: {
    icon: profileImage.src
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href={profileImage.src} sizes="any" />
      </head>
      <body>{children}</body>
    </html>

  )
}