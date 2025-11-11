import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { cartridgeData } from "../../constant";
import pen from "../../Images/pen.jpeg";
import penLight from "../../Images/pen-removebg-preview.png";


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
    {flavors.map((item, index) => (
      <SwiperSlide key={index}>
        <a
          href={item.link}
          className="group relative block overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 border border-slate-400"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-105 transition duration-500"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
            <p className="text-yellow-800 font-medium">{item.type}</p>
          </div>
        </a>
      </SwiperSlide>
    ))}
  </Swiper>
);

const CartridgeSection = () => {
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
          OUR CARTRIDGE LINEUP
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

      {/* Melted Diamonds Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6">MELTED DIAMONDS</h2>
        <FlavorSlider flavors={cartridgeData.meltedDiamonds} />
      </div>

      {/* Distillate Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6">DISTILLATE</h2>
        <FlavorSlider flavors={cartridgeData.distillate} />
      </div>

      {/* Device Info Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-left">
        <div>
          <h5 className="font-bold mb-2">True-to-Strain Flavor & Purity:</h5>
          <p className="text-sm mb-4">
            Extracted in-house from flash-frozen cannabis, our Melted Diamonds
            preserve the full, authentic terpene profile of the fresh flower.
            Expect smooth, rich flavor that’s exactly what nature intended.
          </p>

          <h5 className="font-bold mb-2">Unbeatable Vaping Experience:</h5>
          <p className="text-sm">
            Designed for a consistently smooth and clean draw every time, our
            melted diamond oil provides a highly flavorful, controlled, and
            deeply satisfying session from start to finish.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={isLight ?pen : penLight}
            alt="Cart Illustration"
            className="w-64 h-64 object-contain"
          />
        </div>
        <div>
          <h5 className="font-bold mb-2">Full-Spectrum Cannabinoid Power:</h5>
          <p className="text-sm mb-4">
            Utilizing advanced, state-of-the-art techniques, we ensure the full
            spectrum of cannabinoids is preserved, delivering a potent and
            enjoyable entourage effect that you can feel.
          </p>

          <h5 className="font-bold mb-2">
            Universal 510-Thread Compatibility:
          </h5>
          <p className="text-sm">
            Ready to use right out of the box with your favorite gear. Our
            cartridges are built to seamlessly connect with any standard
            510-thread battery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartridgeSection;
