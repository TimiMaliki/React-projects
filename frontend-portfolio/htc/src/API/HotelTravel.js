
const BASE_URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "5616351c70mshbc0f356c603975ap15b532jsn5a639c258924",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
};


export const fetchPlaces = async (sw, ne) => {
  if (!sw || !ne) return [];
  const url =
  `${BASE_URL}?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result?.data || []; 
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
};

      



