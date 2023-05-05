import Image from 'next/image'
import Link from 'next/link'

export default function Citas() {
  return (
    <main>
      <div className="bg-hero dark:bg-none dark:bg-[#363939]">
        <section id="hero" className="max-w-5xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
          <article className="sm:w-2/3">
            <h2 className="max-w-lg text-4xl font-bold text-left sm:text-5xl text-slate-900 dark:text-white">
              We Boldy Go <span className="text-yc-red dark:opacity-80">Where No Rocket</span> Has Gone Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-left text-slate-700 dark:text-slate-400">
              We&apos;re building rockets for the next century today. From the moon to Mars, Jupiter and beyond<br/><br/>Think Acme Rockets.
            </p>
            <div className="mt-8 text-center sm:text-left">
              <button className="bg-yc-red px-3 py-4 text-md md:text-xl rounded-lg hover:opacity-90 text-white w-full md:w-2/3 sm:w-5/6 border border-black shadow-md hover:shadow-xl"><Link href='/certificado-digital'>Obtener certificado</Link></button>
            </div>
          </article>
          <div className="w-1/2 sm:w-1/3 h-60 sm:h-80 grid place-content-center border-solid border-4 border-black dark:border-white rounded-xl bg-slate-200">
            <Image width={150} height={150} src="/image-icon.svg" alt="Pendiente imagen" />
          </div>
        </section>
      </div>
    </main>
  )
}