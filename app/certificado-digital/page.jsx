import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import Step from './components/Step'

const data = {
  steps: [
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
  ],
  requirements: [
    {
      id: 1,
      title: 'Formatos',
      description: 'Siempre los documentos se deben enviar en formato PDF',
    },
    {
      id: 2,
      title: 'Documentos en vigor',
      description: '',
    },
    {
      id: 4,
      title: 'Ejemplos de documentos válidos',
      description: '',
    },
  ],
  documentsImages: [
    {
      id: 1,
      name: 'Hoja blanca de asilo',
      img: '/documento-hoja-blanca.jpg',
    },
    {
      id: 2,
      name: 'Tarjeta de Identidad de Extranjero (TIE)',
      img: '/documento-nie.jpg',
    },
    {
      id: 3,
      name: 'Asignación de NIE',
      img: '/documento-nie2.jpg',
    },
  ],
}

export default function CertificadoDigital() {
  return (
    <main>
      <section className="bg-certificado bg-center bg-cover py-6 sm:py-16 mb-6 sm:mb-12">
        <section id="hero" className="max-w-6xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 scroll-mt-40">
          <article className="max-w-xl flex flex-col items-center gap-14">
            <h2 className="text-4xl font-semibold text-center sm:text-6xl text-yc-red dark:text-white">
              Certificado digital
            </h2>
            <p className="text-xl sm:text-2xl font-light text-center text-slate-800">Potencia tu Acceso Digital: Obtén tu Certificado Digital y Simplifica tus Trámites en Línea</p>
            <figure className="w-28 h-28 mb-6 bg-yc-red rounded-full border-4 border-yellow-300 grid place-content-center">
              <Image width={60} height={60} src="/certificado-digital.svg" alt="Pendiente descripción" />
            </figure>
          </article>
        </section>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl my-6 grid mx-auto p-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">¿Cómo solicitar tu certificado con nosotros?</h2>
        <p className="text-xl mt-4 text-center font-light text-slate-700">Puedes solicitarlo de manera <span className="underline underline-offset-8 decoration-yc-red">presencial</span> o <span className="underline underline-offset-8 decoration-yc-red">telemática</span></p>
        <ul className="flex flex-col sm:flex-row items-center gap-8 my-12">
          {data.steps.map(step => (
            <Step
              key={step.id}
              step={step.id}
              name={step.name}
              content={step.content}
            />
          ))}
        </ul>
        <div className="flex justify-center">
          <Link href="/certificado-digital" className="bg-yc-red text-center px-3 py-4 text-lg md:text-xl rounded-lg hover:opacity-95 text-white w-5/6 sm:w-1/3 border border-yellow-300 shadow-lg shadow-slate-900/20 hover:scale-105 active:bg-red-600">Obtener certificado</Link>
        </div>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl mt-6 grid mx-auto p-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">Requisitos a tener en cuenta</h2>
        <ul className="py-6 px-4">
          {data.requirements.map(t => (
            <li key={t.id}>
              <h3 className="font-normal text-2xl text-yc-red">✔️ {t.title}</h3>
              <p className="font-light p-4 text-xl">{t.description}</p>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-2">
          {data.documentsImages.map(t => (
            <div key={t.id} className="flex flex-col items-center">
              <Image width={200} height={200} src={t.img} alt="Pendiente descripcion" />
              <p className="font-light p-4 text-md sm:text-xl text-center">{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}