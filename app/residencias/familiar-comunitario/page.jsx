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
      <h2>Familiar comunitario</h2>
    </>
  )
}