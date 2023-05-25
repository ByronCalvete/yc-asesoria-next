import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

const data = [
  {
    id: 1,
    title: 'Protección internacional (asilo)',
    description: [
      {
        id: 1,
        content: 'La protección internacional en España se refiere al conjunto de medidas y derechos que se otorgan a las personas que buscan refugio o asilo en el país debido a persecución, conflicto armado u otras situaciones de violencia en sus países de origen. La protección internacional tiene como objetivo principal garantizar la seguridad y los derechos fundamentales de las personas que se encuentran en una situación de vulnerabilidad.',
      },
      {
        id: 2,
        content: 'En España, la protección internacional se rige principalmente por la Ley 12/2009, que establece el derecho de asilo y la protección subsidiaria. Esta ley establece los procedimientos y requisitos para solicitar asilo y para obtener la condición de refugiado o protección subsidiaria.',
      },
      {
        id: 3,
        content: 'El asilo se concede a aquellas personas que demuestran fundados temores de persecución por motivos de raza, religión, nacionalidad, opinión política o pertenencia a un determinado grupo social. Por otro lado, la protección subsidiaria se otorga a aquellos individuos que no cumplen los requisitos para ser reconocidos como refugiados, pero que tienen un riesgo real de sufrir daños graves si regresan a su país de origen debido a conflictos armados, violencia generalizada u otras circunstancias similares.',
      },
      {
        id: 4,
        content: 'La protección internacional en España implica una serie de derechos y beneficios para las personas que la obtienen, como el derecho a residir y trabajar en el país, acceso a servicios de salud y educación, y la posibilidad de reagrupar a sus familiares directos. Sin embargo, también implica ciertas responsabilidades y obligaciones, como cumplir con las leyes y normativas españolas.',
      },
    ],
  },
  {
    id: 2,
    title: 'Visado o estancia de estudios',
    description: [
      {
        id: 1,
        content: 'El visado o estancia de estudios en España es un permiso legal que permite a personas extranjeras ingresar y residir en el país con el propósito de realizar estudios académicos. Este tipo de visado está destinado a aquellos que desean matricularse en un centro de estudios reconocido en España, como una universidad, una escuela de idiomas o cualquier otra institución educativa.',
      },
      {
        id: 2,
        content: 'El visado de estudios en España es emitido por la Embajada o Consulado español en el país de origen del estudiante. Para obtenerlo, generalmente se deben cumplir una serie de requisitos y presentar una serie de documentos, como una carta de aceptación de la institución educativa, pruebas de solvencia económica, seguro médico, entre otros.',
      },
      {
        id: 3,
        content: 'Una vez en España, el estudiante debe solicitar una tarjeta de identificación de estudiante extranjero (TIE) en la Oficina de Extranjería correspondiente. La TIE es un documento que acredita la condición de estudiante y permite residir legalmente en el país durante el periodo de estudio.',
      },
      {
        id: 4,
        content: 'Es importante mencionar que el visado o estancia de estudios tiene una duración específica, que suele estar determinada por la duración del programa de estudios. Una vez finalizado el programa, el estudiante puede tener la opción de solicitar una extensión, un cambio de estatus migratorio o regresar a su país de origen.',
      },
      {
        id: 5,
        content: 'Cabe destacar que las regulaciones y requisitos para obtener el visado o estancia de estudios pueden estar sujetos a cambios y es recomendable consultar la página web del Ministerio de Asuntos Exteriores, Unión Europea y Cooperación de España o ponerse en contacto con la Embajada o Consulado español en el país de origen para obtener información actualizada y precisa.',
      },
    ],
  }
]

export default function EstanciasLegales () {
  return (
    <main>
      <section className="bg-estancias bg-center bg-cover py-6 sm:py-16 mb-6 sm:mb-12">
        <section id="hero" className="max-w-6xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 scroll-mt-40">
          <article className="max-w-xl flex flex-col items-center gap-14">
            <h2 className="text-4xl font-semibold text-center sm:text-6xl text-yc-red dark:text-white">
              Estancias Legales en España
            </h2>
            <p className="text-xl sm:text-2xl font-light text-center text-slate-800">Descubre las Opciones para Disfrutar de una Experiencia Legal y Enriquecedora</p>
            <figure className="w-28 h-28 mb-6 bg-yc-red rounded-full border-4 border-yellow-300 grid place-content-center">
              <Image width={60} height={60} src="/estancias-legales.svg" alt="Pendiente descripción" />
            </figure>
          </article>
        </section>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl my-6 grid mx-auto p-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">Tipos de Estancias Legales</h2>
        <div className="mt-6 grid gap-10 text-left">
          {data.map(t => (
            <article key={t.id} className="max-w-5xl">
              <h3 className="text-3xl font-semibold text-yc-red pb-6">{t.title}</h3>
              {t.description.map(t => (
                <p key={t.id} className="font-light text-xl sm:text-2xl text-justify p-2">{t.content}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <ContactForm />
    </main>
  )
}