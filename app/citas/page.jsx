import Link from 'next/link'
import Appointment from './components/Appointment'
import ContactForm from '../components/ContactForm'

export default function Citas() {
  const appointments = [
    {
      id: 1,
      name: 'Toma de huellas',
      img: '/huellas.svg'
    },
    {
      id: 2,
      name: 'Recogida de TIE',
      img: '/tie.svg'
    },
    {
      id: 3,
      name: 'Canje de licencia',
      img: '/licencia-dgt.svg'
    },
    {
      id: 4,
      name: 'Nueva normalidad',
      img: '/nueva-normalidad.svg'
    },
    {
      id: 5,
      name: 'Protección internacional',
      img: '/proteccion-internacional.svg'
    },
    {
      id: 6,
      name: 'Carta de invitación',
      img: '/carta-invitacion.svg'
    }
  ]

  return (
    <main>
      <div className="bg-hero dark:bg-none dark:bg-[#363939]">
        <section id="hero" className="max-w-5xl mx-auto flex flex-col justify-center px-6 py-14 items-center gap-8 sm:gap-10 scroll-mt-40">
          <h2 className="text-4xl font-bold text-left sm:text-5xl text-slate-900 dark:text-white mb-2 sm:mb-6">
            Te ayudamos con las citas de extranjería
          </h2>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 px-2 sm:px-12">
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                name={appointment.name}
                logo={appointment.img}
              />
            ))}
          </ul>
          <button></button>
        </section>      
      </div>
      <ContactForm /> 
    </main>
  )
}