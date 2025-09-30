// api.js
const RAPID_API_KEY = "5616351c70mshbc0f356c603975ap15b532jsn5a639c258924";
const RAPID_API_HOST = "google-map-places-new-v2.p.rapidapi.com";

export async function searchPlaces(query) {
  const url = `https://${RAPID_API_HOST}/v1/places:searchText`;

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": RAPID_API_HOST,
      "Content-Type": "application/json",
      "X-Goog-FieldMask": "*",
    },
    body: JSON.stringify({
      textQuery: query,
      maxResultCount: 5,
    }),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data.places || [];
}

export async function getPlaceDetails(placeId) {
  const url = `https://${RAPID_API_HOST}/v1/places/${placeId}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": RAPID_API_HOST,
      "X-Goog-FieldMask": "*",
    },
  };

  const response = await fetch(url, options);
  return response.json();
}

export async function getPlacePhoto(placeId, photoName) {
  const url = `https://${RAPID_API_HOST}/v1/places/${placeId}/photos/${photoName}/media?maxWidthPx=400&maxHeightPx=400&skipHttpRedirect=true`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": RAPID_API_HOST,
    },
  };

  const response = await fetch(url, options);
  return response.json(); // contains `photoUri`
}
