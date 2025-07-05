import computer from "../images/Hero/web3.jpg";
import Dark from "../images/Hero/dark.jpg";
import website from "../images/Hero/homepage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <section className="relative w-full h-screen bg-light">
          {/* Background Image */}
          <img
            src={website}
            alt="Web Design"
            className="w-full h-full object-cover bg-cover rounded-3xl rounded-t-none"
          />

          {/* Content */}
          <div className="absolute bottom-10 left-4 right-4 md:left-8 md:right-8 lg:left-10 lg:right-auto">
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg max-w-full md:max-w-xl lg:max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight mb-4 md:mb-6 text-black">
                Websites That <span className="text-red-700">Wow</span> Your
                Audience
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold mb-6 text-black">
                From sleek single-page sites to full-featured eCommerce
                platforms — we build websites that look great, load fast, and
                grow your business.
              </p>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-5 py-3 rounded-full font-semibold text-base md:text-lg shadow-md inline-block"
              >
                Get Your Website Now
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="relative w-full h-screen bg-light">
          {/* Background Image */}
          <img
            src={computer}
            alt="Web Design"
            className="w-full h-full object-cover rounded-3xl rounded-t-none"
          />

          {/* Content */}
          <div className="absolute bottom-10 left-4 right-4 md:left-8 md:right-8 lg:left-10 lg:right-auto">
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg max-w-full md:max-w-xl lg:max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight mb-4 md:mb-6 text-black">
                Powering the <span className="text-red-700">Future</span> of
                Web3 & Crypto
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold mb-6 text-black">
                From decentralized apps (dApps) to NFT marketplaces and crypto
                payment sites — we craft secure, fast, and futuristic platforms
                for the blockchain era.
              </p>

              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-5 py-3 rounded-full font-semibold text-base md:text-lg shadow-md inline-block"
              >
                Get Your Website Now
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="relative w-full h-screen bg-light">
          {/* Background Image */}
          <img
            src={Dark}
            alt="Web Design"
            className="w-full h-full object-cover rounded-3xl rounded-t-none"
          />

          {/* Content */}
          <div className="absolute bottom-10 left-4 right-4 md:left-8 md:right-8 lg:left-10 lg:right-auto">
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg max-w-full md:max-w-xl lg:max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight mb-4 md:mb-6 text-black">
                Exceptional <span className="text-red-700">Quality</span> &
                Seamless <span className="text-red-700">Experience</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold mb-6 text-black">
                We create stunning, high-performing websites that deliver smooth
                navigation, fast loading, and an unbeatable user
                experience—every time.
              </p>

              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-5 py-3 rounded-full font-semibold text-base md:text-lg shadow-md inline-block"
              >
                Get Your Website Now
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
