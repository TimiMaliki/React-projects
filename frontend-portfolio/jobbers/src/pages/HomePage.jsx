import Card from "../pages/Card";
import Hero from "../pages/Hero";
import JobListings from "../pages/JobListings";
import ViewAll from "../pages/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Card />
      <JobListings />
      <ViewAll />
    </>
  );
};

export default HomePage;
