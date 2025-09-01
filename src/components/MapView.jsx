// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// import { fetchEarthquakes } from "../api/earthquakeService";
// import L from "leaflet";

// // Default Leaflet marker fix (icons won’t show otherwise in StackBlitz)
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// export default function MapView() {
//   const [earthquakes, setEarthquakes] = useState([]);

//   useEffect(() => {
//     fetchEarthquakes().then((data) => setEarthquakes(data));
//   }, []);

//   return (
//     <MapContainer
//       center={[20, 0]} // Center world view
//       zoom={2}
//       style={{ height: "100vh", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//       />

//       {earthquakes.map((eq) => {
//         const [lng, lat] = eq.geometry.coordinates;
//         return (
//           <Marker key={eq.id} position={[lat, lng]}>
//             <Popup>
//               <strong>{eq.properties.place}</strong>
//               <br />
//               Magnitude: {eq.properties.mag}
//               <br />
//               Time: {new Date(eq.properties.time).toLocaleString()}
//             </Popup>
//           </Marker>
//         );
//       })}
//     </MapContainer>
//   );
// }
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { magColor, magRadius, formatTime } from "../utils/helpers";
import { useEffect } from "react";
import L from "leaflet";

// Fix missing Leaflet icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Zoom to a point
export function FlyTo({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.flyTo(coords, 6, { animate: true, duration: 1.5 });
  }, [coords, map]);
  return null;
}

// Fit bounds around all markers
export function FitBounds({ features }) {
  const map = useMap();
  useEffect(() => {
    if (!features?.length) return;
    const latlngs = features.map(f => [f.geometry.coordinates[1], f.geometry.coordinates[0]]);
    const bounds = L.latLngBounds(latlngs);
    map.fitBounds(bounds.pad(0.2));
  }, [features, map]);
  return null;
}

export default function MapView({ features, selectedCoords, onSelect }) {
  return (
    <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitBounds features={features} />
      <FlyTo coords={selectedCoords} />

      {features.map(f => {
        const [lng, lat, depthKm] = f.geometry.coordinates;
        const m = f.properties.mag;
        return (
          <CircleMarker
            key={f.id}
            center={[lat, lng]}
            radius={magRadius(m)}
            pathOptions={{ color: magColor(m), fillOpacity: 0.6 }}
            eventHandlers={{ click: () => onSelect(f.id) }}
          >
            <Popup>
              <div className="min-w-56 text-sm">
                <div className="font-semibold">M {m.toFixed(1)} — {f.properties.place}</div>
                <div className="opacity-80">Depth: {depthKm.toFixed(1)} km</div>
                <div className="opacity-80">Time: {formatTime(f.properties.time)}</div>
                {f.properties.url && (
                  <a className="underline text-blue-600" href={f.properties.url} target="_blank" rel="noreferrer">
                    USGS Event Page
                  </a>
                )}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
