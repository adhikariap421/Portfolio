import React from 'react'

interface EducationItem {
  id: number
  qualification: string
  institution: string
  location: string
  period: string
  notes: string
  icon: string
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      qualification: 'SLC',
      institution: 'Shree Brankateshwar Higher Secondary School',
      location: 'Bahuntilpung, Kathmandu',
      period: '2012',
      notes: 'Completed School Leaving Certificate with a strong academic foundation.',
      icon: 'school'
    },
    {
      id: 2,
      qualification: '+2',
      institution: 'Viswa Niketan Higher Secondary School',
      location: 'Tripureshwar, Kathmandu',
      period: '2013 - 2015',
      notes: 'Focused on science and computing fundamentals for higher education.',
      icon: 'building'
    },
    {
      id: 3,
      qualification: 'Bachelor of Science in CSIT',
      institution: 'Amrit Science Campus',
      location: 'Kathmandu',
      period: '2015 - 2019',
      notes: 'Studied software development, networking, and database systems.',
      icon: 'campus'
    },
    {
      id: 4,
      qualification: 'Master of Science in CSIT',
      institution: 'Central Department of CSIT, TU',
      location: 'Kathmandu',
      period: '2020 - 2022',
      notes: 'Pursuing advanced research in computer science and IT systems.',
      icon: 'cap'
    }
  ]

  const renderIcon = (type: string) => {
    switch (type) {
      case 'school':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
            <path d="M11 12.47L3 8.4v7.6l8 3.64 8-3.64V8.4l-8 4.07z" />
          </svg>
        )
      case 'building':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path d="M4 22h16V6l-8-4-8 4v16zM6 8h2v2H6V8zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
          </svg>
        )
      case 'campus':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path d="M12 2l10 5-10 5-10-5 10-5zm0 7.18L18 7l-6-3-6 3 6 2.18zm-8 2.32v7.5l8 3.5 8-3.5v-7.5L12 12.5 4 12z" />
          </svg>
        )
      case 'cap':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path d="M12 3L1 8l11 5 9-4.09V17h2V8L12 3zm0 7.98L5 9.12v2.51l7 3.18 7-3.18V9.12l-7 1.86z" />
            <path d="M5 13.41V17l7 3.18 7-3.18v-3.59l-7 3.18-7-3.18z" />
          </svg>
        )
    }
  }

  return (
    <section id="education" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">Education</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">Academic Background</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600">
            Academic qualifications that support my teaching and technical expertise.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.qualification}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.institution}</p>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4 text-sm font-semibold text-indigo-600">
                <span>{item.location}</span>
                <span className="rounded-full bg-indigo-50 px-3 py-1">{item.period}</span>
              </div>
              <p className="text-slate-600 leading-7">{item.notes}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
