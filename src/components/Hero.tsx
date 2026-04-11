import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative mx-auto mb-12 max-w-6xl px-4 py-8 sm:px-6 sm:py-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/4 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl animate-blob" />
        <div className="absolute right-[-12%] top-1/3 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl animate-blob animate-blob-delay-2000" />
        <div className="absolute left-[20%] bottom-[-10%] h-56 w-56 rounded-full bg-fuchsia-400/15 blur-3xl animate-blob animate-blob-slow animate-blob-delay-4000" />
      </div>
      <div className="relative grid gap-10 overflow-hidden rounded-[2rem] bg-white p-8 shadow-glow lg:grid-cols-[1.3fr_1fr] lg:p-12">
        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">Hi, I&apos;m Apil</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              APIL ADHIKARI
            </h1>
            <p className="text-lg font-semibold text-slate-700">Lecturer | Developer | Problem Solver</p>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I teach and build modern web applications, combining full-stack development with practical problem solving for students and clients.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 transition hover:-translate-y-0.5">
              View My Work
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-indigo-500 hover:text-indigo-600">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/profile.jpg" alt="Profile photo" className="h-72 w-72 rounded-full border-8 border-white object-cover shadow-2xl shadow-slate-200/60 transition-transform duration-500 ease-out hover:scale-105" />
        </div>
      </div>
    </section>
  )
}

export default Hero
