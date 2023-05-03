import Image from 'next/image'
import Service from './components/Service'
import Testimony from './components/Testimony'

// hardcoded data for testing
const data = {
  services: [
    {
      id: 1,
      name: 'Certificados digitales',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    },
    {
      id: 2,
      name: 'Seguridad Social',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    },
    {
      id: 3,
      name: 'Citas',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    },
    {
      id: 4,
      name: 'Arraigos',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    },
    {
      id: 5,
      name: 'Residencias',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    },
    {
      id: 6,
      name: 'Renovaciones',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    },
    {
      id: 7,
      name: 'Alta de autónomos',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    },
    {
      id: 8,
      name: 'Nacionalidad Española',
      img: '/image-icon.svg',
      imgDescription: 'Pendiente descripción',
      width: 100,
      height: 100,
    }
  ],
  testimonials: [
    {
      id: 1,
      content: 'Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.',
      author: 'Wile E. Coyote, Genius'
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
      <div className="bg-hero dark:bg-none dark:bg-[#363939]">
      <section id="hero" className="max-w-5xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            Asesoría Latina
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Una descripción que comunique lo que hacemos y cómo los beneficaremos. Necesitamos transmitir confianza y experiencia en lo que hacemos.
          </p>
          <div className="mt-8 flex gap-4">
            <button href="#link4" className="bg-yc-red py-2 px-3 text-lg rounded-xl hover:opacity-90 text-white w-1/2">Asesoría Gratuita</button>
            <button href="#link4" className="bg-slate-200 dark:bg-slate-50 text-yc-red py-4 px-3 text-xl rounded-lg hover:opacity-80 w-1/2 border border-yc-red">Testimonios</button>
          </div>
        </article>
        <div className="w-1/2 h-60 sm:h-80 grid place-content-center border-solid border-4 border-black dark:border-white rounded-xl bg-slate-200">
          <Image width={150} height={150} src="/image-icon.svg" alt="Pendiente imagen" />
        </div>
      </section>
    </div>

    <hr className="mx-auto bg-black dark:bg-white w-1/2" />

    <section id="services" className="max-w-5xl mx-auto p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900dark:text-white">
        Descripción de sección
      </h2>
      <p className="text-2xl mt-4 text-center text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit dunt ut labore et dolo magna aliqua. Duis aute irure dolor in reprehenderit in voluptate</p>
      <div className="mx-auto my-14 flex flex-col md:grid sm:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-14">
        {data.services.map(service => (
          <Service
            key={service.id}
            srcImage={service.img}
            altImage={service.imgDescription}
            name={service.name}
            width={service.width}
            height={service.height}
          />
        ))}
      </div>
    </section>

    <hr className="mx-auto bg-black dark:bg-white w-1/2" />

    <section id="testimonials" className="max-w-5xl mx-auto p-6 my-12 scrooll-mt-20 sidescreen:section-min-height tallscreen:section-min-height">
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
