function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Archit Shaw. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="https://github.com/Archit-Shaw" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/archit-shaw" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://twitter.com/@ArchitSHaw" className="hover:text-blue-400">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer