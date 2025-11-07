import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { MoonStar, SunIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ToggleTheme = () => {
  const { toggleLight, isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;

  return (
    <>
      {/* Desktop Toggle (Navbar version) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLight}
        className="md:flex w-12 h-12 md:w-14 md:h-14 flex px-6 py-2 items-center cursor-pointer justify-center absolute right-6 mt-[800px] rounded-full border border-slate-500 shadow-md transition-all duration-300 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 hover:shadow-lg"
        style={{
          color: themeStyle.hex,
        }}
        aria-label="Toggle Dark Mode"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SunIcon size={26} className="text-amber-400 drop-shadow" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MoonStar size={26} className="text-sky-300 drop-shadow" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

    </>
  );
};

export default ToggleTheme;
