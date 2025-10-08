
const BASE_URL = "https://booking-com15.p.rapidapi.com/api/v1/cars";
const HEADERS = {
  "x-rapidapi-key": "5616351c70mshbc0f356c603975ap15b532jsn5a639c258924",
  "x-rapidapi-host": "booking-com15.p.rapidapi.com",
};

async function safeFetch(path) {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url, { headers: HEADERS });
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      json = text;
    }
    console.log("[API]", url, "status:", res.status, json);
    // still return json for inspecting status even if not ok
    return { ok: res.ok, status: res.status, body: json };
  } catch (err) {
    console.error("[API] fetch error:", err);
    return { ok: false, status: 0, body: null, error: err };
  }
}

export async function searchDestinations(query) {
  if (!query) return [];
  const { ok, body } = await safeFetch(`/searchDestination?query=${encodeURIComponent(query)}`);
  if (!ok) {
    // return [] so caller can fallback to other strategies if desired
    return [];
  }
  const arr = (body && (body.data || body.results)) || [];
  return arr;
}

/**
 * searchCarRentals(lat, lng)
 * returns an array of normalized rentals
 */
export async function searchCarRentals(lat, lng) {
  if (!lat || !lng) return [];

  const path = `/searchCarRentals?pick_up_latitude=${lat}&pick_up_longitude=${lng}&drop_off_latitude=${lat}&drop_off_longitude=${lng}&pick_up_time=10%3A00&drop_off_time=10%3A00&driver_age=30&currency_code=USD&location=US`;
  const { ok, body } = await safeFetch(path);

  let items = [];
  if (ok && body) {
    items = body.data || body.results || [];
  }

  // If API returned empty array, create MOCK data near the center so UI can demonstrate map/list.
  if (!items || items.length === 0) {
    console.warn("[API] No rentals returned, using mock fallback data");
    const mockNames = [
      "Toyota Corolla or similar",
      "Nissan Rogue or similar",
      "Ford Focus or similar",
      "Hyundai Elantra or similar",
      "Chevrolet Malibu or similar",
    ];
    items = mockNames.map((name, i) => {
      const latOffset = (Math.random() - 0.5) * 0.02;
      const lngOffset = (Math.random() - 0.5) * 0.02;
      return {
        // normalized shape used by UI below
        id: `mock-${i}`,
        vehicle_name: name,
        vendor_name: ["Hertz", "Enterprise", "Avis", "Budget", "Sixt"][i % 5],
        car_class: ["Economy", "Compact", "Intermediate", "Full-size", "SUV"][i % 5],
        price: { amount_formatted: `$${40 + i * 12}/day` },
        // pickup location near provided lat/lng
        pickup_latitude: lat + latOffset,
        pickup_longitude: lng + lngOffset,
        // detailsKey for the "View details" button — we keep mock keys
        detailsKey: `mock-details-${i}`,
      };
    });
  } else {
    // Normalize API response items to the UI-friendly shape (best-effort)
    items = items.map((it, idx) => {
      const get = (k1, k2) => it[k1] ?? it[k2] ?? null;
      return {
        id: it.vehicle_id ?? it.id ?? `item-${idx}`,
        vehicle_name:
          it.vehicle_name ??
          it.vehicle?.name ??
          it.name ??
          it.vehicle_description ??
          it.title ??
          "Car",
        vendor_name: it.vendor_name ?? it.supplier_name ?? get("vendor", "supplier") ?? "Vendor",
        car_class: it.car_class ?? it.vehicle_class ?? it.category ?? "",
        price: it.price ?? it.pricing_info ?? { amount_formatted: it.price_total ?? "N/A" },
        pickup_latitude:
          Number(it.pickup_latitude ?? it.pick_up_latitude ?? it.pick_up_lat ?? it.location?.lat) ||
          null,
        pickup_longitude:
          Number(it.pickup_longitude ?? it.pick_up_longitude ?? it.pick_up_lng ?? it.location?.lon) ||
          null,
        detailsKey: it.detailsKey ?? it.search_key ?? it.details_key ?? null,
        raw: it,
      };
    });
  }

  return items;
}

export async function getVehicleDetails(vehicle_id, search_key) {
  if (!vehicle_id || !search_key) {
    // If detailsKey is mock (starts with "mock"), return mock details
    if (String(vehicle_id || search_key).startsWith("mock")) {
      return {
        mock: true,
        name: "Mock Car Example",
        vendor: "Demo Supplier",
        price: "$59/day",
        notes: "This is mock fallback details",
      };
    }
    return null;
  }

  const path = `/vehicleDetails?vehicle_id=${encodeURIComponent(vehicle_id)}&search_key=${encodeURIComponent(search_key)}&currency_code=USD`;
  const { ok, body } = await safeFetch(path);
  if (!ok) return null;
  return body;
}
