import cardOne from "../../images/social-audience.jpg"
import cardTwo from "../../images/analytic.jpg"
import cardThree from "../../images/scratch.jpg"
import cardFour from "../../images/strategy.jpg"
import Headers from "./header"

const Services = () => {
    return ( 
<div className="w-full h-full mt-12">
  {/* Header Section */}
  <div className="w-full h-full grid lg:grid-cols-2 gap-3 p-14">
    <div className="our-services">
      <h1 className="text-4xl text-center lg:text-7xl font-extrabold">
        <Headers title={"Our Services"}/>
      </h1>
    </div>
    <div className="text">
      <p className="lg:text-xl text-base text-center">
        At Diance-Blog, we focus on building strong digital foundations for creators, brands, and entrepreneurs. From audience growth to analytics and blog development, we help you grow sustainably and strategically.
      </p>
    </div>
  </div>

  {/* Services Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 lg:p-12">
    {/* Card 1 */}
    <div className="card-one w-full text-center p-8 border rounded-2xl shadow-xl">
      <img
        src={cardOne}
        alt="Grow Audience"
        className="w-full  mx-auto mb-6 object-contain rounded-lg"
      />
      <h2 className="text-2xl font-semibold mb-3">Grow Media Audience</h2>
      <p className="text-base lg:text-lg">
        We help creators and brands increase reach on platforms like YouTube, TikTok, and Instagram using proven organic and paid growth strategies.
      </p>
    </div>

    {/* Card 2 */}
    <div className="card-one w-full text-center p-8 border rounded-2xl shadow-xl">
      <img
        src={cardTwo}
        alt="Social Media Analytics"
        className="w-full  mx-auto mb-6 object-contain  rounded-lg"
      />
      <h2 className="text-2xl font-semibold mb-3">Social Media Analytics</h2>
      <p className="text-base lg:text-lg">
        Understand your audience better with real-time reporting, performance insights, and actionable recommendations to improve content strategy.
      </p>
    </div>

    {/* Card 3 */}
    <div className="card-one w-full text-center p-8 border rounded-2xl shadow-xl">
      <img
        src={cardThree}
        alt="Blog Growth"
        className="w-full  mx-auto mb-6 object-contain  rounded-lg"
      />
      <h2 className="text-2xl font-semibold mb-3">Grow Blogs From Scratch</h2>
      <p className="text-base lg:text-lg">
        We help launch and scale blogs by handling everything from niche research to design, content creation, SEO, and monetization.
      </p>
    </div>

    {/* Card 4 */}
    <div className="card-one w-full text-center p-8 border rounded-2xl shadow-xl">
      <img
        src={cardFour}
        alt="Content Strategy"
        className="w-full  mx-auto mb-6 object-contain  rounded-lg"
      />
      <h2 className="text-2xl font-semibold mb-3">Brand & Content Strategy</h2>
      <p className="text-base lg:text-lg">
        From visual identity to storytelling, we develop content strategies that align with your goals and speak to your target audience.
      </p>
    </div>
  </div>
</div>

     );
}
 
export default Services;