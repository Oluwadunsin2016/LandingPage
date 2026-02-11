

const Navbar = () => {
  return (
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#b82b24] rounded-full flex items-center justify-center text-white font-bold text-xl">FC</div>
          <div>
            <div className="font-bold text-xl text-[#b82b24]">Fecircle</div>
            <div className="text-sm text-gray-600">Community savings, modern trust</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#ancestry" className="hover:underline">Community Ancestry</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="bg-[#b82b24] text-white px-4 py-2 rounded-lg font-semibold">Join Waitlist</a>
        </div>
        <div className="md:hidden">
          <button aria-label="open menu" className="bg-[#b82b24] text-white px-3 py-2 rounded">Menu</button>
        </div>
      </nav>
  )
}

export default Navbar