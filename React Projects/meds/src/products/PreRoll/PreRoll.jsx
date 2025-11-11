import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import roll from "../../Images/roll.jpeg";
import rollLight from "../../Images/roll-removebg-preview.png";
import { prerollFlavors } from "../../constant";

const PreRollsSection = () => {
  const { isLight, videoTheme, videoUi, videoBg } =
    useContext(ToggleThemeContext);

  const videoStyle = isLight ? videoBg : videoUi;

  const videoSrc = isLight ? videoTheme.sourceOne : videoTheme.sourceTwo;

  return (
    <section className="relative w-full min-h-screen overflow-hidden"  style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}>
      <div className="relative z-10 py-32 text-center">
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

      {/* Overlay */}
      <div className="relative z-10 container mx-auto py-28 px-6 text-center text-white" style={{
            color: videoStyle.ui,
          }}>
        <h1 className="text-6xl font-extrabold mb-10 drop-shadow-md">
          PRE ROLLS
        </h1>

        {/* Swiper for Flavors */}
        <Swiper spaceBetween={16} slidesPerView={"auto"} freeMode={true}>
          {prerollFlavors.map((flavor, i) => (
            <SwiperSlide
              key={i}
              style={{ width: "240px", height: "320px" }}
              className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-slate-400"
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
                <div className="absolute bottom-0 bg-black/0 p-0 w-full">
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
              <span className="">Muha Sauce</span>
            </h5>
            <p className="">
              Each pre-roll is infused with our proprietary Muha Sauce Diamonds
              to deliver 40%+ THC potency and a uniquely powerful experience.
            </p>

            <h5 className="text-xl font-bold mt-6 mb-2">
              Guaranteed Long-Lasting High
            </h5>
            <p className="">
              Designed for the ultimate session, combining flower, Muha Sauce
              Diamonds, and kief for a smooth and long-lasting high.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={isLight ? roll : rollLight}
              alt="Cart Illustration"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div>
            <h5 className="text-xl font-bold mb-2 ">
              Premium, Flavorful Flower
            </h5>
            <p className="">
              Only the finest indoor-grown flower, expertly packed and finished
              with kief to ensure a smooth inhale, flavorful exhale, and clean
              burn.
            </p>

            <h5 className="text-xl font-bold mt-6 mb-2 ">
              Complex Flavor Profiles
            </h5>
            <p className="">
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
