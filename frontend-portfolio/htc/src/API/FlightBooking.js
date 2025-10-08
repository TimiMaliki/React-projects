const API_KEYS = [
    "5616351c70mshbc0f356c603975ap15b532jsn5a639c258924",
    "c9a99d2fabmsh574685e4a0a990ap17847cjsnbf3c0f519e36",
  ];
  
  const HOST = "tripadvisor16.p.rapidapi.com";
  let currentKeyIndex = 0;
  
  const getHeaders = () => ({
    "x-rapidapi-key": API_KEYS[currentKeyIndex],
    "x-rapidapi-host": HOST,
  });
  
  // Rotate key after every successful request (round robin)
  const rotateKey = () => {
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    console.info(`🔁 Switched to API key ${currentKeyIndex + 1}`);
  };
  
  // Enhanced failover + rotation logic
  const fetchWithFailover = async (url) => {
    for (let i = 0; i < API_KEYS.length; i++) {
      try {
        const res = await fetch(url, { method: "GET", headers: getHeaders() });
  
        // Handle rate limits
        if (res.status === 429 || res.status === 401) {
          console.warn(`⚠️ Key ${currentKeyIndex + 1} limit reached — switching...`);
          currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
          continue;
        }
  
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  
        const data = await res.json();
  
        // ✅ Rotate to next key *after* a successful call
        rotateKey();
  
        return data;
      } catch (err) {
        console.error(`❌ Error with key ${currentKeyIndex + 1}:`, err.message);
        currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
      }
    }
  
    throw new Error("🚫 All API keys failed — please check limits or add more keys.");
  };
  
  // === Search Airports ===
  export const searchDestinations = async (query) => {
    try {
      const url = `https://${HOST}/api/v1/flights/searchAirport?query=${encodeURIComponent(query)}`;
      const data = await fetchWithFailover(url);
      return data?.data || [];
    } catch (err) {
      console.error("❌ Error fetching airport search results:", err);
      return [];
    }
  };
  
  // === Get Filters (optional) ===
  export const getFlightFilters = async ({ fromCode, toCode }) => {
    try {
      const url = `https://${HOST}/api/v1/flights/getFilters?sourceAirportCode=${fromCode}&destinationAirportCode=${toCode}&itineraryType=ONE_WAY&classOfService=ECONOMY`;
      const data = await fetchWithFailover(url);
      return data?.data || {};
    } catch (err) {
      console.error("❌ Error fetching flight filters:", err);
      return {};
    }
  };
  
  // === Search Flights ===
  export const searchFlights = async ({ fromCode, toCode, date }) => {
    try {
      const url = `https://${HOST}/api/v1/flights/searchFlights?sourceAirportCode=${fromCode}&destinationAirportCode=${toCode}&itineraryType=ONE_WAY&sortOrder=ML_BEST_VALUE&numAdults=1&numSeniors=0&classOfService=ECONOMY&pageNumber=1&nearby=yes&nonstop=yes&currencyCode=USD&region=USA&date=${date}`;
      const data = await fetchWithFailover(url);
      return data?.data?.flights || [];
    } catch (err) {
      console.error("❌ Error fetching flights:", err);
      return [];
    }
  };
  