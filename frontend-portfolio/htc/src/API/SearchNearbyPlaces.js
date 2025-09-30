// services/placesApi.js
export const searchNearbyPlaces = async (lat = 40, lng = -110, type = "restaurant") => {
    const url = "https://google-map-places-new-v2.p.rapidapi.com/v1/places:searchNearby";
  
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "5616351c70mshbc0f356c603975ap15b532jsn5a639c258924",
        "x-rapidapi-host": "google-map-places-new-v2.p.rapidapi.com",
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "*",
      },
      body: JSON.stringify({
        maxResultCount: 5,
        locationRestriction: {
          circle: {
            center: {
              latitude: lat,
              longitude: lng,
            },
            radius: 10000,
          },
        },
        includedTypes: [type], // ✅ must be a valid type, like "restaurant"
      }),
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching places:", error);
      return null;
    }
  };
  