const LatestWorks = () => {
    const projects = [
        {
          title: "Jobbazar Job Finder Web Exploration",
          description:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you! Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
          image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_1.png",
          bg: "bg-blue-100",
        },
        {
          title: "Slep Social Media apps Exploration",
          description:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you! Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
          image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_2.png",
          bg: "bg-green-100",
          reverse: true,
        },
        {
          title: "Costa Restaurant Landing Page",
          description:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you! Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
          image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_3.png",
          bg: "bg-yellow-100",
        },
      ];
      
    return (      
              <section className="ezy__portfolio16 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
                <div className="container px-4 mx-auto">
                  <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="w-2/3">
                      <h2 className="text-3xl md:text-[52px] font-bold">Our Recent Work</h2>
                    </div>
                    <div className="w-1/3 text-end">
                      <button className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded">
                        See All
                      </button>
                    </div>
                  </div>
          
                  <div className="flex flex-col gap-6 max-w-7xl mt-12 mx-auto">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className={`grid grid-cols-12 ${project.bg} bg-opacity-30 rounded-xl p-6 md:p-12`}
                      >
                        <div
                          className={`col-span-12 lg:col-span-5 ${
                            project.reverse ? "lg:order-2" : ""
                          }`}
                        >
                          <div
                            className={`${project.bg} bg-opacity-75 flex justify-center items-center p-6 rounded-xl`}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="max-w-full w-full h-auto"
                            />
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                          <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
                            <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
                              {project.title}
                            </h5>
                            <p className="leading-loose opacity-80 mb-6 lg:pr-12">
                              {project.description}
                            </p>
                            <div>
                              <button className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex">
                                View Project
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
           
      );
}
 
export default LatestWorks;






