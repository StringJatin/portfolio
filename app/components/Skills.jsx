export default function Skills() {
    const skills = {
      Programming_Languages: ["C++", "JavaScript", "TypeScript"],
      Coursework: [
        "Data Structures",
        "Object Oriented Programming",
        "Operating System",
        "Network Protocol",
        "Database Management System",
      ],
      Web_Technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "AngularJS",
      ],
      Testing_Tools: ["Jest (Unit Testing)", "Playwright (Automated Testing)"],
      Databases_and_Tools: ["MongoDB", "Git", "GitHub", "Firebase", "Supabase"],
    };
  
    return (
      <section id="skills" className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-start">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border-l-4 border-emerald-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-emerald-600">
                {category.replace(/_/g, " ")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  