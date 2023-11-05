import './globals.css'
import { Inter, IBM_Plex_Sans, Roboto_Mono } from 'next/font/google'

const ibm = IBM_Plex_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const roboto = Roboto_Mono({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'AI1',
  description: 'Ai1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
