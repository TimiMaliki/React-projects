import { useState } from "react";
import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import Memebers from "./Memebers";
import MerchSection from "./MerchSelection";

const ProductVerification = () => {
   const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); 
  const handleVerify = () => {
    if (!code.trim()) return;

    setLoading(true);
    setResult(null);


    setTimeout(() => {
     
      if (code === "1234") setResult("success");
      else if (code === "1111") setResult("repeat");
      else setResult("error");

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="py-32" style={{
          background: themeStyle.bg,
          color: themeStyle.hex,
        }}>
    <div className="w-full max-w-2xl mx-auto  text-center" >
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">
        Product Verification
      </h1>

      <p className="text-lg mb-10">
        Scratch off the verification label on the back of the product and enter the code below.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col gap-6" style={{
          color: themeStyle.hex,
        }}>
        <div className="flex  rounded-xl shadow-md overflow-hidden border border-gray-200">
          {/* Input */}
          <div className="flex-1 px-4 py-3 flex items-center">
            <input
              type="text"
              placeholder="Enter your security code"
              className="w-full outline-none  placeholder-gray-400"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            onClick={handleVerify}
            disabled={loading}
            className="px-6 bg-black text-white font-semibold flex items-center justify-center  cursor-pointer transition disabled:opacity-50"
            style={{
          color: themeStyle.hex,
        }}
          >
            {loading ? (
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-white animate-bounce"></span>
              </div>
            ) : (
              "Verify"
            )}
          </button>
        </div>

        {/* Result Box */}
        <div className="min-h-20 flex flex-col items-center justify-center">
          {result === "error" && (
            <div className="text-red-500 font-medium flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/64ac82aab0b88a3f25b13366_cross-283.png"
                className="w-10 mb-2"
              />
              Invalid code. Please try again.
            </div>
          )}

          {result === "repeat" && (
            <div className="text-yellow-500 font-medium flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/64ac82a59234a64c37b553b1_warning-283.png"
                className="w-10 mb-2"
              />
              This code has already been used.
            </div>
          )}

          {result === "success" && (
            <div className="text-green-500 font-medium flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/64ac82af9311957ab6e602e4_check-283.png"
                className="w-10 mb-2"
              />
              Product Verified! 🎉
            </div>
          )}
        </div>
      </div>
    </div>
    <div>
      <Memebers/>
    </div>
     <div>
      <MerchSection/>
    </div>
    </div>
    
  );
};

export default ProductVerification;
