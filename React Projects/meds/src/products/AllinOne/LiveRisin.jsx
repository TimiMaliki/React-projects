import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {liveflavors} from "../../constant/index";

const LiveResinSection = () => {
  const { isLight,  videoTheme, videoUi , videoBg } = useContext(ToggleThemeContext);
 
 
   const videoStyle = isLight ? videoBg : videoUi
 
 
   const videoSrc = isLight ? videoTheme.sourceOne : videoTheme.sourceTwo;

  return (
    <section className="relative py-16 overflow-hidden" style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}>
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

      {/* Title */}
      <div className="text-center mb-12 relative z-10" style={{
        color: videoStyle.ui,
      }}>
        <h1 className="text-4xl md:text-6xl font-bold  tracking-widest drop-shadow-lg" >
          LIVE RESIN
        </h1>
        <div className="mt-2 h-1 w-24 mx-auto bg-yellow-400 rounded-full"></div>
      </div>

      {/* Swiper Slider */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {liveflavors.map((item, i) => (
            <SwiperSlide key={i}>
              <a
                href={item.link}
                className="block bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 backdrop-blur-sm border border-slate-400"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-105 transition duration-500"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-md text-yellow-800">{item.type}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LiveResinSection;
