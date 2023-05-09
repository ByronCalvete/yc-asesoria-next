import Image from 'next/image'
import Link from 'next/link'

const Component = ({ name }) => {
  return (
    <li className="w-full flex items-center py-3 px-4 bg-white dark:bg-slate-200 rounded-lg shadow-md border border-black hover:border-yc-red">
      <Image width={50} height={50} src="/image-icon.svg" alt="Pendiente imagen"/>
      <h4 className="dark:text-slate-900">{name}</h4>
    </li>
  )
}

export default function Citas() {
  const appointments = [
    {
      id: 1,
      name: 'Toma de huellas',
    },
    {
      id: 2,
      name: 'Recogida de TIE',
    },
    {
      id: 3,
      name: 'Canje de licencia',
    },
    {
      id: 4,
      name: 'Nueva normalidad',
    }
  ]

  return (
    <main>
      <div className="bg-hero dark:bg-none dark:bg-[#363939]">
        <section id="hero" className="max-w-5xl mx-auto flex flex-col justify-center p-6 items-center gap-8 sm:gap-10 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
          <h2 className="text-4xl font-bold text-left sm:text-5xl text-slate-900 dark:text-white mb-2 sm:mb-6">
            Te ayudamos con las citas de extranjería
          </h2>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 px-2 sm:px-12">
            {appointments.map(appointment => <Component key={appointment.id} name={appointment.name}/>)}
          </ul>
          <button></button>
        </section>
      </div>
    </main>
  )
}