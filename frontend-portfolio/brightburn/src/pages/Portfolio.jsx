// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import Project1 from "../images/portfolio/l1.png";
import Project2 from "../images/portfolio/l2.png";
import Project3 from "../images/portfolio/l3.png";
import Project4 from "../images/portfolio/l4.png";
import Project5 from "../images/portfolio/l5.png";
import Project6 from "../images/portfolio/l6.png";
import Project7 from "../images/portfolio/l7.png";
import Project8 from "../images/portfolio/l8.png";
import Project9 from "../images/portfolio/l9.png";
import Project10 from "../images/portfolio/l10.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern E-Commerce Store",
      image: Project1,
      link: "#",
      description:
        "A sleek, fully responsive online store with seamless checkout and modern design.",
    },
    {
      title: "Business Agency Website",
      image: Project2,
      link: "#",
      description:
        "Professional website for a leading agency, built for speed and conversions.",
    },
    {
      title: "NFT Marketplace",
      image: Project3,
      link: "#",
      description:
        "A secure, fast, and visually stunning NFT marketplace platform.",
    },
    {
      title: "Creative Portfolio",
      image: Project4,
      link: "#",
      description:
        "A personal portfolio for a creative professional, focused on showcasing work beautifully.",
    },
  ];

  return (
    <section className="w-full p-6 lg:p-0 py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Explore some of the standout projects we've proudly delivered for
            clients worldwide.
          </p>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {/* swiper one */}
          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project1}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper one */}

          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project2}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper two */}

          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project3}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper three */}

          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project4}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper four */}

          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project5}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper five */}
          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project6}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper six */}

          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project7}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* swiper seven */}
          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project8}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper eight*/}

          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project9}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* swiper nince*/}
          <SwiperSlide>
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full relative">
                <img
                  src={Project10}
                  alt={"a dev"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                <p className="text-gray-700 mb-4"></p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
{
  /* <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
{projects.map((project, index) => (
  <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
    <div className="h-64 w-full relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:underline font-semibold"
      >
        View Project →
      </a>
    </div>
  </div>
))}
</div> */
}
