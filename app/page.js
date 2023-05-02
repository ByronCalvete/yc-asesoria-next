import Image from 'next/image'

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
      <h2 className="text-3xl font-bold text-left sm:text-5xl mb-6 text-slate-900dark:text-white">
        Descripción de sección
      </h2>
      <p className="text-2xl mt-4 sm:text-left text-left text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit dunt ut labore et dolo magna aliqua. Duis aute irure dolor in reprehenderit in voluptate</p>
      <div className="mx-auto my-14 flex flex-col sm:flex-row items-center gap-14">
        <figure className="w-2/3 sm:w-5/6 flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-xl">
          <Image width={100} height={100} src="/image-icon.svg" alt="Pendiente imagen" className="w-1/3 mb-6" />
          <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
            Certificados digitales
          </figcaption>
        </figure>
        <figure className="w-2/3 sm:w-5/6 flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-xl">
          <Image width={100} height={100} src="./image-icon.svg" alt="Pendiente imagen" className="w-1/3 mb-6" />
          <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
            Seguridad social
          </figcaption>
        </figure>
        <figure className="w-2/3 sm:w-5/6 flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-xl">
          <Image width={100} height={100} src="/image-icon.svg" alt="Pendiente imagen" className="w-1/3 mb-6" />
          <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
            Citas
          </figcaption>
        </figure>
      </div>
      <div className="mx-auto my-14 flex flex-col sm:flex-row items-center gap-14">
        <figure className="w-2/3 sm:w-5/6 flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-xl">
          <Image width={100} height={100} src="/image-icon.svg" alt="Pendiente imagen" className="w-1/3 mb-6" />
          <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
            Arraigos
          </figcaption>
        </figure>
        <figure className="w-2/3 sm:w-5/6 flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-xl">
          <Image width={100} height={100} src="/image-icon.svg" alt="Pendiente imagen" className="w-1/3 mb-6" />
          <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
            Residencias
          </figcaption>
        </figure>
        <figure className="w-2/3 sm:w-5/6 flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-xl">
          <Image width={100} height={100} src="/image-icon.svg" alt="Pendiente imagen" className="w-1/3 mb-6" />
          <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
            Renovaciones
          </figcaption>
        </figure>
      </div>
    </section>

    <hr className="mx-auto bg-black dark:bg-white w-1/2" />

    <section id="testimonials" className="max-w-5xl mx-auto p-6 my-12 scrooll-mt-20 sidescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Testimonios
      </h2>
      <figure className="my-12">
        <blockquote className="bg-yc-red dark:bg-[#222424] pl-14 pr-8 py-12 rounded-3xl relative">
          <p
            className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
          >
            Acme has always been there for me. Their Explorer rocket arrived
            in a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </p>
        </blockquote>
        <figcaption
          className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
        >
          &#8212; Wile E. Coyote, Genius
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-yc-red dark:bg-[#222424] pl-14 pr-8 py-12 rounded-3xl relative">
          <p
            className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
          >
            Acme has always been there for me. Their Explorer rocket arrived
            in a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </p>
        </blockquote>
        <figcaption
          className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
        >
          &#8212; Wile E. Coyote, Genius
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-yc-red dark:bg-[#222424] pl-14 pr-8 py-12 rounded-3xl relative">
          <p
            className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
          >
            Acme has always been there for me. Their Explorer rocket arrived
            in a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </p>
        </blockquote>
        <figcaption
          className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
        >
          &#8212; Wile E. Coyote, Genius
        </figcaption>
      </figure>
    </section>
    </main>
  )
}
