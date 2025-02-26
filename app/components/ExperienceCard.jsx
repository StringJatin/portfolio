export default function ExperienceCard({ company,position, period, description, contributions, technologies }) {
    return (
      <div className="border-l-4 border-emerald-500 pl-6">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-2xl font-semibold">{company}</h3>
         
          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-md text-gray-600 font-semibold">{position}</p>
        
        <p className="italic text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <ul className="list-disc pl-5 mb-4 space-y-2">
          {contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
        
        {technologies.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Technologies Worked On</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }