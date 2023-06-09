export default function Testimony({ content, author }) {
  return (
    <figure className="my-12">
      <blockquote className="bg-white dark:bg-[#222424] pl-14 pr-8 py-12 rounded-3xl relative border border-black shadow-xl">
        <p
          className="text-2xl sm:text-3xl text-left mt-2 text-black dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-yc-red before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-yc-red after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
        >
          {content}
        </p>
      </blockquote>
      <figcaption
        className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
      >
        &#8212; {author}
      </figcaption>
    </figure>
  )
}