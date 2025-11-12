import conc from "../../Images/conc.jpeg";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";

const ConcentrateInfoSection = () => {
    const { isLight, videoTheme, videoUi, videoBg } =
    useContext(ToggleThemeContext);

  const videoStyle = isLight ? videoBg : videoUi;
  return (
  
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-left" style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}>
        <div>
          <h5 className="font-bold mb-2">Premium Extraction Quality:</h5>
          <p className="text-sm mb-4">
            Our concentrates are crafted from the finest flower, using clean and
            precise extraction processes to retain the full flavor, aroma, and
            potency of the original strain.
          </p>

          <h5 className="font-bold mb-2">Full-Spectrum Experience:</h5>
          <p className="text-sm">
            Experience the complete entourage effect — a rich balance of
            cannabinoids and terpenes that offer unmatched depth and intensity.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={conc}
            alt="Concentrate Jar"
            className="w-64 h-64 object-contain"
          />
        </div>

        <div>
          <h5 className="font-bold mb-2">Strain-Specific Potency:</h5>
          <p className="text-sm mb-4">
            Every batch is strain-specific and tested for quality, ensuring a
            consistent and reliable experience from flavor to potency.
          </p>

          <h5 className="font-bold mb-2">True Craftsmanship:</h5>
          <p className="text-sm">
            We combine innovative technology with traditional craftsmanship to
            produce pure, flavorful, and powerful concentrates you can trust.
          </p>
        </div>
      </div>
  )
}

export default ConcentrateInfoSection