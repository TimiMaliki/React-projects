import { useContext, useState } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { states } from "../constant";

function EmailForm() {
    const { isLight, light, dark } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ background: themeStyle.bg, color: themeStyle.hex }}>
      <h1 className="text-2xl font-bold md:col-span-2">CONTACT US</h1>

      <input
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
      />

      {/* Inquiry Type */}
      <div className="md:col-span-2">
        <label className="block mb-2 text-lg font-semibold">Type of Inquiry *</label>
        <select className="border p-3 rounded-lg w-full">
          <option>Dispensary / Delivery</option>
          <option>Customer</option>
          <option>Wholesale</option>
        </select>
      </div>

      {/* State */}
      <div className="md:col-span-2">
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
      </button>
    </form>
  );
}

export default EmailForm