import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const flavors = [
  {
    name: "Strawberry Mimosa",
    type: "Sativa",
    link: "/ca-flower/strawberry-mimosa",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e3269cbb5ae9bb2467ce3d_CA-FLOWER-STRAWBERRYMIMOSA.webp",
  },
  {
    name: "Muha Mints",
    type: "Indica",
    link: "/ca-flower/muha-mints",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e326a35b42befd11b15d92_CA-FLOWER-MUHAMINTS.webp",
  },
  {
    name: "Morning Glory",
    type: "Sativa",
    link: "/ca-flower/morning-glory",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e326ab3eeadc2e7a67406d_CA-FLOWER-MORNINGGLORY.webp",
  },
  {
    name: "Frosted Cherries",
    type: "Hybrid",
    link: "/ca-flower/frosted-cherries",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e326b67782e21e4db00726_CA-FLOWER-FROSTEDCHERRIES.webp",
  },
  {
    name: "Adios MF",
    type: "Indica",
    link: "/ca-flower/adios-mf",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e326bd78675ff962540fa3_CA-FLOWER-ADIOSMF.webp",
  },
  {
    name: "Black Truffle",
    type: "Hybrid",
    link: "/ca-flower/black-truffle",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e326c7326bab35805480e4_CA-FLOWER-BLACKTRUFFLE.webp",
  },
  {
    name: "Bacio Gelato",
    type: "Hybrid",
    link: "/ca-flower/bacio-gelato",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e326ce8a243929a9a0b270_CA-FLOWER-BACIOGELATO.webp",
  },
  {
    name: "Brain Freeze",
    type: "Indica",
    link: "/ca-flower/brain-freeze",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32691cdca16a714d21717_CA-FLOWER-BRAINFREEZE.webp",
  },
];

const FlowerSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-poster-00001.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.webm"
          type="video/webm"
        />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto py-24">
        <h1 className="text-6xl font-bold text-white mb-6">FLOWER</h1>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true}
        >
          {flavors.map((flavor, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "400px" , height:"400px" }}
              className="bg-white/10 rounded-lg overflow-hidden"
            >
              <a href={flavor.link} className="block relative group">
                <img
                  src={flavor.img}
                  alt={flavor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4 bg-black/40 absolute bottom-0 w-full">
                  <h5 className="text-white font-semibold">{flavor.name}</h5>
                  <h6 className="text-yellow-400">{flavor.type}</h6>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FlowerSection;
