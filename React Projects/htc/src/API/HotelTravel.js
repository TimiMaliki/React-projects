const API_KEYS = [
  "c9a99d2fabmsh574685e4a0a990ap17847cjsnbf3c0f519e36", // key one
  "dd8a9d8650msh0892edac86ed3f1p133676jsnc5bc8f9f4d79", // key  two
  "f14f16879cmsh2a4f68a4d9b7814p188ac7jsn7b27b11bf451", // key three
];

let currentKeyIndex = 0;

const getHeaders = () => ({
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEYS[currentKeyIndex],
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
});

const endpoints = {
  restaurants: (sw, ne) =>
    `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`,
  hotels: (sw, ne) =>
    `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`,
  attractions: (sw, ne) =>
    `https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&currency=USD&lunit=km&lang=en_US`,
};

export const fetchPlaces = async (type, sw, ne, rating = "") => {
  if (!sw || !ne) return [];

  const endpoint =
    endpoints[type] ? endpoints[type](sw, ne) : endpoints.restaurants(sw, ne);

  try {
    let response = await fetch(endpoint, getHeaders());

    
    if (!response.ok) {
      console.warn(`Key ${API_KEYS[currentKeyIndex]} failed with status:`, response.status);

      currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
      console.log("Switching to new API key:", API_KEYS[currentKeyIndex]);

      response = await fetch(endpoint, getHeaders());
    }

    const result = await response.json();
    let data = result?.data || [];

    console.log(`(${type}) result count:`, data.length);

    if (rating) {
      const ratingNum = parseFloat(rating);
      data = data.filter((place) => parseFloat(place.rating) >= ratingNum);
    }

    return data;
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};
