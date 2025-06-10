import Headers from "../HomePages/header";
import HeroImg from "../images/Trends/t1.jpg"

const TrendsHero = () => {
    return (  
        <div className="w-full h-screen  text-center  p-0 lg:p-20">
          <div className="text-2xl lg:text-7xl font-extrabold mt-24 lg:mt-0 mb-5">
          <Headers title={"Bring Change Home"} />
          </div> 
          <div className="text-lg lg:text-xl font-semibold text-center mb-10">
          <p> Let Our Stories of Hope Inspire You! </p> 
          </div>
         
         <div className="w-full h-full  mb-10">
         <img
          src={HeroImg}
          alt=""
          className="w-full h-full lg:h-[700px] object-cover rounded-xl"
        />
         </div>
   
       
        </div>
    );
}
 
export default TrendsHero;