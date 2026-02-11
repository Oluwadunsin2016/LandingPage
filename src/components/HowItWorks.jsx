import React from 'react'

const HowItWorks = () => {
  return (
          <section id="how" className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-lg mt-6">
        <h2 className="text-2xl font-bold text-[#b82b24]">How Fecircle works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg">Create or Join</h3>
            <p className="mt-2 text-gray-700">Set up a circle with friends or join an existing trusted group. Add rules for rotation, bids, or pooled payouts.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg">Secure Escrow</h3>
            <p className="mt-2 text-gray-700">Contributions go to an escrow wallet—reducing treasurer risk and providing auditable transparency.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg">Prove & Access Credit</h3>
            <p className="mt-2 text-gray-700">Group and individual contribution histories become a verified record for loans, remittances, and partner services.</p>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks