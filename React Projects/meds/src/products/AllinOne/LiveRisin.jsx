import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LiveResinSection = () => {
  const flavors = [
    {
      name: "OG Kush",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e3371e446f6d6e98780fc4_CA-AIO-LR-OGKush-2.webp",
      link: "/ca-aio-live-resin/og-kush",
    },
    {
      name: "Lemon Kush Mintz",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e337289caeb5a75144864a_CA-AIO-LR-LemonKushMintz-2.webp",
      link: "/ca-aio-live-resin/lemon-kush-mintz",
    },
    {
      name: "Juice Man",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e3372fe35ba8004848473d_CA-AIO-LR-JuiceMan-2.webp",
      link: "/ca-aio-live-resin/juice-man",
    },
    {
      name: "Grape Dosi",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e33738eef8f07f0bddf087_CA-AIO-LR-DosiGrape-2.webp",
      link: "/ca-aio-live-resin/grape-dosi",
    },
    {
      name: "Golden Papaya",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e337416249a02ebde9458c_CA-AIO-LR-GoldenPapaya-2.webp",
      link: "/ca-aio-live-resin/golden-papaya",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
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
          <source src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.mp4" />
          <source src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.webm" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest drop-shadow-lg">
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
          {flavors.map((item, i) => (
            <SwiperSlide key={i}>
              <a
                href={item.link}
                className="block bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center text-white">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-yellow-400">{item.type}</p>
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
