import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dp from '../assets/dp.jpg';

// Tech Icons
import { FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiMysql, SiGithub } from 'react-icons/si';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techStack = [
    { icon: <FaReact size={28} className="text-cyan-400" />, label: 'React' },
    { icon: <SiJavascript size={28} className="text-yellow-400" />, label: 'JavaScript' },
    { icon: <FaNodeJs size={28} className="text-green-500" />, label: 'Node.js' },
    { icon: <SiSpringboot size={28} className="text-green-700" />, label: 'Spring Boot' },
    { icon: <FaJava size={28} className="text-orange-600" />, label: 'Java' },
    { icon: <SiMongodb size={28} className="text-green-600" />, label: 'MongoDB' },
    { icon: <SiMysql size={28} className="text-blue-600" />, label: 'MySQL' },
    { icon: <SiTailwindcss size={28} className="text-teal-400" />, label: 'Tailwind' },
    { icon: <SiHtml5 size={28} className="text-orange-500" />, label: 'HTML5' },
    { icon: <SiCss3 size={28} className="text-blue-500" />, label: 'CSS3' },
    { icon: <FaGitAlt size={28} className="text-red-500" />, label: 'Git' },
    { icon: <SiGithub size={28} className="text-white" />, label: 'GitHub' },
  ];

  const experienceTimeline = [
    {
      year: '2025',
      title: 'Technical Intern – Arcoiris Logics',
      description: 'Building scalable web solutions using HTML, CSS, JAVASCRIPT and REACT.',
    },
    {
      year: '2024',
      title: 'Java Developer Intern – Pinnacle Labs',
      description: 'Built scalable web solutions using Java, Spring Boot, and React.',
    },

  ];

  return (
    <section id="about" className="py-16 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Profile */}
        <div className="text-center mb-12" data-aos="zoom-in">
          <div className="relative inline-block mb-6">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse shadow-lg">
              <img
                src={dp}
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-gray-900"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">About Me</h2>
          <p className="text-gray-300 mt-2 max-w-xl mx-auto">
            I'm Archit Shaw, a passionate Full Stack Developer focused on building performant and scalable digital products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center mb-16" data-aos="fade-up">
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center group hover:scale-110 transition-transform">
              <div className="bg-gray-800 p-3 rounded-xl shadow-md">
                {tech.icon}
              </div>
              <span className="text-sm mt-2 text-gray-400 group-hover:text-white transition">{tech.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative pl-6 border-l-4 border-blue-500 space-y-10" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          {experienceTimeline.map((item, idx) => (
            <div key={idx} className="ml-4">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-1.5"></div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.year}</p>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
