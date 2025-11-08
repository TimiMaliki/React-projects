import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { categories } from "../constant";

const Products = () => {
  const [activeTab, setActiveTab] = useState("All-In-One");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const activeCategory = categories.find((cat) => cat.name === activeTab);

  return (
    <div className="relative text-white py-10">
    
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

       
        <div className="flex flex-wrap justify-center gap-3 mb-10 ">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all cursor-pointer ${
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
              <h2 className="text-2xl font-bold mb-4">{activeCategory.name}</h2>
              <p className="mb-6  text-lg">{activeCategory.description}</p>
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
