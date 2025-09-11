import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinners from "./Spinners";


const JobListings = ({ isHomePage = false }) => {
  const [jobsCa, setJobsCa] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(
      "https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=a6ea1c5f&app_key=7dceb6f8e6af569397fd77c31848e4b7"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobsCa(data.results || []);
        setLoading(false);
      })
      .catch((err) => console.error(err), setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a6ea1c5f&app_key=7dceb6f8e6af569397fd77c31848e4b7"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.results || []);
        setLoading(false);
      })
      .catch((err) => console.error(err), setLoading(false));
  }, []);
  const listingJobsCa = isHomePage ? jobsCa.slice(0, 3) : jobsCa;
  const listingJobsUk = isHomePage ? data.slice(0, 3) : data;
  return (
    <section className="bg-white px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center mt-5">
          {isHomePage ? "Recent Onsite Jobs" : "Browse Onsite Jobs"}
        </h2>
        <h2 className="text-center text-xl text-black">
          {<Spinners loading={loading}/> ? (<Spinners loading={loading}/>) : ("") }
        </h2>
        {/* Jobs in canada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          {<Spinners loading={!loading}/> && listingJobsCa.length > 0
            ? listingJobsCa.map((job) => <JobListing job={job} key={job.id} />)
            : !loading && (
                <p className="col-span-3 text-center">No jobs found</p>
              )}     

        {/* Jobs in uk */}
          {listingJobsUk.length > 0
            ? listingJobsUk.map((job) => <JobListing job={job} key={job.id} />)
            : listingJobsUk.length === 0 && (
                <p className="col-span-3 text-center"></p>
              )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
