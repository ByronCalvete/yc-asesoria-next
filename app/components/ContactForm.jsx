export default function ContactForm ({ title = 'Contáctanos'}) {
  return (
    <section
      id="contact"
      class="p-6 my-8 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2
        class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
      >
        {title}
      </h2>
      <form
        action=""
        class="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
      >
        <input
          type="text"
          id="subject"
          name="subject"
          required
          minlength="3"
          maxlength="60"
          placeholder="Nombre"
          class="w-full focus:outline-yc-red text-black text-sm sm:text-lg p-3 rounded-sm border border-solid border-slate-400 dark:border-none"
        />
        <input
          type='email'
          id="subject"
          name="subject"
          required
          minlength="3"
          maxlength="60"
          placeholder="E-mail"
          class="w-full focus:outline-yc-red text-black text-sm sm:text-lg p-3 rounded-sm border border-solid border-slate-400 dark:border-none"
        />
        <input
          type='tel'
          id="subject"
          name="subject"
          required
          minlength="3"
          maxlength="60"
          placeholder="Teléfono"
          class="w-full focus:outline-yc-red text-black text-sm sm:text-lg p-3 rounded-sm border border-solid border-slate-400 dark:border-none"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
          required
          class="w-full focus:outline-yc-red text-slate-600 text-sm sm:text-lg p-3 rounded-sm border border-solid border-slate-400 dark:border-none"
        ></textarea>
        <button
          class="bg-yc-red hover:opacity-90 active:bg-[#C53337] border border-black text-md md:text-xl shadow-md hover:shadow-xl text-white p-3 rounded-lg sm:w-1/3"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}