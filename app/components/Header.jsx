'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [hamburguerBtn, setHamburguerBtn] = useState(false)
  
  const handleClick = () => {
    setHamburguerBtn(!hamburguerBtn)
    setMobileMenu(!mobileMenu)
  }

  return (
    <header className="bg-slate-100 dark:bg-yc-red text-yc-red dark:text-white sticky top-0 z-10">
      <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src='/logo-yc.png' alt="logo" width={40} height={40}/>
          <h1 className="text-3xl font-light">
            <Link href="/">Asesoría Latina</Link></h1>
        </div>
        <div>
          <button onClick={handleClick} id="hamburguer-button" className={hamburguerBtn ? "text-3xl md:hidden cursor-pointer relative w-8 h-8 toggle-btn" : "text-3xl md:hidden cursor-pointer relative w-8 h-8"}>
            <div className="bg-yc-red dark:bg-white w-8 h-1 rounded absolute top-4 -mt-0 5 transition-all duration-500 before:content-[''] before:bg-yc-red dark:before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-yc-red after:dark:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <Link href="/about" className="hover:opacity-90">Link 1</Link>
            <Link href="#link2" className="hover:opacity-90">Link 2</Link>
            <Link href="#link3" className="hover:opacity-90">Link 3</Link>
            <Link href="/asesoria-gratuita" className="bg-yc-red dark:bg-slate-50 text-white dark:text-yc-red py-3 px-3 rounded-lg hover:opacity-90 border border-black shadow-xl">Asesoría Gratuita</Link>
          </nav>
        </div>
      </section>
      {mobileMenu && <section id="mobile-menu" className="absolute top-68 bg-slate-100 text-yc-red dark:bg-[#222424] dark:text-white w-full text-5xl flex-col justify-content-center origin-top animate-open-menu">
        <nav className="flex flex-col min-h-screen items-center py-8" area-label="mobile">
          <Link href="/" onClick={handleClick} className="w-full text-center py-6 hover:opacity-90">Inicio</Link>
          <Link href="/about" onClick={handleClick} className="w-full text-center py-6 hover:opacity-90">Link 1</Link>
          <Link href="#link2" onClick={handleClick} className="w-full text-center py-6 hover:opacity-90">Link 2</Link>
          <Link href="#link3" onClick={handleClick} className="w-full text-center py-6 hover:opacity-90">Link 3</Link>
          <Link href="#link4" onClick={handleClick} className="w-full text-center py-6 hover:opacity-90">Link 4</Link>
          <Link href="#footer" onClick={handleClick} className="w-full text-center py-6 hover:opacity-90">Legal</Link>
        </nav>
      </section>}
    </header>
  )
}