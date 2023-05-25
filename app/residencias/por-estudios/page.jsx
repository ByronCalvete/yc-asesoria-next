import ContactForm from "@/app/components/ContactForm"

const data = {
  description: [
    {
      id: 1,
      content: 'La residencia por estudios es un permiso de residencia en España que se concede a los extranjeros que desean venir al país para estudiar en una institución educativa. Este tipo de permiso permite a los estudiantes vivir en España durante el período de tiempo que dure su programa de estudios.',
    },
    {
      id: 2,
      content: 'Para obtener la residencia por estudios, los solicitantes deben cumplir con una serie de requisitos y seguir un proceso específico. Algunos de los requisitos comunes son los siguientes:',
    },
  ],
  requirements: [
    {
      id: 1,
      content: 'Matrícula: Estar matriculado en una institución educativa española reconocida oficialmente y tener los documentos que acrediten dicha matrícula.'
    },
    {
      id: 2,
      content: 'Recursos económicos: Demostrar que se cuenta con recursos económicos suficientes para cubrir los gastos de manutención y alojamiento durante la estancia en España.'
    },
    {
      id: 3,
      content: 'Seguro médico: Contar con un seguro médico que cubra todas las eventualidades médicas durante la estancia en España.'
    },
    {
      id: 4,
      content: 'Antecedentes penales: Presentar certificados de antecedentes penales emitidos por el país de origen o los países en los que haya residido en los últimos cinco años.'
    },
  ],
  comments: [
    {
      id: 1,
      content: 'El proceso de solicitud de la residencia por estudios se realiza ante la Oficina de Extranjería correspondiente y requiere la presentación de una serie de documentos, como los comprobantes de matrícula, recursos económicos, seguro médico, certificados de antecedentes penales, pasaporte válido, entre otros.',
    },
    {
      id: 2,
      content: 'Una vez obtenida la autorización de residencia por estudios, el titular tiene derecho a vivir en España durante el período de tiempo que dure su programa de estudios, siempre y cuando cumpla con las obligaciones legales y fiscales correspondientes. Al finalizar sus estudios, el estudiante puede optar por renovar su permiso de residencia o solicitar otro tipo de permiso si desea quedarse a vivir en España.',
    }
  ],
}

export default function ResidenciaPorEstudios () {
  return (
    <>
      <section className="max-w-5xl my-2 sm:my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 sm:mb-6 text-yc-red">Residencia por estudios</h2>
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