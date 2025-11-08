import React, { useState } from "react";

const Footer = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Explore Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">EXPLORE</h2>
          <ul className="space-y-2 text-gray-300">
            {["ALL-IN-ONE", "CARTRIDGES", "PRE-ROLLS", "FLOWER", "GUMMIES", "CONCENTRATES", "BLOG / PRESS"].map((item, i) => (
              <li key={i}>
                <a href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Learn More Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">LEARN MORE</h2>
          <ul className="space-y-2 text-gray-300">
            {[
              { name: "ABOUT US", href: "/about" },
              { name: "CONTACT US", href: "/contact" },
              { name: "VERIFICATION", href: "/muha-members" },
              { name: "INFLUENCERS", href: "/influencers" },
              { name: "REWARDS", href: "/rewards" },
              { name: "TERMS OF SERVICE", href: "#" },
              { name: "PRIVACY POLICY", href: "/privacy-policy" },
            ].map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-white transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <a href="mailto:support@muhameds.com" className="block text-gray-300 mb-6 hover:text-white transition">
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

        {/* Newsletter Signup */}
        <div className="">
          <h2 className="text-lg font-semibold mb-4">SIGN UP</h2>
          <p className="text-gray-300 mb-4">
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
              className="w-full sm:flex-1 px-4 py-2 rounded-full text-black focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Success Message */}
          {status === "success" && (
            <div className="text-green-500 mt-3 text-sm">
              Thank you! Your submission has been received!
            </div>
          )}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Muha Meds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
