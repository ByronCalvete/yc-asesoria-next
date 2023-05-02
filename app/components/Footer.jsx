import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="bg-yc-red text-white text-xl">
      <section className="max-w-5xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way<br />
          Fairfield, New Jersey 12345-5555<br />
          Email:
          <Link href="mailto:inquires@acmerockets.com"
            >Inquires@acmerockets.com</Link><br />
          Phone: <Link href="tel:+15555555555">(555) 555-5555</Link>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <Link href="#link1" className="hover:opacity-90">Link 1</Link>
          <Link href="#link2" className="hover:opacity-90">Link 2</Link>
          <Link href="#link3" className="hover:opacity-90">Link 3</Link>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  )
}