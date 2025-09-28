import { Autocomplete } from "@react-google-maps/api";
import { Search } from "lucide-react"; 

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <nav className="bg-blue-600">
      <div className="flex items-center justify-between px-4 -mt-24 py-2 max-w-7xl mx-auto">
        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <h2 className="hidden sm:block text-lg text-white">
            Explore new places
          </h2>

          {/* Autocomplete Search */}
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
            <div className="relative rounded-md bg-white/20 hover:bg-white/30 transition w-full sm:w-auto sm:ml-4">
              {/* Search Icon */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-white" size={20} />
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder="Search…"
                className="w-full sm:w-[20ch] pl-10 pr-3 py-2 bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
          {/* </Autocomplete> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
