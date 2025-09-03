import { Link } from "react-router-dom";
import { Briefcase, Users } from "lucide-react";
import HowItWorks from "./howItWorks";

const Card = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Job Seekers Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-green-50">
                  <Briefcase className="w-7 h-7 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Job Seekers</h2>
              </div>
              <p className="mt-2 mb-6 text-gray-600 leading-relaxed">
                Discover opportunities tailored to your skills and schedule. The right job is just a click away.
              </p>
              <Link to={"/jobs"}>
                <button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  Explore Jobs
                </button>
              </Link>
            </div>

            {/* Employers Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50">
                  <Users className="w-7 h-7 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Employers</h2>
              </div>
              <p className="mt-2 mb-6 text-gray-600 leading-relaxed">
                Post openings and connect with qualified professionals eager to work on your terms.
              </p>
              <Link to={"/add-job"}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-xl px-6 py-3 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  Post a Job
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <HowItWorks />
      </section>
    </>
  );
};

export default Card;
