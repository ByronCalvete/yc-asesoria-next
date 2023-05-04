import Image from 'next/image'
import Link from 'next/link'

import Step from '../certificado-digital/components/Step'

export default function SeguridadSocial() {
  const data = [
    {
      id: 1,
      name: "Step 1",
      content: "We're building rockets for the next century today"
    },
    {
      id: 2,
      name: "Step 2",
      content: "We're building rockets for the next century today"
    },
    {
      id: 2,
      name: "Step 3",
      content: "We're building rockets for the next century today"
    },
  ]

  return (
    <main>
      <div className="bg-hero dark:bg-none dark:bg-[#363939]">
        <section className="max-w-5xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-left sm:text-5xl text-slate-900 dark:text-white">
              We Boldy Go <span className="text-yc-red dark:opacity-80">Seguridad Social</span> Has Gone Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-left text-slate-700 dark:text-slate-400">
              We&apos;re building rockets for the next century today. From the moon to Mars, Jupiter and beyond<br/><br/>Think Acme Rockets.
            </p>
            <div className="mt-8 text-center sm:text-left">
              <button className="bg-yc-red px-3 py-4 text-md md:text-xl rounded-lg hover:opacity-90 text-white w-full md:w-2/3 sm:w-5/6 border border-black shadow-md hover:shadow-xl"><Link href='/seguridad-social'>Obtener NUSS</Link></button>
            </div>
          </article>
          <div className="w-1/2 h-60 sm:h-80 grid place-content-center border-solid border-4 border-black dark:border-white rounded-xl bg-slate-200">
            <Image width={150} height={150} src="/image-icon.svg" alt="Pendiente imagen" />
          </div>
        </section>
      </div>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl mx-auto p-6 mt-6 sm:mt-12 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center sm:text-4xl mb-6 text-slate-900 dark:text-white">
          ¿Cómo solicitar tu Número de Seguridad Social (NUSS)?
        </h2>
        <ul className="flex flex-col sm:flex-row items-center gap-8 my-12">
          {data.map(step => (
            <Step
              key={step.id}
              step={step.id}
              name={step.name}
              content={step.content}
            />
          ))}
        </ul>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="flex flex-col items-center max-w-5xl mx-auto p-6 sm:my-12 my-6 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center sm:text-4xl mb-6 text-slate-900 dark:text-white">
          ¿Para qué necesito el Numero de Seguridad Social (NUSS)?
        </h2>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center p-6 my-6 gap-8">
          <p className="w-full sm:w-1/2 font-light text-center sm:text-left">We&apos;re building rockets for the next century today. <span className="font-bold">From the moon to Mars,</span> Jupiter and beyond.<br/>The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explisve Space Modulator on several occassions. This makes me very, very angry! Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme&apos;s queality and sturdy designs.<br/>We&apos;re building rockets for the next century today. From the moon to Mars, Jupiter and beyond. </p>
          <div className="w-5/6 sm:w-1/2 h-60 sm:h-80 grid place-content-center border-solid border-4 border-black dark:border-white rounded-xl bg-slate-200">
            <Image width={120} height={120} src="/image-icon.svg" alt="Pendiente imagen"/>
          </div>
        </div>
        <button className="bg-yc-red px-3 py-4 text-md md:text-xl rounded-lg hover:opacity-90 text-white w-full sm:w-1/3 border border-black shadow-md hover:shadow-xl"><Link href='/seguridad-social'>Obtener NUSS</Link></button>
      </section>
    </main>
  )
}