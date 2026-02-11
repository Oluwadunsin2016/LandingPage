import React from 'react'

const WaitList = () => {
  return (
      <section id="waitlist" className="max-w-4xl mx-auto px-6 py-12 mt-6 bg-gray-50 rounded-lg border">
        <h2 className="text-2xl font-bold text-[#b82b24]">Join the Waitlist</h2>
        <p className="mt-2 text-gray-700">Sign up to pilot Fecircle in your community. Priority access and pilot incentives for early circles.</p>
        <form action="https://example.com/submit" method="POST" className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="name" placeholder="Full name" className="p-3 rounded border text-black" required />
          <input name="email" placeholder="Email address" className="p-3 rounded border text-black" required />
          <select name="country" className="p-3 rounded border text-black" required>
            <option value="UK">United Kingdom</option>
            <option value="NG">Nigeria</option>
            <option value="OTHER">Other</option>
          </select>
          <input name="circle_size" placeholder="Expected circle size" className="p-3 rounded border text-black md:col-span-2" />
          <button type="submit" className="bg-[#b82b24] text-white p-3 rounded font-semibold">Join Waitlist</button>
        </form>
        <div className="mt-4 text-sm text-gray-600">We respect your privacy. Data will be used to prioritise pilots and will not be shared without consent.</div>
      </section>
  )
}

export default WaitList