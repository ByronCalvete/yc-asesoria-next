import ContactForm from "@/app/components/ContactForm"

const data = {
  description: [
    {
      id: 1,
      content: 'La residencia no lucrativa es un tipo de permiso de residencia en España que se concede a aquellos extranjeros que desean residir en el país sin realizar actividades laborales remuneradas. Es decir, no se permite trabajar por cuenta ajena ni como trabajador autónomo.',
    },
    {
      id: 2,
      content: 'Este tipo de residencia está dirigida a personas que cuentan con recursos económicos suficientes para vivir en España sin necesidad de trabajar. Por lo general, se solicita a aquellos que desean retirarse, disfrutar de su jubilación, vivir de sus ahorros o inversiones, o recibir ingresos de fuentes fuera de España.',
    },
    {
      id: 3,
      content: 'Algunos de los requisitos comunes para solicitar la residencia no lucrativa son los siguientes:',
    },
  ],
  requirements: [
    {
      id: 1,
      content: 'Recursos económicos: Demostrar que se dispone de suficientes recursos económicos para cubrir las necesidades propias y de los familiares que se vayan a reagrupar durante la estancia en España. Se suele requerir una cantidad mínima, que puede variar según el número de miembros de la familia.'
    },
    {
      id: 2,
      content: 'Seguro médico: Contar con un seguro médico privado que cubra todas las eventualidades médicas durante la estancia en España.'
    },
    {
      id: 3,
      content: 'Vivienda adecuada: Acreditar la disponibilidad de una vivienda adecuada y suficiente para alojarse en España.'
    },
    {
      id: 4,
      content: 'Antecedentes penales: Presentar certificados de antecedentes penales emitidos por el país de origen o los países en los que haya residido en los últimos cinco años.'
    },
  ],
  comments: [
    {
      id: 1,
      content: 'El proceso de solicitud de residencia no lucrativa se realiza ante la Oficina de Extranjería correspondiente y requiere la presentación de una serie de documentos, como los comprobantes de recursos económicos, seguro médico, certificados de antecedentes penales, pasaporte válido, entre otros.',
    },
    {
      id: 2,
      content: 'Una vez obtenida la autorización de residencia no lucrativa, el titular puede vivir en España durante el período establecido en el permiso sin realizar actividades laborales remuneradas.',
    }
  ],
}

export default function ResidenciaNoLucrativa () {
  return (
    <>
      <section className="max-w-5xl my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 sm:mb-6 text-yc-red">Residencia no lucrativa</h2>
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