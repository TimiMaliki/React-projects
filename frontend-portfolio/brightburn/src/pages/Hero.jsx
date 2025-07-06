import computer from "../images/Hero/web3.jpg";
import Dark from "../images/Hero/dark.jpg";
import website from "../images/Hero/homepage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
      className="mySwiper overflow-x-hidden"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <section className="relative w-full h-screen bg-light overflow-x-hidden" id="home">
          <img
            src={website}
            alt="Web Design"
            className="w-full h-full object-cover bg-cover rounded-3xl rounded-t-none"
          />
          <div className="absolute bottom-6 left-3 right-3 md:left-6 md:right-6 lg:left-10 lg:right-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 text-black">
                Websites That <span className="text-red-700">Wow</span> Your Audience
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-6 text-black">
                From sleek single-page sites to full-featured eCommerce platforms — we build websites that look great, load fast, and grow your business.
              </p>
              <a
                href="https://wa.me/qr/RJYG6ACYJUUGB1"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-md inline-block"
              >
                Get Your Website Now
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <section className="relative w-full h-screen bg-light">
          <img
            src={computer}
            alt="Web Design"
            className="w-full h-full object-cover rounded-3xl rounded-t-none"
          />
          <div className="absolute bottom-6 left-3 right-3 md:left-6 md:right-6 lg:left-10 lg:right-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 text-black">
                Powering the <span className="text-red-700">Future</span> of Web3 & Crypto
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-6 text-black">
                From decentralized apps (dApps) to NFT marketplaces and crypto payment sites — we craft secure, fast, and futuristic platforms for the blockchain era.
              </p>
              <a
                href="https://wa.me/qr/RJYG6ACYJUUGB1"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-md inline-block"
              >
                Get Your Website Now
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <section className="relative w-full h-screen bg-light">
          <img
            src={Dark}
            alt="Web Design"
            className="w-full h-full object-cover rounded-3xl rounded-t-none"
          />
          <div className="absolute bottom-6 left-3 right-3 md:left-6 md:right-6 lg:left-10 lg:right-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 text-black">
                Exceptional <span className="text-red-700">Quality</span> & Seamless <span className="text-red-700">Experience</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-6 text-black">
                We create stunning, high-performing websites that deliver smooth navigation, fast loading, and an unbeatable user experience—every time.
              </p>
              <a
                href="https://wa.me/qr/RJYG6ACYJUUGB1"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-md inline-block"
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
