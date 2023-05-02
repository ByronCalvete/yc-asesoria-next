import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YC Asesoría Latina - Inicio',
  description: 'Abogados expertos en extranjería',
  icons: {
    icon: '/logo-yc-favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 dark:bg-[#222424] dark:text-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
