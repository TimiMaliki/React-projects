import fashion from "../images/works/ecom.png"
import dental from "../images/works/dental.png"
import confre from "../images/works/vidcal.png"
import dog from "../images/works/woofipidia.png"
import van from "../images/works/van.png"
import blog from "../images/portfolio/l1.png"


const ShowCase  = () => {
   
    const projects = [
        {
          title: "LightRun - The Motion you see on yur blog ",
          description: "Revolutionized blogs by monetizing you audience.",
          image:   `${blog}`,
          tags: ["React", "Node.js", "MongoDB", "AI Matching"],
          year: "2025",
          link: "https://lightrun.vercel.app/"
        },
        {
            title: "Dog sells website - get the cutest dogs available in belgium.",
            description: "Dogs lovers best go to place",
            image:   `${van}`,
            tags: ["WordPress"],
            year: "2024",
            link: "https://www.vanmarjoli.be/"
          },
          {
            title: "Woofipedia - Dogs Breeds",
            description: "Your trusted source for dog breed info, care tips, and everything canine — from tiny terriers to giant guardians.",
            image:  `${dog}`,
            tags: ["React", "Tailwindcss", "DogAPI"],
            year: "2024",
            reverse: true,
            link: "https://woofipedia.vercel.app/"
          },
        {
          title: "Slepp - Fashion Media for Professionals",
          description:"Slepp is the go-to fashion media platform for industry professionals. Stay ahead of trends with exclusive insights, expert analyses, and curated content spanning style, design, and business. From emerging designers to global fashion houses, Slepp keeps you inspired, informed, and connected.",
          image:  `${fashion}`,
          tags: ["Html", "Css", "Tailwind CSS", "JS"],
          year: "2023",
          reverse: true,
          link: "https://maliki-fashion-ecommerce.vercel.app/"
        },
        {
          title: `Costa - Every tooth in a man's head is more valuable than a diamond." and "A smile is a curve that sets everything straight.`,
          description: "Transform your smile with advanced dental care focused on clean, healthy, and radiant teeth. We offer comprehensive solutions for whitening, alignment, and oral wellness — because every great smile begins with great care.",
          image:  `${dental}`,
          tags: ["Html", "Css", "Bootstrap", "Js"],
          year: "2023",
          link: "https://dental-clinic-landing-page-ten.vercel.app/"
        },
        {
            title: "VidCOf - Video Calling System",
            description: "End-to-end solution for restaurant operations including inventory, POS, and customer loyalty programs. Reduced order processing time by 40% with optimized workflows.",
            image:  `${confre}`,
            tags: ["Html", "Css", "Bootstrap", "SwiperJs" , "Js"],
            year: "2022",
            link: "https://video-chat-landing-page.vercel.app/"
          },
      ];
    
          return (
            <section className="py-16 md:py-24 overflow-hidden">
              <div className="w-full px-4 sm:px-3 lg:px-8">
                {/* Header with CTA */}
                <div className="flex flex-col md:flex-row justify-center items-center lg:items-center mb-16 ">
                  <div className="mb-6 md:mb-0">
                    <span className="text-2xl font-extrabold text-blackmb-2 text-center block mb-6">PORTFOLIO SHOWCASE</span>
                    <h2 className="text-3xl md:text-7xl font-bold">
                      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-pink-900">Recent Work</span>
                    </h2>
                  </div>
                </div>
        
                {/* Projects Grid */}
                <div className="space-y-20">
                  {projects.map((project, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
                    >
                      {/* Project Image */}
                      <div className="w-[300px] lg:w-1/2 relative group">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 hidden lg:block "></div>
  
                      </div>
        
                      {/* Project Content */}
                      <div className="w-full lg:w-1/2">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm font-medium ">{project.year}</span>
                          <span className="w-4 h-px"></span>
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-medium px-0.5 lg:px-2.5 py-0.5 rounded-full  lg:p-0 ">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg  mb-6">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          className="inline-flex items-center px-6 py-3 border text-base  cursor-pointer font-medium rounded-full shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                        >
                          View Case Study
                          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
    
      
  }


export default ShowCase ;