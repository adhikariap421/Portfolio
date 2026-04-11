import React from 'react'

interface SkillCategory {
  category: string
  skills: string[]
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'CSS3', 'Tailwind CSS', 'Vite', 'Next.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest']
    }
  ]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">Skills</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">Skills & Expertise</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600">
            Technologies I work with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.category} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-700">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
