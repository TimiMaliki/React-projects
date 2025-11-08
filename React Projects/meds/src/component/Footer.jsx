import  { useState } from "react";
import { footerLinks , Explore} from "../constant";
import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const Footer = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus(""), 3000);
  };
 const { isLight, dark, light } = useContext(ToggleThemeContext);
          const themeStyle = isLight ? light : dark;
  return (
    <footer className="py-16 px-6 md:px-16"style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-lg font-semibold mb-4">EXPLORE</h2>
          <ul className="space-y-2 ">
            {Explore.map((item, i) => (
              <li key={i}>
                <a href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

    
        <div>
          <h2 className="text-lg font-semibold mb-4">LEARN MORE</h2>
          <ul className="space-y-2">
            {footerLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <a href="mailto:support@muhameds.com" className="block  mb-6 transition">
            support@muhameds.com
          </a>

          <h2 className="text-lg font-semibold mb-4">FOLLOW</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/muhameds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/625718812262cd66c86bbee6_Gold-Metallic-Logo-IG.png"
                alt="Instagram"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://x.com/muhamedsglobal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/674f4ccc2984b77982208a00_X-GoldMetalic-icon-600.png"
                alt="Twitter/X"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://weedmaps.com/brands/muha-meds/products?isNearby=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/625c6abfc8a26a8857c3e963_Gold-WM.png"
                alt="Weedmaps"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

     
        <div className="">
          <h2 className="text-lg font-semibold mb-4">SIGN UP</h2>
          <p className=" mb-4">
            Stay up to date with the latest Muha Meds products
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter Email"
              required
              className="w-full sm:flex-1 px-4 py-2 rounded-full border border-black text-black focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full cursor-pointer  ttransition"
            >
              Sign Up
            </button>
          </form>

         
          {status === "success" && (
            <div className="text-green-500 mt-3 text-sm">
              Thank you! Your submission has been received!
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-md ">
        © {new Date().getFullYear()} Muha Meds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
