const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          AI Dev Platform
        </div>

        {/* Menü */}
        <div className="hidden md:flex gap-8 text-sm opacity-80">
          <a href="#" className="hover:text-sky-400 transition">Features</a>
          <a href="#" className="hover:text-sky-400 transition">Docs</a>
          <a href="#" className="hover:text-sky-400 transition">Pricing</a>
        </div>

        {/* CTA */}
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-sm font-semibold hover:scale-105 transition">
          Giriş Yap
        </button>

      </div>
    </nav>
  )
}

export default Navbar