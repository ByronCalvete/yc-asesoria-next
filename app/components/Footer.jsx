import Link from 'next/link'
import Image from 'next/image'

const data = {
  social: [
    {
      id: 1,
      img: '/instagram.svg',
      imgDescription: 'Pendiente descripción',
      link: 'https://www.instagram.com/yc.asesoria.latina/'
    },
    {
      id: 2,
      img: '/tiktok.svg',
      imgDescription: 'Pendiente descripción',
      link: 'https://www.tiktok.com/discover/asesor%C3%ADa-latina'
    },
    {
      id: 3,
      img: '/facebook.svg',
      imgDescription: 'Pendiente descripción',
      link: 'https://www.facebook.com/ycasesorialatinagratuita'
    },
    {
      id: 4,
      img: '/telegram.svg',
      imgDescription: 'Pendiente descripción',
      link: 'https://t.me/+bswu-LJYw6Y1NzE8'
    },
    {
      id: 5,
      img: '/whatsapp.svg',
      imgDescription: 'Pendiente descripción',
      link: ''
    },
  ],
  services: [
    {
      id: 1,
      name: 'Certificado digital',
      link: '/certificado-digital'
    },
    {
      id: 2,
      name: 'Número de Seguridad Social',
      link: '/seguridad-social'
    },
    {
      id: 3,
      name: 'Citas',
      link: '/citas'
    },
    {
      id: 4,
      name: 'Arraigos',
      link: '/arraigos'
    },
    {
      id: 5,
      name: 'Residencias',
      link: '/residencias'
    },
    {
      id: 6,
      name: 'Renovaciones',
      link: '/renovaciones'
    },
    {
      id: 7,
      name: 'Alta de autónomos',
      link: '/alta-autonomo'
    },
    {
      id: 8,
      name: 'Nacionalidad Española',
      link: '/nacionalidad'
    },
    {
      id: 9,
      name: 'Estancias Legales',
      link: '/estancias-legales'
    },
  ]
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-yc-red text-white text-xl">
      <section className="max-w-6xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between gap-6">
        <div className="w-full sm:w-1/3 text-center sm:text-left">
          <h3 className="font-bold text-2xl mb-4 text-yellow-400">Información de Contacto</h3>
          <div className="mb-6">
            <h4 className="text-lg mb-2 font-semibold text-yellow-400">Estamos ubicados</h4>
            <address className="text-sm font-light">
              Avenida La Perla, 13<br/>
              Metro San Fermin, Línea 3<br/>
              Madrid - España
            </address>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2 text-yellow-400">Nuestro teléfono</h4>
            <Link href="tel:+34643209682" className="text-sm font-light">+34 643 209 682</Link>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2 text-yellow-400">Correo Electrónico</h4>
            <Link href="mailto:me@email.com" className="font-light text-sm">me@email.com</Link>
          </div>
        </div>
        <div className="w-full sm:w-1/3 text-center sm:text-left">
          <h3 className="font-bold text-2xl mb-4 text-yellow-400">Nuestro servicios</h3>
          <ul className="list-none sm:list-[square] sm:list-inside">
            {data.services.map(service => (
              <Link href={service.link} key={service.id}>
                <li className="text-yellow-400 font-light text-sm mb-2"><span className="text-white">{service.name}</span></li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full text-center sm:w-1/3">
          <h3 className="font-bold text-2xl mb-4 text-yellow-400">Help us improve the design system</h3>
          <p className="font-light text-sm mb-6">The Ontario Design System provides principles, guidance and code to help teams design and build accessible, mobile-friendly government websites and digital services.</p>
          <div className="flex flex-col items-center mb-6">
            <p className="text-lg font-normal">Asesoría Gratuita</p>
            <Link href="tel:+34919351010" className="text-4xl font-bold text-yellow-400">919351010</Link>
          </div>
          <div className="flex gap-6 mb-6 justify-center">
            {data.social.map(d => (
              <figure key={d.id}>
                <Link href={d.link} target="_blank"><Image width={30} height={30} src={d.img} alt={d.imgDescription}/></Link>
              </figure>
            ))}
          </div>
        </div>
        {/* <address>
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
        </div> */}
      </section>
      <div className="flex text-center text-xs sm:text-sm font-light justify-center p-3 gap-4 bg-[#920004]">
          <p>YC Asesoría Latina &copy; <span id="year">2023</span></p>
          <p>Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}