import Image from 'next/image'

export default function Appointment ({ name, logo }) {
  return (
    <li className="w-full flex justify-center items-center py-3 px-4 gap-4 bg-white dark:bg-slate-200 rounded-lg shadow-md border border-black hover:border-yc-red">
      <Image width={30} height={30} src={logo} alt="Pendiente imagen"/>
      <h4 className="dark:text-slate-900">{name}</h4>
    </li>
  )
}