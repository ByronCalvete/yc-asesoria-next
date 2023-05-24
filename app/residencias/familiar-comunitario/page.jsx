import ContactForm from "@/app/components/ContactForm"

const data = {
  description: 'Algunos de los requisitos comunes para solicitar la residencia por familiar comunitario son los siguientes:',
  requirements: [
    {
      id: 1,
      content: 'Ser familiar directo de un ciudadano de la UE o EEE que resida o desee residir en España.'
    },
    {
      id: 2,
      content: 'Acreditar la relación familiar mediante documentos como el certificado de matrimonio, libro de familia, partida de nacimiento, etc.'
    },
    {
      id: 3,
      content: 'Demostrar que el ciudadano de la UE o EEE cuenta con un seguro médico o estar cubierto por el sistema nacional de salud.'
    },
    {
      id: 4,
      content: 'Contar con recursos económicos suficientes para vivir sin necesidad de ayudas sociales.'
    },
    {
      id: 5,
      content: 'Cumplir con los requisitos de seguridad y salud pública.'
    },
  ]
}

export default function FamiliarComunitario () {
  return (
    <>
      <section className="max-w-5xl my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-2 sm:mb-6 text-yc-red">Residencia por familiar comunitario</h2>
        <p className="font-normal text-2xl text-center sm:text-left mb-2 sm:mb-6">{data.description}</p>
        {data.requirements.map(t => (
          <div key={t.id} className="flex items-start">
            <span className="font-light px-4 text-xl">✔️</span>
            <p className="font-light text-lg sm:text-xl">{t.content}</p>
          </div>
        ))}
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <ContactForm />
    </>
  )
}