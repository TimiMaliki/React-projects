import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    name: "All-In-One",
    description:
      "Unmatched quality meets ultimate ease in Muha Meds’ Gen3 disposable line.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff44336a88b58ceeb71bb_Group-dospo-v3.webp",
    link: "/all-in-one",
  },
  {
    name: "Cartridges",
    description:
      "Muha Meds cartridges deliver premium potency and flavor with full-spectrum Melted Diamonds or terpene-rich Distillate.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff1bfb70c9142d74fecb2_carts-v3-group2.webp",
    link: "/cartridges",
  },
  {
    name: "Flower",
    description:
      "Experience high-potency indoor flower, meticulously grown for density and quality.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff52e069179621fedf2e9_flower-v3-group.webp",
    link: "/flower",
  },
  {
   name: "CONCENTRATES",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff5622227a30a872a4503_conc-v3-group.webp",
       link: "/concentrates",
  },
  {
   name: "GUMMIES",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff5b1f1d4ebb37b6a7c6c_gummies-v3-group.webp",
       link: "/gummies",
  },{
   name: "PRE-ROLLS",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff61556186c9e7df03842_infused-v3-group.webp",
        link: "/infused",
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("All-In-One");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const activeCategory = categories.find((cat) => cat.name === activeTab);

  return (
    <div className="relative text-white">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.mp4"
      ></video>

      <div className="relative z-10 px-6 py-20 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-10"
          data-aos="fade-down"
        >
          OUR PRODUCTS
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat.name
                  ? "bg-white text-black"
                  : "bg-transparent border border-white hover:bg-white hover:text-black"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {activeCategory && (
          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <img
              src={activeCategory.image}
              alt={activeCategory.name}
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 text-left">
              <h2 className="text-2xl font-bold mb-4">
                {activeCategory.name}
              </h2>
              <p className="mb-6 text-gray-200">
                {activeCategory.description}
              </p>
              <a
                href={activeCategory.link}
                className="inline-block px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200"
              >
                EXPLORE
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
