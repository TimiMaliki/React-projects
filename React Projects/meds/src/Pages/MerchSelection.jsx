import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { Link } from "react-router-dom";


const MerchSection = () => {
     const { isLight, dark, light } = useContext(ToggleThemeContext);
          const themeStyle = isLight ? light : dark;
  return (
    <section className="py-12" style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>
      <div className="flex flex-wrap">
        {/* MUHA MEDS MERCH */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MUHA MEDS MERCH SHOP NOW - open in a new tab"
          className="relative group w-full md:w-1/2 h-80 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500"
        >
          <div className={`absolute inset-0 muhameds-img bg-cover bg-center opacity-90 group-hover:opacity-50 transition-all duration-500`}></div>

          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
              MUHA&nbsp;MEDS&nbsp;MERCH
            </h1>
             <Link to="/coming-soon">
            <div className="inline-block px-6 py-2 border border-white rounded-full text-sm uppercase font-semibold tracking-wide transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
              Shop Now
            </div>
            </Link>
          </div>

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
        </a>

        {/* MUHA HEMP */}
       
        <a
          href="/comming-soon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MUHA HEMP SHOP NOW - open in a new tab"
          className="relative group w-full md:w-1/2 h-80 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500"
        >
          <div className={`absolute inset-0 muhaherb-img bg-cover bg-center opacity-90 group-hover:opacity-50 transition-all duration-500`}></div>

          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
              MUHA&nbsp;HEMP
            </h1>
             <Link to="/coming-soon">
            <div className="inline-block px-6 py-2 border border-white rounded-full text-sm uppercase font-semibold tracking-wide transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
              Shop Now
            </div>
              </Link>
          </div>

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
        </a>
      
      </div>
    </section>
  );
};

export default MerchSection;
