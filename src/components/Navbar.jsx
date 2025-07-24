import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const navItems = ['home', 'about', 'projects', 'contact']

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo or Name */}
        <div className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide animate-pulse">
          [Archit Shaw]
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(section => (
            <a
              key={section}
              href={`#${section}`}
              className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <span className="hover-underline-animation">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition">
            <FaLinkedin size={20} />
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-300 transition"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          {navItems.map(section => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
