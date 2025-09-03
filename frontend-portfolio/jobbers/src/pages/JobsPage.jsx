import JobListings from "../Component/JobListings"


const JobsPage = () => {
  fetch("https://linkedin-job-search-api.p.rapidapi.com/active-jb-7d?limit=10&offset=0&title_filter=%22Data%20Engineer%22&location_filter=%22United%20States%22%20OR%20%22United%20Kingdom%22", {
  headers: {
    'x-rapidapi-key': '5616351c70mshbc0f356c603975ap15b532jsn5a639c258924',
		'x-rapidapi-host': 'linkedin-job-search-api.p.rapidapi.com'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));


  return (
    <section className="bg-blue-50 px-4 py-6">
     <JobListings/>
    </section>
  )
}

export default JobsPage


// https://serpapi.com/search.json?q=Coffee&engine=google&api_key=860275d50fd046d548e82136805926ad04410a36be84d363ff639e746ce5d4b1