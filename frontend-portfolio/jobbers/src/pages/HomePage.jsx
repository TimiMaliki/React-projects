import Card from "../Component/Card";
import Hero from "../Component/Hero";
import JobListings from "../Component/JobListings";
import ViewAll from "../Component/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Card />
      <JobListings isHomePage={true}/>
      <ViewAll />
    </>
  );
};

export default HomePage;
