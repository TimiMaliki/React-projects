import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useContext, useState,useEffect } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const ComingSoon = () => {
     const { isLight, light, dark } = useContext(ToggleThemeContext);
      const themeStyle = isLight ? light : dark;
        const [email, setEmail] = useState("");
        const [status, setStatus] = useState("");

         const handleSubmit = (e) => {
            e.preventDefault();
        
            if (email.trim() === "") {
              setStatus("error");
              return;
            }
            setStatus("success");
            setEmail("");
          };
        
          useEffect(() => {
            if (status) {
              const timer = setTimeout(() => setStatus(""), 3000);
              return () => clearTimeout(timer);
            }
          }, [status]);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-[200px] relative overflow-hidden"style={{ background: themeStyle.bg, color: themeStyle.hex }}>

     
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-700/10 blur-[140px] rounded-full" />

    
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[550px] h-[550px] border border-yellow-500/20 rounded-full blur-xl"
      />

      {/* Logo Section */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center mb-10"
      >
        {/* Logo Container */}
        <div className="w-36 h-36 rounded-full bg-white/5 border border-yellow-500/20 backdrop-blur-lg flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.2)]">
          <img
              src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/626ff5c29bfc24e3739af381_logo12.png"
              alt="Logo"
              className="mx-auto w-40"
            />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-center "
      >
        Something Big is Coming
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-xl text-lg text-center mt-4"
      >
        We are building a premium experience.  
        Be the first to know when we launch.
      </motion.p>

      {/* Email Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10 w-full max-w-lg bg-white/10 border border-black rounded-full backdrop-blur-xl flex p-2"
      >
        <input
          type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          placeholder="Enter your email"
          className="flex-1 bg-transparent px-4 rounded-full outline-none"
        />
        <button onClick={handleSubmit} className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer">
          <Mail size={18} />
          Notify Me
        </button>
      </motion.div>
         {status === "success" && (
          <div className="mt-4 text-green-600 text-lg">
            Thank you! Your submission has been received!
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 text-red-500 text-lg">
            Oops! Please enter a valid email address.
          </div>
        )}
    </div>
  );
};

export default ComingSoon;
