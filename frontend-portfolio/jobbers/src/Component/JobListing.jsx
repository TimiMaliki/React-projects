import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  let description = job.description;

  if (!showMore) {
    description = job.description.substring(0, 90) + "....";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
  <div className="p-4">
    <div className="mb-6">
      <div className="text-gray-600 my-2">{job.company?.display_name}</div>
      <h3 className="text-xl font-bold">{job.title}</h3>
    </div>
    <div className="mb-5 p-3">{description}</div>
    {!showMore ? (
      <button
        onClick={() => setShowMore(!showMore)}
        className="bg-yellow-500 hover:bg-yellow-600 text-green-900 p-2 rounded-lg mb-4"
      >
      more
      </button>
    ) : (
      <button
        onClick={() => setShowMore(!showMore)}
        className="bg-yellow-500 hover:bg-yellow-600 text-green-900 p-3 rounded-lg mb-4"
      >
       hide
      </button>
    )}

    <h3 className="text-green-600 mb-2">£{job.salary_min} - £{job.salary_max} Year</h3>
    <div className="border border-yellow-200 mb-5"></div>
    <div className="flex flex-col lg:flex-row justify-between mb-4">
      <div className="text-green-700 mb-3">{job.location?.display_name}</div>

      <Link to={`/job/${job.id}`}>
        <div className="h-[36px] bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-center text-sm">
          view
        </div>
      </Link>
    </div>
  </div>
</div>
  );
};

export default JobListing;
