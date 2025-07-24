import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import 'tsparticles/dist/tsparticles.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true })

    // Apply saved theme on load
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <main>
      
        <div>
          <Home />
        </div>
        );

        <section id="about" className="px-6 py-20 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
          <About />
        </section>

        <section id="projects" className="px-6 py-20" data-aos="zoom-in">
          <Projects />
        </section>

        <section id="contact" className="px-6 py-20 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
