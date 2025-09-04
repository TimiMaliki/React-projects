import React, { useState } from 'react'

const AddJob = () => {
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [type , setType] = useState("")
    const [salary , setSalary] = useState("")
    const [location , setLocation] = useState("")
    const [company , setCompany] = useState("")
    const [companyDescription , setCompanyDescription] = useState("")
    const [contactEmail , setContactEmail] = useState("")
    const [contactPhone , setContactPhone] = useState("")
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-green-50 to-yellow-50">
    <div className="container mx-auto max-w-2xl py-20 px-6">
      <div className="bg-white px-8 py-10 shadow-xl rounded-2xl border border-gray-100">
        <form>
          <h2 className="text-4xl font-extrabold text-center text-green-700 mb-10">
            Post a Job
          </h2>
  
          {/* Job Type */}
          <div className="mb-6">
            <label htmlFor="type" className="block text-black font-semibold mb-2">
              Job Type
            </label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            >
              <option value="">Select job type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="OnSite">OnSite</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
  
          {/* Job Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-black font-semibold mb-2">
              Job Listing Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="e.g. Frontend Developer"
              required
            />
          </div>
  
          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-black font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              rows="4"
              placeholder="Add job duties, expectations, and requirements..."
            ></textarea>
          </div>
  
          {/* Salary */}
          <div className="mb-6">
            <label htmlFor="salary" className="block text-black font-semibold mb-2">
              Salary
            </label>
            <select
              id="salary"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            >
              <option value="">Select salary range</option>
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - 60K">$50K - $60K</option>
              <option value="$60K - 70K">$60K - $70K</option>
              <option value="$70K - 80K">$70K - $80K</option>
              <option value="$80K - 90K">$80K - $90K</option>
              <option value="$90K - 100K">$90K - $100K</option>
              <option value="$100K - 125K">$100K - $125K</option>
              <option value="$125K - 150K">$125K - $150K</option>
              <option value="$150K - 175K">$150K - $175K</option>
              <option value="$175K - 200K">$175K - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>
  
          {/* Location */}
          <div className="mb-6">
            <label htmlFor="location" className="block text-black font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Company Location"
              required
            />
          </div>
  
          <hr className="my-8 border-gray-200" />
  
          <h3 className="text-2xl font-bold text-green-700 mb-6">Company Info</h3>
  
          {/* Company Name */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-black font-semibold mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Company Name"
            />
          </div>
  
          {/* Company Description */}
          <div className="mb-6">
            <label htmlFor="company_description" className="block text-black font-semibold mb-2">
              Company Description
            </label>
            <textarea
              id="company_description"
              name="company_description"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </div>
  
          {/* Contact Email */}
          <div className="mb-6">
            <label htmlFor="contact_email" className="block text-black font-semibold mb-2">
              Contact Email
            </label>
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Email address for applicants"
              required
            />
          </div>
  
          {/* Contact Phone */}
          <div className="mb-6">
            <label htmlFor="contact_phone" className="block text-black font-semibold mb-2">
              Contact Phone
            </label>
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className="border rounded-lg w-full py-3 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Optional phone for applicants"
            />
          </div>
  
          {/* Submit */}
          <div>
            <button
              className="w-full bg-gradient-to-r from-indigo-600 to-green-700 hover:from-green-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
              type="submit"
            >
               Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  )
}

export default AddJob