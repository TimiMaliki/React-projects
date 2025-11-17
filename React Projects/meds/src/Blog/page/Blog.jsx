import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { pressItems } from "../Constant/BlogConstant";

const PressGrid = () => {
      const { isLight, dark, light } = useContext(ToggleThemeContext);
      const themeStyle = isLight ? light : dark;

 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full py-24 p-10"   style={{
          background: themeStyle.bg,
          color: themeStyle.hex,
        }}>
      {pressItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group rounded-3xl overflow-hidden 
            bg-white/5 border border-white/10 
            backdrop-blur-xl shadow-lg 
            hover:shadow-2xl 
            transition-all duration-500 block
          "
        >
          {/* Image */}
          <div className="relative overflow-hidden h-52">
            <img
              src={item.image}
              alt={item.alt}
              className="
                w-full h-full object-cover 
                transition-transform duration-700 
                group-hover:scale-110
              "
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x200/1a1a1a/ffffff?text=Press+Image";
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold text-yellow-400 tracking-wide">
                {item.author}
              </span>
              <span className="text-md">{item.date}</span>
            </div>

            <h3
              className="
                text-lg font-bold 
                leading-snug 
                transition-colors duration-300
              "
            >
              {item.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PressGrid;