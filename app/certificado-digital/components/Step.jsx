export default function Step({ step, name, content }) {
  return (
    <li className="w-5/6 sm:w-1/3 text-center border border-black p-6 rounded-md shadow-md">
      <div className="border-2 border-yc-red rounded-full w-7 mx-auto">{step}</div>
      <h3 className="mt-6 text-lg font-semibold text-center text-slate-900 dark:text-white">{name}</h3>
      <p className="mt-2 font-light">{content}</p>
    </li>
  ) 
}