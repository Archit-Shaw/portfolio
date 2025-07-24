import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4 py-16"
    >
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-14 text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          <TypeAnimation
            sequence={['Contact Me 📩', 2000, 'Let’s Connect 🤝', 2000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-300">Feel free to reach out to me via email or phone, or connect through my socials.</p>

            <div className="space-y-2">
              <p className="flex items-center gap-3"><FaEnvelope /> architshaw12@gmail.com</p>
              <p className="flex items-center gap-3"><FaPhoneAlt /> +91 9334695783</p>
              <p className="flex items-center gap-3"><FaMapMarkerAlt /> Roorkee, India</p>
            </div>

            <div className="flex gap-6 mt-6 text-2xl">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
            </div>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
