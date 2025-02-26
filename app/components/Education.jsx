export default function Education() {
    const education = [
      {
        institution: "Symbiosis University Of Applied Sciences, Indore (M.P)",
        // duration: "2020 - 2024",
        degree: "Bachelor Of Technology, Computer Science & Information Technology",
        score: "C.G.P.A : 9.04",
      },
    //   {
    //     institution: "Sarafa Vidya Niketan, Indore",
    //     duration: "2020",
    //     degree: "Central Board of Secondary Education (HSC)",
    //     score: "Score : 91.2%",
    //   },
    ];
  
    return (
      <section id="education" className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-start">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-emerald-500 pl-6 py-4 dark:bg-gray-900 "
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-2xl font-semibold">{edu.institution}</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm m-1">
                  {edu?.duration}
                </span>
              </div>
              <h4 className="font-semibold mt-3 text-gray-700 dark:text-gray-300">
                {edu.degree}
              </h4>
              <p className="text-gray-700 dark:text-gray-400 mt-2">{edu.score}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  