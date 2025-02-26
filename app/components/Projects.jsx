export default function Projects() {
    const projects = [
        {
            name: "FindMyCollege",
            links: {
              live: "#",
              github: "#",
            },
            techStack: [
              "JavaScript",
              "Next.js",
              "Node.js",
              "MongoDB",
              "JWT",
              "Material UI",
              "Sass",
              "Supabase",
            ],
            description:
              "FindMyCollege is a web application that helps students discover the best college options by simply entering their JEE rank. Designed an intuitive user interface for seamless navigation and efficient result filtering. Engineered a robust backend to deliver accurate and data-driven college recommendations.",
          },
      {
        name: "Netflix Analytics",
        links: {
          live: "#",
          github: "#",
        },
        techStack: [
          "JavaScript",
          "React.js",
          "Node.js",
          "MongoDB",
          "JWT",
          "Material UI",
          "Sass",
          "Firebase",
        ],
        description:
          "Created a comprehensive Netflix Analytics platform with a Netflix UI clone in the frontend, featuring an intuitive dashboard for tracking user analytics and seamless CRUD operations for dynamic movie performance evaluation. Developed the frontend in such a way that it elevates the user experience.",
      },
      {
        name: "Taxi Booking Application",
        links: {
          live: "#",
          github: "#",
        },
        techStack: ["JavaScript", "Next.js", "React.js", "Node.js", "MongoDB", "CSS"],
        description:
          "Developed a dynamic taxi booking app with CMS using the MERN stack, integrating real-time Google Maps API for seamless navigation. Users can share blogs on the platform, which boasts full SEO optimization for enhanced online visibility.",
      }, 
    ];
  
    return (
      <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-start">
          Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-l-4 border-emerald-500 pl-6 py-4 dark:bg-gray-900 "
            >
                <div className="flex justify-between items-start mb-1">
              <h3 className="text-2xl font-semibold">
                {project.name}
              </h3>
              <div className="mt-2 flex space-x-4">
                <a
                  href={project.links.live}
                  className="font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href={project.links.github}
                  className=" font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                </div>
              </div>
              <h4 className="font-semibold mt-3 text-gray-700 dark:text-gray-300">
                Tech Stack Used:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-400 mt-3">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  