import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar_ from '@/components/Navbar_'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OptiWay',
  description: 'Generated by create next app',
}

export const AllData : Array<Object> = [
  {
    "from": "",
    "to": "",
    "longitude_from": 0,
    "latitude_from": 0,
    "longitude_to": 0,
    "latitude_to": 0,
    "route": "",
    "route_length": "",
    "frequency": "",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar_/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
