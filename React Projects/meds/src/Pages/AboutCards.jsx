import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const AboutCards = () => {
        const { isLight, dark, light } = useContext(ToggleThemeContext);
          const themeStyle = isLight ? light : dark;
  return (
    <section className="py-20 px-6 md:px-20 transition-colors duration-500" style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        
        {/* CARD 1 */}
        <div className=" rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition border-t-4 border-amber-500 dark:border-amber-400">
          <h2 className="text-2xl font-bold   mb-4">
            Quality &amp; <br /> Innovation
          </h2>
          <p className="leading-relaxed">
            Our products are made using 100% organically grown cannabis.
            Creating the ultimate individualized cannabis experience means
            perfection in every step of the process. From cultivation to
            cartridge, we take pride in bringing consumers high-quality, great
            tasting, transparent products.
          </p>
        </div>

        {/* CARD 2 */}
        <div className=" rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition border-t-4 border-amber-500 dark:border-amber-400">
          <h2 className="text-2xl font-bold   mb-4">
            Education &amp; <br /> Transparency
          </h2>
          <p className="leading-relaxed">
            We believe that providing accurate and reliable information about
            our products and their benefits is essential for empowering
            consumers. We ensure transparency about the quality and safety of
            our products and foster a supportive, informed community of cannabis
            users navigating this evolving landscape.
          </p>
        </div>

        {/* CARD 3 */}
        <div className=" rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition border-t-4 border-amber-500 dark:border-amber-400">
          <h2 className="text-2xl font-bold   mb-4">
            Good Will
          </h2>
          <p className="leading-relaxed">
            True success is measured not by profit, but by positive impact. We
            actively participate in social causes, support charitable
            organizations, and promote compassion and shared growth to uplift
            our community and the world at large.
          </p>
        </div>

        {/* CARD 4 */}
        <div className=" rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition border-t-4 border-amber-500 dark:border-amber-400">
          <h2 className="text-2xl font-bold   mb-4">
            Giving Back
          </h2>
          <p className="leading-relaxed">
            In honor of our company values and commitment to giving back, we pledge{" "}
            <span className="font-bold text-amber-600 dark:text-amber-400">
              2% of all Hemp Revenue
            </span>{" "}
            directly to two amazing non-profits:{" "}
            <span className="font-semibold">4Ocean</span> &amp;{" "}
            <span className="font-semibold">Erth Al-Mustafa Foundation</span>.  
            Together, we’re building a future rooted in sustainability, compassion, and community impact.
          </p>
        </div>

        {/* CARD 5 — Erth al-Mustafa */}
        <div className=" rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition border-t-4 border-amber-500 dark:border-amber-400">
          <img
            src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/66ce2ad94a143ba463a27c88_EMF-color-logo-slim.png"
            alt="Erth al-Mustafa Foundation logo"
            className="w-48 h-auto mb-4"
          />
          <p className="leading-relaxed">
            Erth al-Mustafa is a two-branched organization combining humanitarian work and
            the spreading of traditional Islamic knowledge.
          </p>
        </div>

        {/* CARD 6 — 4Ocean */}
        <div className=" rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition border-t-4 border-amber-500 dark:border-amber-400">
          <img
            src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/66ce2b593cb8bbb935e8f039_4ocean-logo-650.png"
            alt="4Ocean logo"
            className="w-48 h-auto mb-4"
          />
          <p className="leading-relaxed">
            Our lives revolve around the ocean — it’s where we go to work, relax, and appreciate
            nature. We do what we do to protect the people and places we love, not just for ourselves,
            but for every generation that follows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
