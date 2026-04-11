import React from 'react'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navItems = ['Home', 'Projects', 'Skills', 'Contact']

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="text-2xl font-black tracking-tight text-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text">
          Portfolio
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} absolute inset-x-4 top-full rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:static sm:block sm:max-w-none sm:border-none sm:bg-transparent sm:p-0 sm:shadow-none`}>
          <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 sm:px-0 sm:py-0"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
