import Image from 'next/image'
import ContactForm from '../components/ContactForm'

const data = [
  {
    id: 1,
    title: 'Tarjeta de residencia',
    imgUrl: '',
  },
  {
    id: 2,
    title: 'Nueva normalidad',
    imgUrl: '',
  },
  {
    id: 3,
    title: 'Tarjetas comunitarias',
    imgUrl: '',
  },
  {
    id: 4,
    title: 'Tarjetas de larga duración',
    imgUrl: '',
  },
]

export default function Renovaciones() {
  return (
    <main>
      <section className="bg-renovaciones bg-center bg-cover py-6 sm:py-16 mb-6 sm:mb-12">
        <section id="hero" className="max-w-6xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 scroll-mt-40">
          <article className="max-w-xl flex flex-col items-center gap-14">
            <h2 className="text-4xl font-semibold text-center sm:text-6xl text-yc-red dark:text-white">
              Renovaciones
            </h2>
            <p className="text-xl sm:text-2xl font-light text-center text-slate-800">Mantén tu Estadía Legal con Confianza y Tranquilidad</p>
            <figure className="w-28 h-28 mb-6 bg-yc-red rounded-full border-4 border-yellow-300 grid place-content-center">
              <Image width={60} height={60} src="/renovaciones.svg" alt="Pendiente descripción" />
            </figure>
          </article>
        </section>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl my-6 grid sm:grid-cols-2 mx-auto p-6 gap-6 sm:gap-y-12">
        {data.map(t => (
          <article key={t.id} className="w-full sm:w-5/6 mx-auto border border-slate-200 rounded-lg py-6 px-8 text-center shadow-lg shadow-red-500/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-yc-red">{t.title}</h3>
          </article>
        ))}
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <ContactForm />
    </main>
  )
}