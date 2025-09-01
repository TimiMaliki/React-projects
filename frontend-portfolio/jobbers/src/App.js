import Card from "./Component/Card";
import Hero from "./Component/Hero";
import JobListings from "./Component/JobListings";
import Navbar from "./Component/NavBar";
import ViewAll from "./Component/ViewAll";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    <JobListings/>
    <ViewAll/>
    </>
  );
}

export default App;
