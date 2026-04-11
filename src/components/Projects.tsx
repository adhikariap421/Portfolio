import React from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link: string
  github: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application with product filtering, cart management, and secure checkout.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasting and weather alerts.',
      technologies: ['React', 'Weather API', 'D3.js', 'Vite'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">Projects</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">Featured Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600">
            Here are some of my recent works.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              </div>
              <p className="mb-6 text-slate-600">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={project.link} className="rounded-full border border-indigo-500 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50">
                  Live Demo
                </a>
                <a href={project.github} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
