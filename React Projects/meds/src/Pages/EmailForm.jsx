import { useContext, useState } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { states } from "../constant";

function EmailForm() {
    const { isLight, light, dark } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ background: themeStyle.bg, color: themeStyle.hex }}>
      <h1 className="text-2xl font-bold md:col-span-2">CONTACT US</h1>


        <div className="grid grid-cols-2 gap-6 md:col-span-2">
        
          <a href="mailto:support@muhameds.com" className="block  mb-6 transition">
            support@muhameds.com
          </a>

        
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

      {/* <input
        type="text"
        placeholder="Name *"
        className="border p-3 rounded-lg w-full text-lg"
        required
      />

      <input
        type="email"
        placeholder="Email *"
        className="border p-3 rounded-lg w-full text-lg"
        required
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="border p-3 rounded-lg w-full text-lg"
      /> */}

      {/* Inquiry Type */}
      {/* <div className="md:col-span-2">
        <label className="block mb-2 text-lg font-semibold">Type of Inquiry *</label>
        <select className="border p-3 rounded-lg w-full">
          <option>Dispensary / Delivery</option>
          <option>Customer</option>
          <option>Wholesale</option>
        </select>
      </div> */}

      {/* State */}
      {/* <div className="md:col-span-2">
        <label className="block mb-2 text-lg font-semibold">State *</label>
        <select className="border p-3 rounded-lg w-full text-lg">
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="City *"
        className="border p-3 rounded-lg w-full text-lg"
        required
      />

      <textarea
        placeholder="Message"
        className="border p-3 rounded-lg w-full h-32 md:col-span-2 text-lg"
      ></textarea>

      <button class="bg-black text-white px-7 py-3 rounded-lg mt-4 md:col-span-2 text-lg">
        Submit
      </button> */}
    </form>
  );
}

export default EmailForm