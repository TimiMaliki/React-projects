import { useContext, useState } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { states } from "../constant";
import EmailForm from "./EmailForm";
import RetailForm from "./RetailForm";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("email");
 const { isLight, light, dark } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;

  return (
    <div className="w-full" style={{ background: themeStyle.bg, color: themeStyle.hex }}>
      {/* HERO */}
      <div className=" py-24 text-center"  >
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          CONNECT WITH US
        </h1>
        <p className="mt-4 text-xl p-4 md:p-0">
          Contact us if you have any questions
        </p>
      </div>

      {/* ADDRESS SECTION */}
      <div className="py-16" style={{ background: themeStyle.bg, color: themeStyle.hex }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* CALIFORNIA */}
          <div className="border border-gray-300 p-6 rounded-xl text-center">
            <h3 className="font-bold text-xl mb-4">CALIFORNIA</h3>
            <img
              src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/62548b55fa92af2ae6959edb_MM-CA.png"
              alt="California"
              className="mx-auto w-40"
            />
          </div>

          {/* MIDDLE LOGO */}
          <div className="border border-gray-300 p-6 rounded-xl text-center">
            <img
              src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/626ff5c29bfc24e3739af381_logo12.png"
              alt="Logo"
              className="mx-auto w-40"
            />
          </div>

          {/* MICHIGAN */}
          <div className="border border-gray-300 p-6 rounded-xl text-center">
            <h3 className="font-bold text-xl mb-4">MICHIGAN</h3>
            <img
              src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/62548b550e11bdd2ecd494ea_MM-MI.png"
              alt="Michigan"
              className="mx-auto w-40"
            />
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-4xl mx-auto px-4 pb-20" style={{ background: themeStyle.bg, color: themeStyle.hex }}>
        {/* TAB BUTTONS */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab("email")}
            className={`px-6 py-3 rounded-full text-md uppercase font-semibold transition cursor-pointer ${
              activeTab === "email"
                ? "bg-black text-white cursor-pointer"
                : "bg-gray-200 text-black cursor-pointer"
            }`}
          >
            Email
          </button>

          <button
            onClick={() => setActiveTab("retail")}
            className={`px-6 py-3 rounded-full text-sm uppercase font-semibold transition cursor-pointer ${
              activeTab === "retail"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Retail / Vendor
          </button>
        </div>

        {/* TAB CONTENT */}
        {activeTab === "email" ? <EmailForm /> : <RetailForm />}
      </div>
    </div>
 
  );
}





