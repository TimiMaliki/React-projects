import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
        <div className="container-xl lg:container m-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-700 font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Create Profile</h3>
              <p className="text-gray-600">Tell us about your skills, experience, and availability</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-700 font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Find Jobs</h3>
              <p className="text-gray-600">Browse opportunities that match your criteria</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-700 font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Get Hired</h3>
              <p className="text-gray-600">Connect with employers and start working</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks