const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c9a99d2fabmsh574685e4a0a990ap17847cjsnbf3c0f519e36",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
};

const endpoints = {
  // restaurants: (sw, ne) =>
  //   `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`,
  // hotels: (sw, ne) =>
  //   `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`,
  // attractions: (sw, ne) =>
  //   `https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&currency=USD&lunit=km&lang=en_US`,
};

export const fetchPlaces = async (type, sw, ne, rating = "") => {
  if (!sw || !ne) return [];

  const endpoint = endpoints[type] ? endpoints[type](sw, ne) : endpoints.restaurants(sw, ne);

  try {
    const response = await fetch(endpoint, options);
    const result = await response.json();

    let data = result?.data || [];
    console.log(`(${type}) result:`, data);

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
