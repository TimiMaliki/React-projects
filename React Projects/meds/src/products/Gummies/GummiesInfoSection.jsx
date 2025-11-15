import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import gummiesImg from "../../Images/gummies.jpeg"; 
import gummiesImgLight from "../../Images/gummies-removebg-preview.png"; 


const GummiesInfoSection = () => {
     const { isLight, videoTheme, videoUi, videoBg } =
    useContext(ToggleThemeContext);

  const videoStyle = isLight ? videoBg : videoUi;
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-left" style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}>
        <div>
          <h5 className="font-bold text-lg mb-2">Discreet Potency, On-the-Go:</h5>
          <p className="text-md mb-4">
            Enjoy getting stoned on the low—our convenient formula means you can
            forget about the smell and get perfectly "faded on the go," anytime,
            anywhere.
          </p>

          <h5 className="font-bold text-lg mb-2">Impeccable Flavor & Digestion:</h5>
          <p className="text-md">
            Hand-crafted using natural ingredients, our gummies deliver
            impeccable flavor that is easy on the palate and formulated for
            efficient, comfortable digestion.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={isLight ?gummiesImg : gummiesImgLight}
            alt="Gummies Jar"
            className="w-64 h-64 object-contain"
          />
        </div>

        <div>
          <h5 className="font-bold text-lg mb-2">Custom-Engineered High:</h5>
          <p className="text-md mb-4">
            Infused with a proprietary flavorless THC, these gummies are
            custom-made to get you baked without the unwanted cannabis taste,
            ensuring an enjoyable experience from start to finish.
          </p>

          <h5 className="font-bold text-lg mb-2">Find Your Perfect Dose:</h5>
          <p className="text-md">
            Whether you need half a serving to get your mind right, a full one
            to mellow you out, or two or more to truly put you on your ass, we
            offer custom potency you can count on.
          </p>
        </div>
      </div>
  )
}

export default GummiesInfoSection