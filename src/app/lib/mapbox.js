const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// pan india locations
async function fetchToSuggestions(query) {
  if (!query || query.length < 2) return [];

  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
        `country=IN&types=place,locality&limit=6&access_token=${MAPBOX_TOKEN}`,
    );

    const data = await res.json();

    return (data.features || []).map((f) => ({
      name: f.text,
      full: f.place_name,
      id: f.id,
      coords: f.center,
    }));
  } catch {
    return [];
  }
}
// For only delhi locations
async function fetchFromSuggestions(query) {
  if (!query || query.length < 2) return [];

  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
        `country=IN&types=place,locality,neighborhood&bbox=76.84,28.40,77.35,28.88&limit=6&access_token=${MAPBOX_TOKEN}`,
    );

    const data = await res.json();
    console.log(data);

    return (data.features || []).map((f) => ({
      name: f.text,
      full: f.place_name,
      id: f.id,
      coords: f.center,
    }));
  } catch {
    return [];
  }
}

// Direction API (Calculate distance)
async function getDistance(fromCoords, toCoords) {
  try {
    const res = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${fromCoords[0]},${fromCoords[1]};${toCoords[0]},${toCoords[1]}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
    );
    const data = await res.json();

    if (!data.routes?.length) throw new Error("No routes found");

    const route = data.routes[0];
    return {
      distance: (route.distance / 1000).toFixed(2),
      duration: (route.duration / 60).toFixed(2),
    };
  } catch (err) {
    console.log("getDistance error:", err);
    return { distance: 0, duration: 0 };
  }
}

async function getRoute(fromCoords, toCoords) {
  try {
    const res = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${fromCoords[0]},${fromCoords[1]};${toCoords[0]},${toCoords[1]}?geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
    );
    const data = await res.json();

    if (!data.routes?.length) throw new Error("No route found");

    return data.routes[0];
  } catch (err) {
    console.error("Route error:", err);
    return null;
  }
}

export { fetchToSuggestions, fetchFromSuggestions, getDistance, getRoute };
