import ContactForm from "@/app/components/ContactForm"

const data = {
  description: [
    {
      id: 1,
      content: 'La residencia por reagrupación familiar es un procedimiento mediante el cual un ciudadano extranjero residente legalmente en España puede solicitar la autorización de residencia para sus familiares directos, que se encuentran en su país de origen o residiendo legalmente en otro país, con el objetivo de reunirse y vivir juntos en territorio español.',
    },
    {
      id: 2,
      content: 'La reagrupación familiar permite que los familiares del residente legal obtengan una autorización de residencia que les permita vivir y trabajar en España de forma legal. Los familiares elegibles para la reagrupación pueden incluir cónyuges, parejas registradas, hijos menores de 18 años o mayores a cargo, y ascendientes a cargo.',
    },
    {
      id: 3,
      content: 'Algunos de los requisitos comunes para solicitar la residencia por reagrupación familiar son los siguientes:',
    },
  ],
  requirements: [
    {
      id: 1,
      content: 'El residente legal en España debe tener una autorización de residencia en vigor.'
    },
    {
      id: 2,
      content: 'El familiar que se va a reagrupar debe tener un parentesco directo y demostrable con el residente, como cónyuge, hijo, etc.'
    },
    {
      id: 3,
      content: 'El residente debe acreditar la disponibilidad de vivienda adecuada y suficiente para alojar a su familia.'
    },
    {
      id: 4,
      content: 'El residente debe demostrar contar con recursos económicos suficientes para mantener a su familia sin necesidad de ayudas sociales.'
    },
    {
      id: 5,
      content: 'Se debe aportar la documentación requerida, como pasaportes, certificados de matrimonio, partidas de nacimiento, etc.'
    },
  ],
  comments: [
    {
      id: 1,
      content: 'El proceso de solicitud de la residencia por reagrupación familiar se realiza ante la Oficina de Extranjería correspondiente al lugar de residencia en España. Es importante seguir los procedimientos establecidos y presentar toda la documentación requerida para completar el trámite.',
    },
    {
      id: 2,
      content: 'Una vez obtenida la autorización de residencia por reagrupación familiar, los familiares podrán vivir y trabajar legalmente en España durante el periodo establecido en el permiso, siempre y cuando cumplan con las condiciones establecidas por la ley de extranjería.',
    }
  ],
}

export default function ReagrupacionFamiliar () {
  return (
    <>
      <section className="max-w-5xl my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 sm:mb-6 text-yc-red">Reagrupación familiar</h2>
        {data.description.map(t => (
          <p key={t.id} className="font-normal text-xl sm:text-2xl text-justify">{t.content}</p>
        ))}
        {data.requirements.map(t => (
          <div key={t.id} className="flex items-start">
            <span className="font-light px-4 text-xl">✔️</span>
            <p className="font-light text-lg sm:text-xl underline underline-offset-8 decoration-yc-red">{t.content}</p>
          </div>
        ))}
      </section>
      <section className="max-w-5xl my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        {data.comments.map(t => (
          <p key={t.id} className="font-normal text-xl sm:text-2xl text-justify">{t.content}</p>
        ))}
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <ContactForm />
    </>
  )
}