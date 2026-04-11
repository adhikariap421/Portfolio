import React from 'react'

interface Job {
  id: number
  role: string
  company: string
  location: string
  period: string
  details: string
}

const Jobs: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      role: 'Network Assistant',
      company: 'World Link Communication',
      location: 'Jaulakhel, Kathmandu',
      period: '2019 - 2021',
      details: 'Supported network operations, managed connections, and assisted users with internet services.'
    },
    {
      id: 2,
      role: 'Full Time Faculty',
      company: 'New Summit College',
      location: 'Kathmandu',
      period: '2022 - 2024',
      details: 'Delivered lectures, designed curriculum, and guided students in practical tech projects.'
    },
    {
      id: 3,
      role: 'Coordinator',
      company: 'St Lawrence College',
      location: 'Kathmandu',
      period: '2024 - Present',
      details: 'Led academic coordination and managed student engagement for college programs.'
    }
  ]

  return (
    <section id="jobs" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">Experience</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">Work Experience</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600">
            Professional roles that shaped my technical and teaching expertise.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {jobs.map((job) => (
            <article key={job.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{job.role}</h3>
                  <p className="mt-2 text-sm font-medium text-indigo-600">{job.company}</p>
                </div>
                <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">{job.period}</span>
              </div>
              <p className="mb-3 text-sm text-slate-500">{job.location}</p>
              <p className="text-slate-600 leading-7">{job.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Jobs
