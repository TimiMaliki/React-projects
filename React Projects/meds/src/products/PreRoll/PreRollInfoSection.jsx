import roll from "../../Images/roll.jpeg";
import rollLight from "../../Images/roll-removebg-preview.png";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";

const PreRollInfoSection = () => {
     const { isLight, videoTheme, videoUi, videoBg } =
       useContext(ToggleThemeContext);
      const videoStyle = isLight ? videoBg : videoUi;
  return (
   <div className="grid md:grid-cols-3 gap-10 mt-20 text-left max-w-5xl mx-auto px-4 text-left" style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}>
          <div>
            <h5 className="font-bold text-lg mb-2">
              Potency Redefined with{" "}
              <span className="">Muha Sauce</span>
            </h5>
            <p className="text-md">
              Each pre-roll is infused with our proprietary Muha Sauce Diamonds
              to deliver 40%+ THC potency and a uniquely powerful experience.
            </p>

            <h5 className="text-lg font-bold mt-6 mb-2">
              Guaranteed Long-Lasting High
            </h5>
            <p className="text-md">
              Designed for the ultimate session, combining flower, Muha Sauce
              Diamonds, and kief for a smooth and long-lasting high.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={isLight ? roll : rollLight}
              alt="Cart Illustration"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2 ">
              Premium, Flavorful Flower
            </h5>
            <p className="text-md">
              Only the finest indoor-grown flower, expertly packed and finished
              with kief to ensure a smooth inhale, flavorful exhale, and clean
              burn.
            </p>

            <h5 className="text-lg font-bold mt-6 mb-2 ">
              Complex Flavor Profiles
            </h5>
            <p className="text-md">
              Experience more than just potency—each strain delivers a distinct
              and delicious flavor profile for a truly premium smoke.
            </p>
          </div>
        </div>
  )
}

export default PreRollInfoSection