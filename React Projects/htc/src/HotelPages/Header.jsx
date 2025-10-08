import { useState } from "react";
import { Search } from "lucide-react";

const Header = ({ onSearchSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const MIN_QUERY = 3;

  const handleSearch = async (value) => {
    setQuery(value);
    if (value.length < MIN_QUERY) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://corsproxy.io/?https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          value
        )}&limit=6`
      );
      const data = await res.json();
      setResults(data || []);
    } catch (err) {
      console.error("Nominatim search error:", err);
      setResults([]);
    }
  };

  return (
    <nav className="relative w-full bg-black z-[1000] mt-44">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
        <h2 className="hidden sm:block text-lg text-white">Explore new places</h2>

        <div className="relative flex justify-center w-full sm:w-[420px]">
          <div className="relative rounded-lg bg-white/10 hover:bg-white/20 transition">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-white" size={18} />
            </div>
            <input
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search… e.g Maryland, United States"
              className="w-full pl-10 pr-3 py-2 bg-transparent text-white placeholder-white focus:outline-none"
            />
          </div>

          {/* Search dropdown */}
          {results.length > 0 && (
            <ul className="absolute left-0 right-0 mt-3 bg-black backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl max-h-[350px] overflow-y-auto z-50 animate-fadeIn">
              {results.map((place) => (
                <li
                  key={place.place_id}
                  onClick={() => {
                    setQuery(place.display_name);
                    setResults([]);
                    if (onSearchSelect) {
                      onSearchSelect({
                        lat: parseFloat(place.lat),
                        lng: parseFloat(place.lon),
                        name: place.display_name,
                      });
                    }
                  }}
                  className="px-4 py-3 text-white hover:text-red-600 transition-all duration-150 ease-in-out cursor-pointer border-b border-gray-100 last:border-none"
                >
                  <p className="text-sm font-medium truncate">{place.display_name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
