import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Recipe App",
      description:
        "A responsive React-based recipe application that lets users search, explore, and view detailed cooking instructions and ingredients using real-time API data.",
     
      technologies: ["React", "Vite", "JavaScript (ES6+)", "CSS Modules", "HTML5", "Spoonacular API", "Git", "GitHub" ],
      github: "https://github.com/rinshamol/RecipeApp.git",
      // live: "https://your-ecommerce-demo.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://via.placeholder.com/400x250/059669/FFFFFF?text=Task+Manager",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/taskmanager",
      live: "https://your-taskmanager-demo.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather and forecasts using multiple APIs with beautiful data visualizations.",
      image:
        "https://via.placeholder.com/400x250/DC2626/FFFFFF?text=Weather+App",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      github: "https://github.com/yourusername/weatherapp",
      live: "https://your-weather-demo.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              

              <div className="p-6">
                  <a
                    href={project.github}
                    target="_blank">

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
