import React from 'react'

const Hero = () => {
  return (
      <header className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#b82b24]">Save smarter. Together.</h1>
          <p className="mt-4 text-gray-700 text-lg">Turn trusted community circles into secure, escrowed, credit-building savings groups. Built for female founders, families, and diaspora communities across the UK and Nigeria.</p>

          <div className="mt-6 flex gap-4">
            <a href="#waitlist" className="bg-[#b82b24] text-white px-6 py-3 rounded-lg font-semibold shadow">Join Waitlist</a>
            <a href="#demo" className="border border-[#b82b24] text-[#b82b24] px-6 py-3 rounded-lg">Request Demo</a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm">
            <div className="bg-gray-100 p-3 rounded text-center">⭐ 4.9 Trust</div>
            <div className="bg-gray-100 p-3 rounded text-center">🔒 Escrow protection</div>
            <div className="bg-gray-100 p-3 rounded text-center">🌍 UK & Nigeria ready</div>
          </div>

          <div className="mt-8 p-4 bg-[#ffece9] rounded text-[#b82b24]">
            <strong>Pilot offer:</strong> Free escrow protection for first 3 cycles for pilot circles that sign up this month.
          </div>
        </div>

        {/* Mock phone / app preview */}
        <div className="flex items-center justify-center">
          <div className="w-[320px] h-[680px] bg-white rounded-3xl shadow-2xl overflow-hidden text-[#b82b24] border">
            <div className="h-16 bg-[#b82b24] flex items-center justify-center text-white font-bold">Fecircle</div>
            <div className="p-6 text-black">
              <div className="text-2xl font-bold">Welcome to Fecircle</div>
              <p className="mt-3 text-sm text-gray-600">Create your circle, invite members, and manage contributions—securely.</p>

              <div className="mt-6">
                <div className="bg-[#ffece9] p-4 rounded-md text-[#b82b24] font-semibold">Escrow wallet active</div>
                <div className="mt-4 p-4 rounded-md bg-gray-50">
                  <div className="text-lg font-bold">My Circle</div>
                  <div className="mt-2 text-sm text-gray-600">10 members · £1,000/month</div>
                  <div className="mt-4 bg-[#b82b24] text-white text-center py-2 rounded">Contribute £100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Hero