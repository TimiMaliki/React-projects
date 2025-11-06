import { useContext } from "react";
import { HamburgerContext } from "../context/HamburgerContext";
import { Menu, X } from "lucide-react";

const Hamburger = () => {
  const { menuOpen, setMenuOpen } = useContext(HamburgerContext);

  return (
    <div className="flex items-center gap-2">
      <button
        className="w-10 h-10 flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <X size={26} className="text-white cursor-pointer" />
        ) : (
          <Menu size={26} className="text-white cursor-pointer" />
        )}
      </button>
      <span className="uppercase tracking-wide cursor-pointer" style={{fontWeight:"800"}}>Menu</span>
    </div>
  );
};

export default Hamburger;
