import Image from 'next/image'
import Link from 'next/link'

import Service from './components/Service'
import Testimony from './components/Testimony'

// hardcoded data for testing
const data = {
  services: [
    {
      id: 1,
      name: 'Certificado digital',
      img: '/certificado-digital.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/certificado-digital',
    },
    {
      id: 2,
      name: 'Seguridad Social',
      img: '/seguridad-social.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/seguridad-social',
    },
    {
      id: 3,
      name: 'Citas',
      img: '/citas.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/citas',
    },
    {
      id: 4,
      name: 'Arraigos',
      img: '/arraigos.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/arraigos',
    },
    {
      id: 5,
      name: 'Residencias',
      img: '/residencias.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/residencias',
    },
    {
      id: 6,
      name: 'Renovaciones',
      img: '/renovaciones.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/renovaciones',
    },
    {
      id: 7,
      name: 'Alta de autónomos',
      img: '/alta-autonomos.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/alta-autonomo',
    },
    {
      id: 8,
      name: 'Nacionalidad Española',
      img: '/nacionalidad.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/nacionalidad',
    },
    {
      id: 9,
      name: 'Estancias legales',
      img: '/estancias-legales.svg',
      imgDescription: 'Pendiente descripción',
      width: 70,
      height: 70,
      link: '/estancias-legales'
    }
  ],
  testimonials: [
    {
      id: 1,
      content: 'Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.',
      author: 'Byron Mi mejor amigo'
    },
    {
      id: 2,
      content: 'Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.',
      author: 'Wile E. Coyote, Genius'
    },
    {
      id: 2,
      content: 'Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.',
      author: 'Wile E. Coyote, Genius'
    },
  ]
}

export default function Home() {
  return (
    <main>
      <div className="bg-hero2 bg-center sm:bg-center bg-cover bg-opacity-50">
        <section id="hero" className="max-w-5xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
          <article className="sm:w-5/6 grid place-content-center gap-8 sm:gap-12">
            <div className="mx-auto">
              <Image width={150} height={150} src="/logo-yc.png" alt="Pendiente descripción"/>
            </div>
            <h2 className="max-w-4xl text-4xl font-normal text-center sm:text-7xl text-white">
              YC Asesoría Latina
            </h2>
            <p className="max-w-3xl text-xl sm:text-3xl font-thin mt-4 rounded-lg text-center text-white dark:text-slate-400">
              Tu camino hacia una nueva vida, respaldado por expertos legales en extranjería
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/asesoria-gratuita" className="bg-slate-100 active:bg-white text-center px-3 py-4 text-lg md:text-xl rounded-lg hover:opacity-95 text-yc-red w-full sm:w-1/3 border border-black shadow-md hover:shadow-xl">
                Asesoría Gratuita
              </Link>
            </div>
          </article>
        </section>
      </div>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="services" className="max-w-5xl mx-auto p-6 my-6 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Nuestros servicios
        </h2>
        <p className="text-2xl mt-4 text-center text-slate-700 dark:text-slate-400">
          Ofrecemos soluciones legales eficaces y personalizadas para proteger sus derechos y defender sus intereses.
        </p>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-14">
          {data.services.map(service => (
            <Service
              key={service.id}
              srcImage={service.img}
              altImage={service.imgDescription}
              name={service.name}
              width={service.width}
              height={service.height}
              link={service.link}
            />
          ))}
        </div>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="testimonials" className="max-w-5xl mx-auto p-6 my-6 sm:my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Testimonios
        </h2>
        {data.testimonials.map(testimony => (
          <Testimony
            key={testimony.id}
            content={testimony.content}
            author={testimony.author}
          />
        ))}
      </section>
    </main>
  )
}
