import React, { useEffect, useState } from "react";
import CollarJobListing from './CollarJobListing';
import Spinners from "../Component/Spinners";


const CollarJobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "http://localhost:5000/jobs"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err), setLoading(false));
  }, []);


 
  
  return (
    <section className="bg-yellow-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center mt-10">
        Explore Careers by Collar Type
        </h2>
        <h2 className="text-center text-xl text-black">
          {<Spinners loading={loading}/> ? (<Spinners loading={loading}/>) : ("") }
        </h2>
        {/* Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((job) => <CollarJobListing job={job} key={job.id} />)}
        </div>
      </div>
    </section>
  )
}

export default CollarJobs