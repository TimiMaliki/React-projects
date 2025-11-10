import { flavors } from "../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MeltedDiamonds = () => {

  return (
    <section className="relative py-16 overflow-hidden text-center">
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
          <source src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Section Title */}
      <div className="relative z-10 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest drop-shadow-lg">
          Melted Diamonds
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Swiper Slider */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.3}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
          }}
          grabCursor={true}
          freeMode={true}
        >
          {flavors.map((item, index) => (
            <SwiperSlide key={index}>
              <a
                href={item.link}
                className="group relative block overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 border border-white/20"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-t-2xl transform group-hover:scale-105 transition duration-500"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-amber-400 font-medium">{item.type}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MeltedDiamonds;
