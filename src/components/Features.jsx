import React from 'react'

const Features = () => {
  return (
        <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#b82b24]">Features that build trust and financial power</h2>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>• Escrowed group wallets with multi-sig option</li>
              <li>• Immutable contribution ledger & exportable reports</li>
              <li>• Group credit scoring & partner reporting</li>
              <li>• Cross-border remittances and local payout partners</li>
              <li>• Dispute resolution workflow and insurance add-ons</li>
            </ul>

            <div className="mt-6">
              <a href="#waitlist" className="bg-[#b82b24] text-white px-5 py-3 rounded font-semibold">Get early access</a>
            </div>
          </div>

          <div id="ancestry" className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-lg font-bold text-[#b82b24]">Community Ancestry Ecosystem</h3>
            <p className="mt-2 text-gray-700">A unique layer that maps the trust network and lineage of circles, enabling:</p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• <strong>Referral lineage</strong> — who invited whom and trusted leaders in each network</li>
              <li>• <strong>Community reputation</strong> — aggregated metrics for leaders, treasurers, and circles</li>
              <li>• <strong>Trusted onboarding</strong> — allow community leaders to vouch and reduce KYC friction</li>
              <li>• <strong>Growth insights</strong> — see which communities are expanding and where to run pilots</li>
            </ul>

            <div className="mt-4 text-sm text-gray-600">Design note: the Ancestry map is a visual graph view in the app (node clusters, leader badges, and trust score heatmaps). Use this as a premium feature for community managers.</div>
          </div>
        </div>
      </section>
  )
}

export default Features