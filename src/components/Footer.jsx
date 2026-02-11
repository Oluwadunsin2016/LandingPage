import React from 'react'

const Footer = () => {
  return (
       <footer id="contact" className="mt-12 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          <div>
            <div className="font-bold text-[#b82b24]">Fecircle</div>
            <div className="mt-2 text-sm">Community savings. Modern trust.</div>
            <div className="mt-4 text-sm">Email: hello@fecircle.com</div>
          </div>
          <div>
            <div className="font-bold text-[#b82b24]">Company</div>
            <ul className="mt-2 text-sm space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[#b82b24]">Product</div>
            <ul className="mt-2 text-sm space-y-2">
              <li>How it works</li>
              <li>Security</li>
              <li>Integrations</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">© {new Date().getFullYear()} Fecircle — Built for communities</div>
      </footer>
  )
}

export default Footer