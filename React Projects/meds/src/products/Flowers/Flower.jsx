import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Flowerflavors } from "../../constant";
import flower from "../../Images/flower.jpeg";


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
      <div className="relative z-10 container mx-auto py-32">
        <h1 className="text-6xl font-bold text-white mb-6">FLOWER</h1>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true}
        >
          {Flowerflavors.map((flavor, index) => (
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
         {/* Device Specs Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left text-white">
          <div className="device-spec-info">
            <h5 className="text-xl font-bold mb-2">
              Unparalleled Indoor Quality:
            </h5>
            <p className="text-sm">
              Experience the finest cannabis, grown in carefully controlled
              environments to ensure optimal conditions for vibrant appearance,
              dense structure, and exceptional quality in every bud.
            </p>
          </div>
           <div className="flex items-center justify-center">
                    <img
                      src={flower}
                      alt="Cart Illustration"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
          <div className="device-spec-info">
            <h5 className="text-xl font-bold mb-2">
              Crafted for the Connoisseur:
            </h5>
            <p className="text-sm">
              Whether you seek deep relaxation, sharp focus, or a burst of
              creative energy, our premium flower offers a smooth, flavorful
              experience tailored to any desired effect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowerSection;
