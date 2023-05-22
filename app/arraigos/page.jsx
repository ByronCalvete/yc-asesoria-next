import Image from 'next/image'
import Link from 'next/link'

const data = {
  arraigos: [
    {
      id: 1,
      title: 'Arraigo Social',
      content: 'Este arraigo está destinado a aquellos extranjeros que hayan residido de forma continuada en España durante un período mínimo de tres años y puedan demostrar su integración social. Deben aportar pruebas de su arraigo social, como vínculos familiares, participación en actividades comunitarias, voluntariado, etc.',
    },
    {
      id: 2,
      title: 'Arraigo Laboral',
      content: 'Este tipo de arraigo se aplica a aquellos extranjeros que pueden demostrar una relación laboral estable en España durante un período mínimo de seis meses. Deben acreditar la existencia de un contrato de trabajo o una oferta de empleo válida, así como demostrar la permanencia continuada en el país.',
    },
    {
      id: 3,
      title: 'Arraigo Familiar',
      content: 'Este tipo de arraigo se aplica a aquellos extranjeros que tienen vínculos familiares directos con ciudadanos españoles o residentes legales en España. Puede solicitarse cuando existe un matrimonio o una unión de hecho con un español o residente, o cuando existen hijos menores de edad en común.',
    },
    {
      id: 4,
      title: 'Arraigo de formación',
      content: 'El arraigo para la formación es un tipo de permiso de residencia en España que permite a los extranjeros que han completado estudios o programas de formación en el país obtener una autorización de residencia para llevar a cabo actividades de investigación, prácticas profesionales no laborales, voluntariado o formación no remunerada en empresas o instituciones.',
    },
    {
      id: 5,
      title: 'Arraigo excepcional',
      content: 'Este tipo de arraigo se concede en casos excepcionales cuando existen circunstancias humanitarias o de interés público que justifiquen la concesión de una autorización de residencia. Por ejemplo, puede aplicarse en situaciones de violencia de género, protección de menores, enfermedades graves, etc.',
    },
  ],
  requisitos: [
    {
      id: 1,
      title: 'Residencia continuada',
      description: 'El extranjero debe haber residido de forma continuada en España durante un período mínimo de tres años inmediatamente antes de la solicitud.'
    },
    {
      id: 2,
      title: 'Medios económicos',
      description: 'Es necesario demostrar que se cuentan con medios económicos suficientes para su sostenimiento y, en su caso, de los miembros de la unidad familiar.',
    },
    {
      id: 3,
      title: 'Carencia de antecedentes penales',
      description: 'El solicitante debe acreditar la ausencia de antecedentes penales tanto en España como en los países en los que haya residido anteriormente durante los últimos cinco años.',
    },
    {
      id: 4,
      title: 'Seguridad social',
      description: 'Es necesario estar dado de alta en la Seguridad Social o contar con un seguro médico privado válido en España.',
    },
  ]
}

export default function Arraigos() {
  return (
    <main>
      <section className="bg-arraigo bg-center bg-cover py-6 sm:py-16 mb-6 sm:mb-12">
        <section id="hero" className="max-w-6xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 scroll-mt-40">
          <article className="max-w-xl flex flex-col items-center gap-14">
            <h2 className="text-4xl font-semibold text-center sm:text-6xl text-yc-red dark:text-white">
              Arraigos Legales en España
            </h2>
            <p className="text-xl sm:text-2xl font-light text-center text-slate-800">Acompañándote en tu Proceso de Establecimiento y Regularización</p>
            <figure className="w-28 h-28 mb-6 bg-yc-red rounded-full border-4 border-yellow-300 grid place-content-center">
              <Image width={60} height={60} src="/arraigos.svg" alt="Pendiente descripción" />
            </figure>
          </article>
        </section>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl my-6 grid mx-auto p-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">Tipos de Arraigo</h2>
        <p className="text-xl mt-4 text-center text-slate-700">
          En España, existen diferentes tipos de arraigos, que son mecanismos legales que permiten a una persona obtener una autorización de residencia en el país, incluso en situaciones en las que no cumple todos los requisitos tradicionales para obtenerla.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 gap-10 text-center">
          {data.arraigos.map(t => (
            <article key={t.id} className="border border-slate-200 rounded-lg py-6 px-8 text-center shadow-lg shadow-red-500/60">
              <h3 className="text-2xl font-semibold text-yc-red">{t.title}</h3>
              <p className="text-lg font-light pt-6">{t.content}</p>
            </article>
          ))}
        </div>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl mt-6 grid mx-auto p-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">Requisitos a tener en cuenta</h2>
        <ul className="py-6">
          {data.requisitos.map(t => (
            <li key={t.id}>
              <h3 className="font-normal text-2xl text-yc-red">✔ {t.title}</h3>
              <p className="font-light p-4 text-xl">{t.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}