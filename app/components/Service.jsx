import Image from 'next/image'

export default function Service({ srcImage, altImage, name, width, height }) {
  return (
    <figure className="w-2/3 sm:w-full flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-xl">
      <Image width={width} height={height} src={srcImage} alt={altImage} className="w-1/3 mb-6" />
      <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
        {name}
      </figcaption>
    </figure>
  )
}