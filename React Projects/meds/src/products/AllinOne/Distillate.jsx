import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DistillateSection = () => {
  const flavors = [
    {
      name: "Strawberry Runts",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d621325eae3ce4cfdc5908_CA-AIO-DIST-STRAWBERRYRUNTZ-2.webp",
      link: "/ca-all-in-one-distillate/strawberry-runts",
    },
    {
      name: "Tahoe OG",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d62124b560c680ec5ef733_CA-AIO-DIST-TAHOEOG-2.webp",
      link: "/ca-all-in-one-distillate/tahoe-og",
    },
    {
      name: "Magic Melon OG",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d62164b51b7c54bf6b0160_CA-AIO-DIST-MAGICMELONOG-2.webp",
      link: "/ca-all-in-one-distillate/magic-melon-og",
    },
    {
      name: "Sour Watermelon Squirt",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d621070e764c60137efcd6_CA-AIO-DIST-WATERMELONSQUIRT-2.webp",
      link: "/ca-all-in-one-distillate/sour-watermelon-squirt",
    },
    {
      name: "Pineapple Express",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620fb54784cc536a1cf92_CA-AIO-DIST-PINEAPPLEEXPRESS-2.webp",
      link: "/ca-all-in-one-distillate/pineapple-express",
    },
    {
      name: "Galactic Diesel",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620e4a13168375b7a2536_CA-AIO-DIST-GALACTICDIESEL-2.webp",
      link: "/ca-all-in-one-distillate/galactic-diesel",
    },
    {
      name: "Frozen Pomegranate",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620da5c66e46bccfea3f2_CA-AIO-DIST-FROZENPOMEGRANATE-2.webp",
      link: "/ca-all-in-one-distillate/frozen-pomegranate",
    },
    {
      name: "Bubblegum Burst",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620cddbe42077eea15f79_CA-AIO-DIST-BUBBLEGUMBURST-2.webp",
      link: "/ca-all-in-one-distillate/bubblegum-burst",
    },
    {
      name: "Blueberry Cookies",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620bfc8d1748a98c15696_CA-AIO-DIST-BLUEBERRYCOOKIES-2.webp",
      link: "/ca-all-in-one-distillate/blueberry-cookies",
    },
    {
      name: "Blue Slushie",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620b18e62c1c20faee51c_CA-AIO-DIST-BLUESLUSHIE-2.webp",
      link: "/ca-all-in-one-distillate/blue-slushie",
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
          DISTILLATE
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

export default DistillateSection;
