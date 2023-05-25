import ContactForm from "@/app/components/ContactForm"

const data = {
  description: [
    {
      id: 1,
      content: 'La residencia por cuenta ajena desde el país de origen es un tipo de permiso de residencia en España que se solicita y obtiene desde el país de origen del extranjero, antes de su llegada a España. Este permiso se otorga a aquellos extranjeros que han conseguido un contrato de trabajo con una empresa o empleador español y desean residir en España para trabajar por cuenta ajena.',
    },
    {
      id: 2,
      content: 'El proceso de solicitud de la residencia por cuenta ajena desde el país de origen implica seguir ciertos pasos y presentar la documentación necesaria. Algunos de los requisitos comunes para solicitar este tipo de residencia son los siguientes:',
    },
  ],
  requirements: [
    {
      id: 1,
      content: 'Contrato de trabajo: Contar con un contrato de trabajo firmado con una empresa o empleador español, el cual debe cumplir con las leyes laborales y ser válido.'
    },
    {
      id: 2,
      content: 'Permiso de trabajo: La empresa o empleador debe obtener el correspondiente permiso de trabajo en España para el extranjero que desea contratar.'
    },
    {
      id: 3,
      content: 'Visado de residencia: El extranjero debe solicitar el visado de residencia por cuenta ajena en el consulado o embajada española en su país de origen, presentando la documentación requerida.'
    },
    {
      id: 4,
      content: 'Seguro médico: Contar con un seguro médico que cubra todas las eventualidades médicas durante la estancia en España.'
    },
    {
      id: 5,
      content: 'Recursos económicos: Demostrar que se cuenta con recursos económicos suficientes para cubrir los gastos de manutención y alojamiento en España.'
    },
  ],
  comments: [
    {
      id: 1,
      content: 'Una vez que el visado de residencia por cuenta ajena es aprobado, el extranjero puede viajar a España y obtener la tarjeta de residencia en la Oficina de Extranjería correspondiente dentro de los 30 días posteriores a su llegada.',
    },
    {
      id: 2,
      content: 'Es importante tener en cuenta que los requisitos y el proceso pueden variar dependiendo de la nacionalidad del solicitante y de la normativa vigente en el momento de la solicitud. Por lo tanto, es recomendable consultar con el consulado o la embajada española en el país de origen para obtener información actualizada y precisa.',
    }
  ],
}

export default function ResidenciaCuentaAjena () {
  return (
    <>
      <section className="max-w-5xl my-2 sm:my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 sm:mb-6 text-yc-red">Residencia por cuenta ajena desde el país de origen</h2>
        {data.description.map(t => (
          <p key={t.id} className="font-normal text-xl sm:text-2xl text-justify">{t.content}</p>
        ))}
      </section>
      <section className="max-w-5xl my-2 sm:my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        {data.requirements.map(t => (
          <div key={t.id} className="flex items-start">
            <span className="font-light px-4 text-xl">✔️</span>
            <p className="font-light text-lg sm:text-xl underline underline-offset-8 decoration-yc-red">{t.content}</p>
          </div>
        ))}
      </section>
      <section className="max-w-5xl my-2 sm:my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        {data.comments.map(t => (
          <p key={t.id} className="font-normal text-xl sm:text-2xl text-justify">{t.content}</p>
        ))}
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <ContactForm />
    </>
  )
}