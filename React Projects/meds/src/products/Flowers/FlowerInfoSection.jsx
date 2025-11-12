import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import flower from "../../Images/flower.jpeg";
import flowerLight from "../../Images/flower-removebg-preview.png";

const FlowerInfoSection = () => {
       const { isLight, videoTheme, videoUi, videoBg } =
          useContext(ToggleThemeContext);
      
        const videoStyle = isLight ? videoBg : videoUi;
      
  return (
      <div className="grid md:grid-cols-3 gap-8 mt-16 text-left text-white"style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}>
          <div className="device-spec-info">
            <h5 className="text-xl font-bold mb-2">
              Unparalleled Indoor Quality:
            </h5>
            <p className="text-sm">
              Experience the finest cannabis, grown in carefully controlled
              environments to ensure optimal conditions for vibrant appearance,
              dense structure, and exceptional quality in every bud.
            </p>
          </div>
           <div className="flex items-center justify-center">
                    <img
                      src={isLight ? flower : flowerLight}
                      alt="Cart Illustration"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
          <div className="device-spec-info">
            <h5 className="text-xl font-bold mb-2">
              Crafted for the Connoisseur:
            </h5>
            <p className="text-sm">
              Whether you seek deep relaxation, sharp focus, or a burst of
              creative energy, our premium flower offers a smooth, flavorful
              experience tailored to any desired effect.
            </p>
          </div>
        </div>
  )
}

export default FlowerInfoSection