import Headers from "../HomePages/header";
import news from "../images/Trends/roman-kraft-_Zua2hyvTBk-unsplash.jpg"
import BlogCols from "./BlogCols";


const TrendsHero = () => {
  return (
    <div className="w-full min-h-screen p-4 lg:p-20">
      {/* Text Section */}
      <div className="w-full  text-center lg:text-left">
        <div className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-10 lg:mt-0 mb-4">
          <Headers title={"Bring Change Home"} />
        </div>
        <div className="text-base sm:text-lg lg:text-xl font-semibold mb-4">
          <p>Let Our Stories of Hope Inspire You!</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-full">
        <img
          src={news}
          alt="Hope Story"
          className="w-full h-full sm:h-80 md:h-96 lg:h-[700px] object-cover rounded-xl"
        />
      </div>
  
      <BlogCols />
 
    </div>
  );
};

export default TrendsHero;
