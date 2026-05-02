"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapboxRoute({ fromCoords, toCoords, onRouteData }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!fromCoords || !toCoords) return;
    if (!mapRef.current) return;

    // ✅ NO reverse here — cabPage.js already reversed coords to [lng, lat]
    const from = fromCoords;
    const to = toCoords;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: from,
      zoom: 6,
    });

    map.on("load", async () => {
      try {
        new mapboxgl.Marker({ color: "#1a1a2e" }).setLngLat(from).addTo(map);
        new mapboxgl.Marker({ color: "#d80117" }).setLngLat(to).addTo(map);

        const res = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${from[0]},${from[1]};${to[0]},${to[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        );
        const data = await res.json();

        if (!data.routes?.length) {
          console.error("No route found between these coordinates");
          return;
        }

        const route = data.routes[0];

        map.addSource("route", {
          type: "geojson",
          data: { type: "Feature", geometry: route.geometry },
        });

        map.addLayer({
          id: "route",
          type: "line",
          source: "route",
          paint: { "line-color": "#d80117", "line-width": 5 },
        });

        const bounds = new mapboxgl.LngLatBounds();
        bounds.extend(from);
        bounds.extend(to);
        map.fitBounds(bounds, { padding: 60 });

        // send route data to parent
        if (onRouteData) {
          onRouteData({
            distanceKm: parseFloat((route.distance / 1000).toFixed(1)),
            durationMin: parseFloat((route.duration / 60).toFixed(1)),
            routeGeoJSON: route.geometry,
          });
        }
      } catch (err) {
        console.error("Map error:", err);
      }
    });

    return () => map.remove();
  }, [fromCoords, toCoords]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={mapRef} style={{ width: "100%", height: "360px" }} />;
}
