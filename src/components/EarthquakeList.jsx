// import { magColor, formatTime } from "../utils/helpers";

// export default function EarthquakeList({ features, selectedId, setSelectedId, setSelectedCoords }) {
//   return (
//     <div className="flex-1 overflow-auto divide-y divide-slate-100">
//       {features.map(f => {
//         const id = f.id;
//         const m = f.properties.mag;
//         const [lng, lat, depthKm] = f.geometry.coordinates;
//         const active = selectedId === id;
//         return (
//           <button
//             key={id}
//             onClick={() => setSelectedId(active ? null : id)}
//             className={`w-full text-left p-4 hover:bg-slate-50 ${active ? "bg-slate-50" : ""}`}
//           >
//             <div className="flex items-start gap-3">
//               <div className="shrink-0 mt-0.5 rounded-full size-8 grid place-items-center font-semibold text-white"
//                    style={{ background: magColor(m) }}>
//                 {m.toFixed(1)}
//               </div>
//               <div className="min-w-0">
//                 <div className="font-medium truncate">{f.properties.place}</div>
//                 <div className="text-xs opacity-70">{formatTime(f.properties.time)} · Depth {depthKm.toFixed(1)} km</div>

//                 {active && (
//                   <div className="mt-2 text-xs space-x-3">
//                     {Number.isFinite(lat) && Number.isFinite(lng) && (
//                       <>
//                         <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5">
//                           {lat.toFixed(2)}, {lng.toFixed(2)}
//                         </span>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             const url = `https://www.google.com/maps?q=${lat},${lng}`;
//                             window.open(url, "_blank"); // Opens Google Maps in a new tab
//                           }}
//                           className="inline-block rounded-full bg-blue-600 px-2 py-0.5 text-white hover:bg-blue-700"
//                         >
//                           View on Map
//                         </button>

//                       </>
//                     )}
//                     {f.properties.url && (
//                       <a className="inline-block underline text-blue-600" href={f.properties.url} target="_blank" rel="noreferrer">
//                         USGS Event
//                       </a>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );
// }
import { magColor, formatTime } from "../utils/helpers";

export default function EarthquakeList({ features, selectedId, setSelectedId }) {
  return (
    <div className="quakeGrid">
      {features.map(f => {
        const id = f.id;
        const m = f.properties.mag;
        const [lng, lat, depthKm] = f.geometry.coordinates;
        const active = selectedId === id;
        return (
          <button
            key={id}
            onClick={() => setSelectedId(active ? null : id)}
            className={`quakeCard${active ? " is-active" : ""}`}
          >
            <div className="magBadge" style={{ background: magColor(m) }}>
              {m.toFixed(1)}
            </div>
            <div>
              <div className="cardTitle">{f.properties.place}</div>
              <div className="cardMeta">
                {formatTime(f.properties.time)} · Depth {depthKm.toFixed(1)} km
              </div>
              {active && (
                <div style={{ marginTop: 8 }}>
                  {Number.isFinite(lat) && Number.isFinite(lng) && (
                    <span className="cardMeta">
                      {lat.toFixed(2)}, {lng.toFixed(2)}
                    </span>
                  )}
                </div>
              )}
            </div>
            {active && (
              <div className="cardActions">
                {Number.isFinite(lat) && Number.isFinite(lng) && (
                  <a
                    href={`https://www.google.com/maps?q=${lat},${lng}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="btn btn--primary"
                  >
                    View on Map
                  </a>
                )}
                {f.properties.url && (
                  <a
                    className="link"
                    href={f.properties.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    USGS Event
                  </a>
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
