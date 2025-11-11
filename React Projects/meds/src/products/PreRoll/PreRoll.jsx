import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import roll from "../../Images/roll.jpeg";

const prerollFlavors = [
  {
    name: "WATERMELON",
    type: "Hybrid",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32c2a7effe33246db9eed_CA-PR-INFUSED-WATERMELON.webp",
    link: "/ca-pre-rolls-infused/watermelon",
  },
  {
    name: "VANILLA COOKIES",
    type: "Indica",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32c1d9bd4e56879522940_CA-PR-INFUSED-VANILLACOOKIES.webp",
    link: "/ca-pre-rolls-infused/vanilla-cookies",
  },
  {
    name: "THIN MINTS",
    type: "Indica",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32bfea84a7e56f51c2cf9_CA-PR-INFUSED-THINMINTSOG.webp",
    link: "/ca-pre-rolls-infused/thin-mints",
  },
  {
    name: "STRAWBERRY DREAM",
    type: "Indica",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32ca0ef07c53d2e75b656_CA-PR-INFUSED-STRAWBERRYDREAM.webp",
    link: "/ca-pre-rolls-infused/strawbery-dream",
  },
  {
    name: "PINA COLADA",
    type: "Hybrid",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32bb1aca239f0eb75a806_CA-PR-INFUSED-PINACOLADA.webp",
    link: "/ca-pre-rolls-infused/pina-colada",
  },
  {
    name: "ORANGE CAKE",
    type: "Hybrid",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32ba8ba4ee29c2eecc0c1_CA-PR-INFUSED-ORANGECAKE.webp",
    link: "/ca-pre-rolls-infused/orange-cake",
  },
  {
    name: "PURPLE PUNCH",
    type: "Sativa",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32b9f3f046c2fef51c668_CA-PR-INFUSED-PUERPLEPUNCH.webp",
    link: "/ca-pre-rolls-infused/purple-punch-2",
  },
  {
    name: "MANGO PEACH RINGS",
    type: "Hybrid",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32b97c795495cbae7e776_CA-PR-INFUSED-MANGOPEACHRINGS.webp",
    link: "/ca-pre-rolls-infused/mango-peach-rings",
  },
  {
    name: "BLUEBERRY ZAZA",
    type: "Sativa",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32b8f1471bde84a481356_CA-PR-INFUSED-BLUEBERRYZAZA.webp",
    link: "/ca-pre-rolls-infused/blueberry-zaza",
  },
  {
    name: "APPLE TART",
    type: "Hybrid",
    img: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e32b87cf184b318ba53425_CA-PR-INFUSED-APPLETART.webp",
    link: "/ca-pre-rolls-infused/apple-tart",
  },
];

const PreRollsSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
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

      {/* Overlay */}
      <div className="relative z-10 container mx-auto py-28 px-6 text-center text-white">
        <h1 className="text-6xl font-extrabold mb-10 drop-shadow-md">
          PRE ROLLS
        </h1>

        {/* Swiper for Flavors */}
        <Swiper spaceBetween={16} slidesPerView={"auto"} freeMode={true}>
          {prerollFlavors.map((flavor, i) => (
            <SwiperSlide
              key={i}
              style={{ width: "240px", height: "320px" }}
              className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <a
                href={flavor.link}
                className="block group relative w-full h-full"
              >
                <img
                  src={flavor.img}
                  alt={flavor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 bg-black/60 p-3 w-full">
                  <h5 className="text-lg font-semibold">{flavor.name}</h5>
                  <h6 className="text-amber-400">{flavor.type}</h6>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Text Info Blocks */}
        <div className="grid md:grid-cols-3 gap-10 mt-20 text-left max-w-5xl mx-auto">
          <div>
            <h5 className="text-xl font-bold mb-2">
              Potency Redefined with{" "}
              <span className="text-amber-400">Muha Sauce</span>
            </h5>
            <p className="text-gray-200">
              Each pre-roll is infused with our proprietary Muha Sauce Diamonds
              to deliver 40%+ THC potency and a uniquely powerful experience.
            </p>

            <h5 className="text-xl font-bold mt-6 mb-2">
              Guaranteed Long-Lasting High
            </h5>
            <p className="text-gray-200">
              Designed for the ultimate session, combining flower, Muha Sauce
              Diamonds, and kief for a smooth and long-lasting high.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={roll}
              alt="Cart Illustration"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div>
            <h5 className="text-xl font-bold mb-2 text-amber-400">
              Premium, Flavorful Flower
            </h5>
            <p className="text-gray-200">
              Only the finest indoor-grown flower, expertly packed and finished
              with kief to ensure a smooth inhale, flavorful exhale, and clean
              burn.
            </p>

            <h5 className="text-xl font-bold mt-6 mb-2 text-amber-400">
              Complex Flavor Profiles
            </h5>
            <p className="text-gray-200">
              Experience more than just potency—each strain delivers a distinct
              and delicious flavor profile for a truly premium smoke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreRollsSection;
