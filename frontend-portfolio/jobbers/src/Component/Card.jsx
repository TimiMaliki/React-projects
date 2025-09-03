import { Link } from "react-router-dom";

const Card = () => {
    return ( 
        <>
         <section className="py-8">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg shadow-md border border-yellow-200">
            <h2 className="text-2xl font-bold text-green-800">Job Seekers</h2>
            <p className="mt-2 mb-4 text-gray-700">
              Find perfect opportunities that fit your schedule and skills. 
              Jobs tailored to your availability are waiting for you!
            </p>
            <Link to={"/jobs"}>
              <div className="inline-block bg-green-600 text-white rounded-lg px-5 py-3 hover:bg-green-700 transition-colors shadow-md font-medium">
                Explore Jobs
              </div>
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h2 className="text-2xl font-bold text-green-800">Employers</h2>
            <p className="mt-2 mb-4 text-gray-700">
              Post your job openings and find the perfect candidates. 
              Reach qualified professionals ready to work on your schedule.
            </p>
            <Link to={""}>
              <div className="inline-block bg-yellow-500 text-green-900 rounded-lg px-5 py-3 hover:bg-yellow-600 transition-colors shadow-md font-medium">
                Post a Job
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
        </>
     );
}
 
export default Card;