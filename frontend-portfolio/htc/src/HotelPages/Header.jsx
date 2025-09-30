import { Search } from "lucide-react"; 

const Header = () => {
  return (
    <nav className="relative w-full">
    <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4">
        <h2 className="hidden sm:block text-lg text-white">
          Explore new places
        </h2>

        <div className="relative rounded-md bg-white/20 hover:bg-white/30 transition w-full sm:w-auto sm:ml-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-white" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search…"
            className="w-full sm:w-[20ch] pl-10 pr-3 py-2 bg-transparent text-white placeholder-white focus:outline-none"
          />
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;
