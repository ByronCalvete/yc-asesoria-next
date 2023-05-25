import ContactForm from "@/app/components/ContactForm"

const data = {
  description: [
    {
      id: 1,
      content: 'La residencia como autónomo o cuenta propia se refiere a un permiso de residencia en España que permite a los extranjeros establecerse en el país y trabajar como trabajadores autónomos o emprendedores, es decir, iniciar y desarrollar su propio negocio o actividad económica de forma independiente.',
    },
    {
      id: 2,
      content: 'Para obtener la residencia como autónomo, los solicitantes deben cumplir con una serie de requisitos y seguir un proceso específico. Algunos de los requisitos comunes son los siguientes:',
    },
  ],
  requirements: [
    {
      id: 1,
      content: 'Plan de negocio: Presentar un plan de negocio viable y realista que demuestre la viabilidad de la actividad económica que se pretende emprender.'
    },
    {
      id: 2,
      content: 'Recursos económicos: Demostrar la disponibilidad de recursos económicos suficientes para establecerse y mantenerse en España, así como para desarrollar la actividad empresarial.'
    },
    {
      id: 3,
      content: 'Inversión económica: Realizar una inversión económica significativa en España. El monto mínimo requerido varía dependiendo de la naturaleza de la actividad y puede estar sujeto a cambios según las regulaciones vigentes.'
    },
    {
      id: 4,
      content: 'Creación de empleo: En algunos casos, se puede requerir que el solicitante demuestre que su actividad empresarial generará puestos de trabajo o beneficios económicos para el país.'
    },
    {
      id: 5,
      content: 'Seguridad social: Estar dado de alta en la Seguridad Social española y contar con un seguro médico.'
    },
  ],
  comments: [
    {
      id: 1,
      content: 'El proceso de solicitud de residencia como autónomo se realiza ante la Oficina de Extranjería correspondiente y requiere la presentación de una serie de documentos, como el plan de negocio, comprobante de inversión económica, certificados de antecedentes penales, pasaporte válido, entre otros.',
    },
    {
      id: 2,
      content: 'Una vez obtenida la autorización de residencia como autónomo, el titular tiene derecho a vivir y trabajar en España como trabajador independiente durante el período establecido en el permiso, siempre y cuando cumpla con las obligaciones legales y fiscales correspondientes a su actividad empresarial.',
    }
  ],
}

export default function ResidenciaPorCuentaPropia () {
  return (
    <>
      <section className="max-w-5xl my-6 grid mx-auto p-6 gap-4 sm:gap-6">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 sm:mb-6 text-yc-red">Residencia como autónomo o cuenta propia</h2>
        {data.description.map(t => (
          <p key={t.id} className="font-light text-xl sm:text-2xl text-justify">{t.content}</p>
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
          <p key={t.id} className="font-light text-xl sm:text-2xl text-justify">{t.content}</p>
        ))}
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <ContactForm />
    </>
  )
}