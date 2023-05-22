import Image from 'next/image'
import Link from 'next/link'

export default function Service({ srcImage, altImage, name, width, height, link }) {
  return (
    <Link href={link}>
      <figure className="mx-auto w-5/6 sm:w-full flex flex-col items-center border border-slate-900 hover:border-yc-red dark:border-gray-100 bg-white dark:bg-slate-200 py-6 px-2 rounded-3xl shadow-lg sm:shadow-transparent shadow-red-500/80 sm:hover:shadow-red-500/70 cursor-pointer">
        <div className="w-28 h-28 mb-6 bg-yc-red rounded-full border-4 border-yellow-300 grid place-content-center">
          <Image width={width} height={height} src={srcImage} alt={altImage} />
        </div>
        <figcaption className="text-2xl text-center text-slate-900 hover:text-yc-red">
          {name}
        </figcaption>
      </figure>
    </Link>
  )
}