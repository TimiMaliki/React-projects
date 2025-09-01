import Card from "./Component/Card";
import Hero from "./Component/Hero";
import JobListing from "./Component/JobListing";
import Navbar from "./Component/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    <JobListing/>

      {/* View All Jobs */}
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
}

export default App;
