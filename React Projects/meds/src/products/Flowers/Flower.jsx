import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { CartContext } from "../../context/CartContext";
import { Flowerflavors } from "../../constant";
import FlowerInfoSection from "./FlowerInfoSection";

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
          <div className="
  group relative overflow-hidden rounded-2xl 
  bg-black/40 backdrop-blur-xl 
  border border-white/20 shadow-xl
  hover:shadow-2xl hover:bg-black/50 
  transition duration-300
">
  {/* Image */}
  <div className="relative w-full h-full">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-full object-cover rounded-t-2xl 
      transform group-hover:scale-105 transition duration-500"
      onError={(e) => {
        e.target.src =
          'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Product+Image';
      }}
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent"></div>
  </div>

  {/* Text Button */}
  <div className="p-4 space-y-1 absolute bottom-0 w-full">

    <h3 className="text-xl font-bold text-white drop-shadow">
      {item.name}
    </h3>

    <p className="text-yellow-300 font-semibold">
      {item.type}
    </p>

    {item.price && (
      <p className="text-green-300 font-extrabold text-lg drop-shadow">
        {item.price}
      </p>
    )}

    <button
      onClick={() => addOneToCart(item)}
      className="
        w-full py-2 mt-2 rounded-lg 
        bg-yellow-500 font-bold text-black
        hover:bg-yellow-600 
        transition duration-300 shadow-md
        cursor-pointer
      "
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

const FlowerSection = () => {
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
        OUR FLOWER
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

      {/* Flower Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">PREMIUM FLOWER</h2>
        <FlavorSlider flavors={Flowerflavors} />
      </div>

      {/* Info Section */}
      <FlowerInfoSection />
    </section>
  );
};

export default FlowerSection;