import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950/95 p-8 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr_0.9fr]">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-indigo-400">Footer</p>
              <h4 className="text-3xl font-semibold text-white">Ready to create your next standout project?</h4>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                I build modern, polished web experiences with a focus on clean UI, strong performance, and memorable design.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-400">
                Let’s talk
              </a>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-white">Quick links</h5>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#home" className="inline-flex items-center gap-3 transition hover:text-white">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">01</span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="inline-flex items-center gap-3 transition hover:text-white">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">02</span>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="inline-flex items-center gap-3 transition hover:text-white">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">03</span>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="inline-flex items-center gap-3 transition hover:text-white">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">04</span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-white">Follow me</h5>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a href="https://github.com/adhikariap421" className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900 px-4 py-2 text-white transition hover:border-indigo-500 hover:bg-indigo-500/10">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.59-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/apil-adhikari-0754633b2/" className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900 px-4 py-2 text-white transition hover:border-indigo-500 hover:bg-indigo-500/10">
                  <svg className="h-4 w-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h3.99v12H3V9zm7.5 0h3.6v1.65h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.46 4.45 5.66V21h-4V15.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9z" />
                  </svg>
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/apil.adhikari.167" className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900 px-4 py-2 text-white transition hover:border-indigo-500 hover:bg-indigo-500/10">
                  <svg className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.4V12h2.4V9.8c0-2.37 1.42-3.68 3.6-3.68 1.04 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.74-1.55 1.5V12h2.64l-.42 2.9h-2.22V21.95A10 10 0 0022 12z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <span className="text-slate-700">·</span>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <span className="text-slate-700">·</span>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
