import { Link } from "react-router";

const LatestWorks = () => {
  

    const projects = [
      {
        title: "Jobbazar - AI-Powered Job Platform",
        description: "Revolutionized job searching with machine learning algorithms that match candidates to ideal positions. Built with React, Node.js, and MongoDB, featuring real-time notifications and advanced filtering.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tags: ["React", "Node.js", "MongoDB", "AI Matching"],
        year: "2023",
        link: "/projects/jobbazar"
      },
      {
        title: "Slepp - Social Media for Professionals",
        description: "Created a LinkedIn alternative focused on authentic professional connections. Implemented WebSockets for real-time messaging, custom analytics dashboards, and secure authentication flow.",
        image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_2.png",
        tags: ["Next.js", "Firebase", "Tailwind CSS", "WebSockets"],
        year: "2022",
        reverse: true,
        link: "/projects/slepp"
      },
      {
        title: "Costa - Restaurant Management System",
        description: "End-to-end solution for restaurant operations including inventory, POS, and customer loyalty programs. Reduced order processing time by 40% with optimized workflows.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tags: ["React Native", "GraphQL", "Django", "Payment Processing"],
        year: "2023",
        link: "/projects/costa"
      },
    ];
  
        return (
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header with CTA */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                <div className="mb-6 md:mb-0">
                  <span className="text-sm font-semibold text-purple-600 mb-2 block">PORTFOLIO SHOWCASE</span>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Recent Work</span>
                  </h2>
                </div>
                <Link 
                  to="/allworks" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                >
                  View All Projects
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
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
                      <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 "></div>
                    </div>
      
                    {/* Project Content */}
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-sm font-medium ">{project.year}</span>
                        <span className="w-4 h-px "></span>
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-medium px-1.5 lg:px-2.5 py-0.5 rounded-full p-10 lg:p-0">
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
                      <Link
                        to={project.link}
                        className="inline-flex items-center px-6 py-3 border text-base font-medium rounded-full shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                      >
                        View Case Study
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
  
    
}
 
export default LatestWorks;






