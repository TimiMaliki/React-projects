import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

const JobListing = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  let description = job.description;

  if (!showMore) {
    description = job.description.substring(0, 120) + " ...";
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-600" />
              {job.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{job.company?.display_name}</p>
          </div>
          <span className="text-green-700 font-medium text-sm mt-2 sm:mt-0 flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {job.salary_min} - {job.salary_max}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
        >
          {showMore ? "Show less" : "Read more"}
        </button>

        {/* Footer */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center text-gray-500 text-sm gap-2">
            <MapPin className="w-4 h-4 text-green-600" />
            {job.location?.display_name}
          </div>
          <Link to={`/job/${job.id}`}>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
