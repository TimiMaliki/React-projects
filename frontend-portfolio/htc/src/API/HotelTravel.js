
export const getPlacesData = async (type, sw, ne) => {
    try {
      const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
        // query params manually constructed
      });
  
      const json = await res.json();
      return json.data; // same shape as axios response
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getWeatherData = async (lat, lng) => {
    try {
      if (lat && lng) {
        const url = new URL("https://community-open-weather-map.p.rapidapi.com/find");
        url.searchParams.append("lat", lat);
        url.searchParams.append("lon", lng);
  
        const res = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        });
  
        return await res.json();
      }
    } catch (error) {
      console.error(error);
    }
  };
  