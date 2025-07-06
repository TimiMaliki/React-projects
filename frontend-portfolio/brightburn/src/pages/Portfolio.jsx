// Import Swiper styles
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
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
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50 overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black mb-4 sm:mb-6">
            Our <span className="text-red-700">Portfolio</span>
          </h2>
          <p className="text-black text-base sm:text-xl md:text-2xl max-w-2xl mx-auto">
            Explore some of the standout projects we've proudly delivered for clients worldwide.
          </p>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {[
            Project1, Project2, Project3, Project4, Project5,
            Project6, Project7, Project8, Project9, Project10,
          ].map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="h-56 sm:h-64 md:h-72 w-full relative">
                  <img
                    src={project}
                    alt={"Project " + (index + 1)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2"></h3>
                  <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base"></p>
                  <Link to="/show">
                    <div className="text-red-600 hover:underline font-semibold text-sm sm:text-base">
                      View Project →
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
