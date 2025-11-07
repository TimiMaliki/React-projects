import { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

// Light mode images
import introSliceOne from "../Images/v_1_-removebg-preview.png";
import introSliceTwo from "../Images/v_2_-removebg-preview.png";
import introSliceThree from "../Images/v__3_-removebg-preview.png";

// Dark mode images
import darkSliceMode from "../Images/darkmode1.jpeg";
import darkSliceModeTwo from "../Images/darkmode2.jpeg";
import darkSliceModeThree from "../Images/darkmode3.jpeg";


const IntroSlice = () => {
  const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 
  const slices = [
    {
      id: 1,
      img: isLight ?  darkSliceMode : introSliceOne ,
      title: "Next-Gen Design",
      desc: "Experience sleek performance and innovative style in every detail.",
      aos: "fade-right",
    },
    {
      id: 2,
      img: isLight ? darkSliceModeTwo : introSliceTwo ,
      title: "Built for Power",
      desc: "Crafted to deliver efficiency, durability, and premium experience.",
      aos: "fade-up",
    },
    {
      id: 3,
      img: isLight ? darkSliceModeThree : introSliceThree ,
      title: "All-in-One Device",
      desc: "Combining technology and elegance in one seamless form.",
      aos: "fade-left",
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center overflow-hidden transition-all duration-500"
      style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}
    >
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Discover the Evolution
        </h2>
        <p className="mt-3 text-base sm:text-lg opacity-80">
          The next step in premium all-in-one innovation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
        {slices.map((slice) => (
          <div
            key={slice.id}
            className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-6 flex flex-col items-center justify-center text-center"
            data-aos={slice.aos}
            style={{
              background: themeStyle.cardBg || themeStyle.bg,
              color: themeStyle.hex,
            }}
          >
            <div className="w-full h-72 flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={slice.img}
                alt={slice.title}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
              {slice.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base max-w-xs mx-auto opacity-80">
              {slice.desc}
            </p>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default IntroSlice;
