import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const AboutSectionText = () => {
      const { isLight, dark, light } = useContext(ToggleThemeContext);
      const themeStyle = isLight ? light : dark;
  return (
    <section className="py-16 px-6 md:px-20 transition-colors duration-500" style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>
      <div className="text-center mb-10">
        <p className="tracking-widest uppercase font-semibold text-sm md:text-lg">
          ABOUT US
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold  mt-2">
          MUHA&nbsp;MEDS
        </h1>
      </div>


      <div className="max-w-4xl mx-auto text-center">
        <p className="leading-relaxed text-base md:text-lg">
          Founded in 2018, in the heart of Los Angeles, Muha Meds is the
          pinnacle of what cannabis vaping is meant to be. Offering a superb,
          ethically operated, and transparent line of cannabis products, we
          continue to set the new industry standard for the cannabis vape
          industry and provide innovative technology to the cannabis consumer
          with the most premium quality cannabis oil, flavor, and portability.
        </p>

        <p className="leading-relaxed text-base md:text-lg mt-6">
          Muha Meds is a spiritual wellness movement focused on providing those
          in need with alternative MEDs and enhancing quality of life. Our five
          pillars at Muha Meds are:{" "}
          <span className="font-semibold ">
            Education, Transparency, Research, Innovation, and Goodwill.
          </span>
        </p>
      </div>
    </section>
  );
}

export default AboutSectionText