import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { concentrateData } from "../../constant"; 
import ConcentrateInfoSection from "./ConcentrateInfoSection";

const FlavorSlider = ({ flavors }) => (
  <Swiper
    spaceBetween={16}
    slidesPerView={1.3}
    breakpoints={{
      640: { slidesPerView: 2.2 },
      1024: { slidesPerView: 3.5 },
    }}
    grabCursor
    freeMode
  >
    {flavors &&
      flavors.map((item) => (
        <SwiperSlide key={item.id}>
          <a
            href={item.link}
            className="group relative block overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 border border-slate-400"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 p-4 w-full">
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-yellow-800 font-medium">{item.type}</p>
            </div>
          </a>
        </SwiperSlide>
      ))}
  </Swiper>
);

const ConcentrateSection = () => {
  const { isLight, videoTheme, videoUi, videoBg } =
    useContext(ToggleThemeContext);

  const videoStyle = isLight ? videoBg : videoUi;
  const videoSrc = isLight ? videoTheme.sourceOne : videoTheme.sourceTwo;

  // Filter concentrates by type
  const hashRosinFlavors = concentrateData.filter(item => item.id <= 8);
  const piatellaFlavors = concentrateData.filter(item => item.id >= 9);

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}
    >
      {/* Title */}
      <div className="relative z-10 py-14 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-wide text-white uppercase drop-shadow-lg"
          style={{
            color: videoStyle.ui,
          }}
        >
          OUR CONCENTRATES
        </h1>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-poster-00001.jpg"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hash Rosin Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6">HASH ROSIN</h2>
        <FlavorSlider flavors={hashRosinFlavors} />
      </div>

      {/* Piatella Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6">PIATELLA</h2>
        <FlavorSlider flavors={piatellaFlavors} />
      </div>

      {/* Info Section */}
      <ConcentrateInfoSection/>
    </section>
  );
};

export default ConcentrateSection;