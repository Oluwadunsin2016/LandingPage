import React from 'react'

const Pricing = () => {
  return (
         <section id="pricing" className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-lg mt-6">
        <h2 className="text-2xl font-bold text-[#b82b24]">Pricing</h2>
        <p className="mt-3 text-gray-700">Simple, transparent pricing so circles can choose the path that suits them.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded bg-white shadow">
            <h4 className="font-bold text-[#b82b24]">Free</h4>
            <p className="mt-2 text-gray-700">2% contribution fee. Basic escrow. Community onboarding.</p>
          </div>
          <div className="p-6 rounded bg-white shadow">
            <h4 className="font-bold text-[#b82b24]">Premium</h4>
            <p className="mt-2 text-gray-700">£3/user/month or 0.5% fee, advanced reports, ancestry map access, priority support.</p>
          </div>
          <div className="p-6 rounded bg-white shadow">
            <h4 className="font-bold text-[#b82b24]">Enterprise</h4>
            <p className="mt-2 text-gray-700">White-label and group admin tools for NGOs, unions, and co-ops. Custom pricing.</p>
          </div>
        </div>
      </section>
  )
}

export default Pricing