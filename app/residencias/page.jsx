import Image from 'next/image'
import Link from 'next/link'

const data = {
  tipos: [
    {
      id: 1,
      link: 'familiar-comunitario',
      title: 'Familiar comunitario',
      description: 'La residencia por familiar comunitario, también conocida como tarjeta de residencia de familiar de ciudadano de la Unión Europea, es un permiso de residencia que permite a los familiares de ciudadanos de la Unión Europea (UE) o del Espacio Económico Europeo (EEE) vivir y trabajar legalmente en España. Este tipo de residencia se aplica a los familiares directos de ciudadanos comunitarios, como cónyuges, parejas registradas, hijos menores de 21 años o mayores a cargo, padres o abuelos a cargo, entre otros, siempre que cumplan con ciertos requisitos establecidos por la legislación española y europea.',
    },
  ]
}

export default function Residencias() {
  return (
    <main>
      <section className="bg-residencia bg-center bg-contain py-6 sm:py-16 mb-6 sm:mb-12">
        <section id="hero" className="max-w-6xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 sm:gap-10 scroll-mt-40">
          <article className="max-w-xl flex flex-col items-center gap-14">
            <h2 className="text-4xl font-semibold text-center sm:text-6xl text-yc-red dark:text-white">
              Residencias Legales en España
            </h2>
            <p className="text-xl sm:text-2xl font-light text-center text-slate-800">Abriendo las Puertas hacia un Futuro Seguro y Prometedor</p>
            <figure className="w-28 h-28 mb-6 bg-yc-red rounded-full border-4 border-yellow-300 grid place-content-center">
              <Image width={60} height={60} src="/residencias.svg" alt="Pendiente descripción" />
            </figure>
          </article>
        </section>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl my-6 grid mx-auto p-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">Tipos de Residencias</h2>
        {/* <p className="text-xl mt-4 text-center font-light text-slate-700">
          En España, existen diferentes tipos de arraigos, que son mecanismos legales que permiten a una persona obtener una autorización de residencia en el país, incluso en situaciones en las que no cumple todos los requisitos tradicionales para obtenerla.
        </p> */}
        <div className="mt-14 grid sm:grid-cols-2 gap-10 text-center">
          {data.tipos.map(t => (
            <article key={t.id} className="border border-slate-200 rounded-lg py-6 px-8 text-center shadow-lg shadow-red-500/60">
              <h3 className="text-2xl font-semibold text-yc-red">{t.title}</h3>
              <p className="text-lg font-light pt-6">{t.description}</p>
              <Link href={`/residencias/${t.link}`}>Ver más</Link>
            </article>
          ))}
        </div>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section className="max-w-5xl mt-6 grid mx-auto p-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">Requisitos a tener en cuenta</h2>
        <ul className="py-6">
          {/* {data.requisitos.map(t => (
            <li key={t.id}>
              <h3 className="font-normal text-2xl text-yc-red">✔ {t.title}</h3>
              <p className="font-light p-4 text-xl">{t.description}</p>
            </li>
          ))} */}
        </ul>
      </section>
    </main>
  )
}