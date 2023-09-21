import './globals.css'
import { Inter, League_Spartan } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Consult-Ar Engenharia',
  description: 'github.com/rdsgabriel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className}`}>
        {children}
      </body>
    </html>
  )
}
