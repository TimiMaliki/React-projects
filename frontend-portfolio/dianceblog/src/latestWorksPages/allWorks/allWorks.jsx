const AllWorks = () => {
  const courses = [
    {
      id: 1,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses1.jpg",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Course",
      description:
        "Some quick example text to build on the card the bulk content...",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
    {
      id: 2,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses2.jpg",
      category: "Development",
      title: "Izomart is providing free course on Web Development",
      description: "Learn web development with Izomart and then you will be...",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
    {
      id: 3,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses3.jpg",
      category: "Branding",
      title: "A to Z of Branding with Filinzo Academy",
      description:
        "Why should you have the branding knowledge? This is the very first...",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
    {
      id: 4,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses4.jpg",
      category: "Technology",
      title: "Master React JS and hire your self for sure!",
      description:
        "React JS: The most popular framework in today's programming...",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
    {
      id: 5,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses5.jpg",
      category: "Content Writing",
      title: "Do you know the rules of Writing?",
      description:
        "Yes! Though we are writing since our childhood, there are some...",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
    {
      id: 6,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses6.jpg",
      category: "Freelancing",
      title: "Digital Marketing and Web Development first time!",
      description:
        "In this growing world marketing and web development is enrolling the...",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
    {
      id: 7,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses15.jpg",
      category: "Designing",
      title: "Learn arcitecture without having a degree!",
      description:
        "Architecture is a widely dominated sector in enginnering. So why not...",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
    {
      id: 8,
      image: "https://cdn.easyfrontend.com/pictures/courses/courses8.jpg",
      category: "Film & TV",
      title: "Become a master of model in a week with Coursera",
      description:
        "Vitae bibendum egestas magna sit elit non. Netus pharetra felis....",
      instructor: "John Smith",
      instructorImage:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    },
  ];

  return (
    <section className="ezy__portfolio12  py-14 md:py-24 ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-[45px] font-bold mb-2">All Works</h1>

          {/* tab bar */}
          <ul className="flex flex-wrap justify-center my-6">
            <li className="px-4 py-2 border-b-2 border-blue-600">
              <div className="nav-link">Most Popular</div>
            </li>
            <li className="px-4 py-2 hover:border-b-2 hover:border-blue-600 transition duration-300 opacity-80">
              <div className="nav-link">Recents works</div>
            </li>
            <li className="px-4 py-2 hover:border-b-2 hover:border-blue-600 transition duration-300 opacity-80">
              <div className="nav-link">Old works</div>
            </li>
          </ul>
        </div>

        <div>
          {/* Course cards */}
          <div className="grid grid-cols-12 gap-6 mt-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
              >
                <div className=" h-full rounded overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2flex items-center justify-center w-12 h-12 bg-opacity-50 rounded-full cursor-pointer">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-opacity-20"></div>
                      <i className="fas fa-play ml-1"></i>
                    </div>
                    <img
                      src={course.image}
                      className="w-full"
                      alt={course.title}
                    />
                  </div>
                  <div className="p-4">
                    <div>
                      <p className="text-[15px] opacity-80 mb-2">
                        {course.category}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-[19px] font-medium leading-snug mb-2">
                        {course.title}
                      </h5>
                    </div>
                    <p className="text-[15px] opacity-80">
                      {course.description}
                    </p>
                    <div className="flex justify-between mt-4 mb-2">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="max-w-full h-auto rounded-full border"
                            width="40"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-medium mb-0">
                            {course.instructor}
                          </h4>
                        </div>
                      </div>
                      <div
                        className="border border-blue-600 px-3 py-2 hover:bg-blue-600 hover:text-white duration-300 rounded uppercase text-sm"
                        type="button"
                      >
                        Gift
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="col-span-12">
            <nav>
              <ul className="flex flex-wrap gap-3 justify-center mt-12">
                <li>
                  <div className="bg-blue-600  hover:bg-opacity-90 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                    <i className="fas fa-angle-left"></i>
                  </div>
                </li>

                <li className="bg-blue-600  hover:bg-opacity-90 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                  <div className="m-0">1</div>
                </li>
                <li className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                  <div className="">2</div>
                </li>
                <li className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                  <div className="">3</div>
                </li>
                <li className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                  <div className="">4</div>
                </li>
                <li className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                  <div className="">5</div>
                </li>
                <li className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                  <div className="">...</div>
                </li>
                <li className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                  <div className="">11</div>
                </li>

                <li>
                  <div className="bg-blue-600  hover:bg-opacity-90 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllWorks;
