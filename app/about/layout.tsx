import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { CustomCursor } from './components/custom-cursor'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Tharanya Subramani - UI/UX Designer & Developer',
  description: 'Portfolio of Tharanya Subramani, UI/UX Designer and Developer based in Tamil Nadu, India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans bg-white`}>
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}
