import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { CartContext } from "../../context/CartContext";
import { prerollFlavors } from "../../constant";
import PreRollInfoSection from "./PreRollInfoSection";

const FlavorSlider = ({ flavors }) => {
  const { addOneToCart } = useContext(CartContext);

  return (
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
            <div className="group relative block overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 border border-slate-400">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.src = "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Product+Image";
                }}
              />
              <div className="absolute bottom-0 p-4 w-full">
                <h3 className="text-lg font-semibold mb-1 text-white">{item.name}</h3>
                <p className="text-yellow-400 font-medium mb-2">{item.type}</p>
                {item.price && (
                  <p className="text-green-400 font-bold text-lg mb-2">
                    {item.price}
                  </p>
                )}
                <button 
                  onClick={() => addOneToCart(item)}
                  className="w-full bg-yellow-600 text-white text-sm px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-300 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

const PreRollsSection = () => {
  const { isLight, videoTheme, videoUi, videoBg } =
    useContext(ToggleThemeContext);

  const videoStyle = isLight ? videoBg : videoUi;
  const videoSrc = isLight ? videoTheme.sourceOne : videoTheme.sourceTwo;

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
          OUR INFUSED LINEUP
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

      {/* Pre-Rolls Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">INFUSED PRE-ROLLS</h2>
        <FlavorSlider flavors={prerollFlavors} />
      </div>

      {/* Info Section */}
      <PreRollInfoSection/>
    </section>
  );
};

export default PreRollsSection;