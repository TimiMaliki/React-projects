const Services = () => {
    return ( 
        <div className="w-full h-full mt-12">
  {/* Header Section */}
  <div className="w-full h-full grid lg:grid-cols-2 gap-3 p-14">
    <div className="our-services">
      <h1 className="text-4xl text-center lg:text-7xl font-extrabold">
        Our Services
      </h1>
    </div>
    <div className="text">
      <p className="lg:text-xl text-base text-center">
        At Diance-Blog, we focus on building strong digital foundations for creators, brands, and entrepreneurs. From audience growth to analytics and blog development, we help you grow sustainably and strategically.
      </p>
    </div>
  </div>

  {/* Services Cards */}
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-2 lg:p-12">
    {/* Card 1 */}
    <div className="card-one w-full text-center p-10 lg:p-20 border border-red-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Grow Media Audience</h2>
      <p className="text-base lg:text-lg">
        We help creators and brands increase reach on platforms like YouTube, TikTok, and Instagram using proven organic and paid growth strategies.
      </p>
    </div>

    {/* Card 2 */}
    <div className="card-one w-full text-center p-10 lg:p-20 border border-red-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Social Media Analytics</h2>
      <p className="text-base lg:text-lg">
        Understand your audience better with real-time reporting, performance insights, and actionable recommendations to improve content strategy.
      </p>
    </div>

    {/* Card 3 */}
    <div className="card-one w-full text-center p-10 lg:p-20 border border-red-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Grow Blogs From Scratch</h2>
      <p className="text-base lg:text-lg">
        We help launch and scale blogs by handling everything from niche research to design, content creation, SEO, and monetization.
      </p>
    </div>

    {/* Card 4 */}
    <div className="card-one w-full text-center p-10 lg:p-20 border border-red-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Brand & Content Strategy</h2>
      <p className="text-base lg:text-lg">
        From visual identity to storytelling, we develop content strategies that align with your goals and speak to your target audience.
      </p>
    </div>
  </div>
</div>

     );
}
 
export default Services;