import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '포트폴리오 웹사이트입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-100 min-h-screen py-8`}>
        {children}
      </body>
    </html>
  )
}