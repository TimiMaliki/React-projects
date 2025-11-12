import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import pen from "../../Images/pen.jpeg";
import penLight from "../../Images/pen-removebg-preview.png";

const CartridgesInfoSection = () => {
     const { isLight, videoTheme, videoUi, videoBg } =
        useContext(ToggleThemeContext);
    
      const videoStyle = isLight ? videoBg : videoUi;
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-left" style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}>
        <div>
          <h5 className="font-bold mb-2">True-to-Strain Flavor & Purity:</h5>
          <p className="text-sm mb-4">
            Extracted in-house from flash-frozen cannabis, our Melted Diamonds
            preserve the full, authentic terpene profile of the fresh flower.
            Expect smooth, rich flavor that's exactly what nature intended.
          </p>

          <h5 className="font-bold mb-2">Unbeatable Vaping Experience:</h5>
          <p className="text-sm">
            Designed for a consistently smooth and clean draw every time, our
            melted diamond oil provides a highly flavorful, controlled, and
            deeply satisfying session from start to finish.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={isLight ? pen : penLight}
            alt="Cart Illustration"
            className="w-64 h-64 object-contain"
          />
        </div>
        <div>
          <h5 className="font-bold mb-2">Full-Spectrum Cannabinoid Power:</h5>
          <p className="text-sm mb-4">
            Utilizing advanced, state-of-the-art techniques, we ensure the full
            spectrum of cannabinoids is preserved, delivering a potent and
            enjoyable entourage effect that you can feel.
          </p>

          <h5 className="font-bold mb-2">
            Universal 510-Thread Compatibility:
          </h5>
          <p className="text-sm">
            Ready to use right out of the box with your favorite gear. Our
            cartridges are built to seamlessly connect with any standard
            510-thread battery.
          </p>
        </div>
      </div>
  )
}

export default CartridgesInfoSection