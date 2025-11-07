
import { useContext } from "react";

import { ToggleThemeContext } from "../context/ToggleThemeContext";
const Memebers = () => {
      const { isLight, dark, light } = useContext(ToggleThemeContext);
      const themeStyle = isLight ? light : dark;
  return (
    <>
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6" style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>
     
      <div className="flex justify-center mb-10">
        <img
          src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68e8141cf221cee8cd6b633b_MMemebers-logo.png"
          alt="Muha Members Logo"
          className="w-[300px] md:w-[450px] lg:w-[600px] object-contain"
        />
      </div>

     
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          MUHA MEMBERS
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold leading-snug">
          PRODUCT VERIFICATION TECHNOLOGY <br />
          AND REWARDS APP
        </h2>
      </div>

      
      <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
        <a
          href="https://apps.apple.com/us/app/muha-members/id6743873537"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68e815501b9914e72a9cdd6e_apple-store-icon.png"
            alt="Download on the App Store"
            className="w-40 md:w-48 object-contain"
          />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.basitaziz.ProductVerificationApp&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68e82b76a4dbf91ce9947d8c_google-store-icon2.png"
            alt="Get it on Google Play"
            className="w-40 md:w-48 object-contain"
          />
        </a>
      </div>
    </section>

     <section className="w-full flex justify-center items-center py-10" style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>
      <div className="max-w-[1054px] w-full flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68f594d2a0a7be3d6057a657_Color%3DDeep%20Blue.png"
          alt="App Display"
          loading="lazy"
          className="w-full h-auto object-contain"
          srcSet="
            https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68f594d2a0a7be3d6057a657_Color%3DDeep%20Blue-p-500.png 500w,
            https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68f594d2a0a7be3d6057a657_Color%3DDeep%20Blue-p-800.png 800w,
            https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68f594d2a0a7be3d6057a657_Color%3DDeep%20Blue.png 1054w
          "
          sizes="(max-width: 1054px) 100vw, 1054px"
        />
      </div>
    </section>
    </>
   
  )
}

export default Memebers