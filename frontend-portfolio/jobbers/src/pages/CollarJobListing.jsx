import React from 'react'
import { MapPin, DollarSign, Briefcase, Mail, Phone } from "lucide-react";
import { useState } from "react";
import Spinners from '../Component/Spinners';


const CollarJobListing = ({job}) => {
    const [showMore, setShowMore] = useState(false);
    const [loading , setLoading]  = useState(false)
    const collarColors = {
        "white": "text-gray-700 bg-gray-100",
        "blue": "text-blue-700 bg-blue-100",
        "pink": "text-pink-700 bg-pink-100",
        "brown": "text-yellow-800 bg-yellow-100",
        "gold": "text-yellow-600 bg-yellow-50",
      };
          
      return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-green-400">
          {/* Header */}
          { loading ? <Spinners loading = {loading} />  :(
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-black flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  {job.title}
                </h3>
                <p className="text-sm text-black mt-1">{job.company?.name}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${collarColors[job.color] || "bg-gray-100 text-black"}`}
              >
                {job.category}
              </span>
            </div>
    
            {/* Description */}
            <p className="text-black text-sm leading-relaxed mb-4">
              {showMore ? job.description : job.description.slice(0, 100) + "..."}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm font-medium text-green-600 hover:text-green-800 transition-colors underline"
            >
              {showMore ? "View Less" : "View Details"}
            </button>
    
            {/* Footer */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-black">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  {job.salary}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-green-600" />
                  {job.location}
                </span>
              </div>
    
              <div className="flex items-center gap-3 text-sm text-black">
                <a href={`mailto:${job.company?.contactEmail}`} className="flex items-center gap-1 hover:text-green-700">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a href={`tel:${job.company?.contactPhone}`} className="flex items-center gap-1 hover:text-green-700">
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          </div>
          )
          }

        </div>
      );
}

export default CollarJobListing