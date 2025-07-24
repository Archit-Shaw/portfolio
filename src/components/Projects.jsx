import { motion } from "framer-motion";
import devfinderImg from '../assets/devfinder.png';


function Projects() {
  const projects = [
  {
    title: "Detective DevFinder",
    description: "A React-based GitHub profile viewer using the GitHub API. Responsive and styled with Tailwind CSS.",
    image: devfinderImg,
    link: "https://detective-devfinder.netlify.app",
  },
  {
    title: "Auction Website",
    description: "A full-stack auction site built with HTML, CSS, JavaScript, and PHP.",
    github: "https://github.com/Archit-Shaw/auction_website",
  }
];



  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-cyan-400/30 transition-transform duration-300 transform hover:-translate-y-2"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
                />
              )}
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300 mr-4 transition duration-200"
                >
                  🔗 Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-purple-400 hover:text-purple-300 transition duration-200"
                >
                  📂 GitHub Repo
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
