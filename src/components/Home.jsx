import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="home"
      data-aos="fade-in"
      className="relative w-full h-screen overflow-hidden bg-slate-800 dark:bg-gray-900"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: {
              value: 100,
              density: { enable: true, value_area: 1000 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 3 },
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              attract: { enable: false },
            },
            twinkle: {
              particles: {
                enable: true,
                color: "#ffffff",
                frequency: 0.02,
                opacity: 0.8,
              },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: ["grab", "bubble"] },
              onClick: { enable: true, mode: ["push", "repulse"] },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: { opacity: 0.5 },
              },
              bubble: {
                distance: 200,
                size: 8,
                duration: 2,
                opacity: 0.9,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-blue-900/40 to-slate-900/60"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md tracking-wide"
        >
          <Typewriter
            words={[
              "Welcome to My Portfolio",
              "I’m Archit Shaw",
              "SOFTWARE DEVELOPER",
              "FullStack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-2xl text-gray-200 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
        >
          I’m a passionate developer building innovative and scalable digital
          experiences using modern web technologies.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}

export default Home;
