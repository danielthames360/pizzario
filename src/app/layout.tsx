import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Pizza Rio',
  description:
    'Elegí el sabor y pedí tu pizza a través de nuestra tienda online'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
