import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { gummiesData } from "../../constant"; 
import gummiesImg from "../../Images/gummies.jpeg"; // Replace with a relevant gummies image

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

const GummiesSection = () => {
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
          OUR GUMMIE LINEUP
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
          poster="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-poster-00001.jpg"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hash Rosin Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6">HASH ROSIN</h2>
        <FlavorSlider flavors={gummiesData} />
      </div>

      {/* Infused Slider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6">INFUSED</h2>
        <FlavorSlider flavors={gummiesData} />
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-left">
        <div>
          <h5 className="font-bold mb-2">Discreet Potency, On-the-Go:</h5>
          <p className="text-sm mb-4">
            Enjoy getting stoned on the low—our convenient formula means you can
            forget about the smell and get perfectly "faded on the go," anytime,
            anywhere.
          </p>

          <h5 className="font-bold mb-2">Impeccable Flavor & Digestion:</h5>
          <p className="text-sm">
            Hand-crafted using natural ingredients, our gummies deliver
            impeccable flavor that is easy on the palate and formulated for
            efficient, comfortable digestion.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={gummiesImg}
            alt="Gummies Jar"
            className="w-64 h-64 object-contain"
          />
        </div>

        <div>
          <h5 className="font-bold mb-2">Custom-Engineered High:</h5>
          <p className="text-sm mb-4">
            Infused with a proprietary flavorless THC, these gummies are
            custom-made to get you baked without the unwanted cannabis taste,
            ensuring an enjoyable experience from start to finish.
          </p>

          <h5 className="font-bold mb-2">Find Your Perfect Dose:</h5>
          <p className="text-sm">
            Whether you need half a serving to get your mind right, a full one
            to mellow you out, or two or more to truly put you on your ass, we
            offer custom potency you can count on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GummiesSection;
