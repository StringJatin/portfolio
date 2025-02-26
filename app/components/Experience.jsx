import ExperienceCard from './ExperienceCard'

export default function Experience() {
  const experiences = [
    {
      company: 'Shipthis (B2B SaaS)',
      position : 'Software Engineer',
      period: 'August 2024 - Present',
      description: 'The Most Comprehensive AI Powered Freight Forwarding Software covering all aspect of your freight forwarding operations.',
      contributions: [
        'Developed and enhanced multiple frontend features to enhance user experience and functionality.', 'Worked on migrating the entire product’s component library for improved consistency and performance.', 'Designed and implemented a robust testing framework from scratch using Playwright and Microsoft Azure to enhance software reliability.'
      ],
      technologies: ['JavaScript', 'TypeScript', 'AngularJS','Tailwind CSS', 'MongoDB', 'Playwright']
    },
    {
      company: 'Metafic',
      position : 'SDE Intern',
      period: 'January 2024 - July 2024',
      description: 'Metafic is an award-winning agile custom software development company that works on ambitious projects with visionary and iconic clients from all across the globe.',
      contributions: [
        'Collaborated with cross-functional teams to develop frontend UI components and application features according to project requirement.', 'Employed unit testing methodologies proficiently using Jest to maintain code quality and reliability.'
      ],
      technologies: ['JavaScript', 'TypeScript', 'React JS','Material UI', 'Jest', 'Git']
    }
  ]

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            position={exp.position}
            period={exp.period}
            description={exp.description}
            contributions={exp.contributions}
            technologies={exp.technologies}
          />
        ))}
      </div>
    </section>
  )
}