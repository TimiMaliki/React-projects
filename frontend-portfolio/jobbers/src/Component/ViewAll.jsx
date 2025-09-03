import React from "react";
import { Link } from "react-router-dom";

const ViewAll = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link to={"/jobs"}>
        <div className="block bg-green-600 text-white text-center py-4 px-6 rounded-xl hover:bg-green-900">
          View All Onsite Jobs
        </div>
      </Link>
    </section>
  );
};

export default ViewAll;
