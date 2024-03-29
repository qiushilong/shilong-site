import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'blog',
  description: 'my blog site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-cn">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
