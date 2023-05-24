import Image from 'next/image'
import Link from 'next/link'

const data = {
  tipos: [
    {
      id: 1,
      title: 'Familiar comunitario',
      description: 'La residencia por familiar comunitario, también conocida como tarjeta de residencia de familiar de ciudadano de la Unión Europea, es un permiso de residencia que permite a los familiares de ciudadanos de la Unión Europea (UE) o del Espacio Económico Europeo (EEE) vivir y trabajar legalmente en España.',
      link: 'familiar-comunitario',
    },
    {
      id: 2,
      title: 'Reagrupación familiar',
      description: 'La residencia por reagrupación familiar es un procedimiento mediante el cual un ciudadano extranjero residente legalmente en España puede solicitar la autorización de residencia para sus familiares directos, que se encuentran en su país de origen o residiendo legalmente en otro país, con el objetivo de reunirse y vivir juntos en territorio español.',
      link: 'reagrupacion-familiar',
    },
    {
      id: 3,
      title: 'Residencias como autónomos o cuenta propia',
      description: 'La residencia como autónomo o cuenta propia se refiere a un permiso de residencia en España que permite a los extranjeros establecerse en el país y trabajar como trabajadores autónomos o emprendedores, es decir, iniciar y desarrollar su propio negocio o actividad económica de forma independiente.',
      link: 'cuenta-propia',
    },
    {
      id: 4,
      title: 'Residencia por estudios',
      description: 'La residencia por estudios es un permiso de residencia en España que se concede a los extranjeros que desean venir al país para estudiar en una institución educativa. Este tipo de permiso permite a los estudiantes vivir en España durante el período de tiempo que dure su programa de estudios.',
      link: 'por-estudios',
    },
    {
      id: 5,
      title: 'Residencia no lucrativa',
      description: 'La residencia no lucrativa es un tipo de permiso de residencia en España que se concede a aquellos extranjeros que desean residir en el país sin realizar actividades laborales remuneradas. Es decir, no se permite trabajar por cuenta ajena ni como trabajador autónomo.',
      link: 'no-lucrativa',
    },
    {
      id: 6,
      title: 'Residencia por cuenta ajena desde el país de origen',
      description: 'La residencia por cuenta ajena desde el país de origen es un tipo de permiso de residencia en España que se solicita y obtiene desde el país de origen del extranjero, antes de su llegada a España.',
      link: 'cuenta-ajena',
    }
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
        <div className="mt-6 grid sm:grid-cols-2 gap-10 text-center">
          {data.tipos.map(t => (
            <article key={t.id} className="border border-slate-200 rounded-lg py-6 px-8 text-center shadow-lg shadow-red-500/60">
              <h3 className="text-2xl font-semibold text-yc-red">{t.title}</h3>
              <p className="text-lg font-light py-6">{t.description}</p>
              <Link href={`/residencias/${t.link}`}><button className="border border-yellow-300 bg-yc-red text-white py-2 px-4 rounded-lg shadow-lg shadow-slate-900/20 hover:scale-105 active:bg-red-600">Mas información</button></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}