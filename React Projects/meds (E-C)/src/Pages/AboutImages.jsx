import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const AboutImages = () => {
  const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  const images = [
    {
      src: "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/66ce2e69051a8aa63db334e2_About-01-1080.png",
      alt: "About Image 1",
    },
    {
      src: "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/66ce2df084fb97170f0c99df_About-02-1080.png",
      alt: "About Image 2",
    },
    {
      src: "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/625450999d65fe4d368b1e56_MM-About-XL.png",
      alt: "About Image 3",
    },
    {
      src: "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/690b0958d02e452c2cee476c_aboutus-v2-2.webp",
      alt: "About Image 4",
    },
    {
      src: "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/690b0945f9a95047b4d3b34b_aboutus-v2-1.webp",
      alt: "About Image 5",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 py-28  px-6 md:px-16  transition-colors duration-500"
      style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default AboutImages;
