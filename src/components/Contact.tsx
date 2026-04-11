import React from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">Contact</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600">
            Have a project in mind? Let's talk!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-950">Contact Information</h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold text-slate-500">Email</p>
                <a href="mailto:adhikariapl@gmail.com" className="mt-1 block text-base font-medium text-slate-900 hover:text-indigo-600">
                  adhikariapl@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">Phone</p>
                <a href="tel:+9779843614912" className="mt-1 block text-base font-medium text-slate-900 hover:text-indigo-600">
                  +977 9843614912
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">Location</p>
                <p className="mt-1 text-base font-medium text-slate-900">Bhaktapur, Nepal</p>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <a href="https://www.linkedin.com/in/apil-adhikari-0754633b2/" className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h3.99v12H3V9zm7.5 0h3.6v1.65h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.46 4.45 5.66V21h-4V15.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/adhikariap421" className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.59-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.facebook.com/apil.adhikari.167" className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.4V12h2.4V9.8c0-2.37 1.42-3.68 3.6-3.68 1.04 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.74-1.55 1.5V12h2.64l-.42 2.9h-2.22V21.95A10 10 0 0022 12z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 transition hover:-translate-y-0.5"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
