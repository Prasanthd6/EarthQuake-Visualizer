// import { useEffect, useMemo, useState } from "react";
// import { FEEDS, MAG_BUCKETS, feedUrl } from "../utils/feedConfig";
// import MapView from "./MapView";
// import EarthquakeList from "./EarthquakeList";
// import Legend from "./Legend";

// export default function EarthquakeVisualizer() {
//   const [feed, setFeed] = useState("all_day");
//   const [magBucket, setMagBucket] = useState("all");
//   const [minMag, setMinMag] = useState(0);
//   const [search, setSearch] = useState("");
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);
//   const [selectedCoords, setSelectedCoords] = useState(null);

//   // Fetch data
//   useEffect(() => {
//     const url = feedUrl(feed, magBucket);
//     setLoading(true);
//     fetch(url)
//       .then(res => res.json())
//       .then(json => setData(json))
//       .catch(err => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [feed, magBucket]);

//   const features = useMemo(() => {
//     const list = data?.features || [];
//     return list
//       .filter(f => Number(f.properties.mag) >= Number(minMag))
//       .filter(f => search ? f.properties.place?.toLowerCase().includes(search.toLowerCase()) : true)
//       .sort((a, b) => b.properties.time - a.properties.time);
//   }, [data, minMag, search]);

//   return (
//     <div className="min-h-screen w-full bg-slate-50 text-slate-900">
//       <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
//         <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3 justify-between">
//           <h1 className="text-xl sm:text-2xl font-bold">🌎 Earthquake Visualizer</h1>
//           <a className="text-sm underline opacity-80"
//              href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"
//              target="_blank" rel="noreferrer">
//             USGS Feeds
//           </a>
//         </div>
//       </header>

//       {/* Controls */}
//       {/* Controls */}
// <section className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-1 md:grid-cols-4 gap-3">
//   <div>
//     <label className="text-xs uppercase block mb-1 text-slate-600">Time Range</label>
//     <select
//       value={feed}
//       onChange={e => setFeed(e.target.value)}
//       className="w-full rounded-xl border border-slate-300 bg-slate-100 text-slate-800 
//                  px-3 py-2 text-sm shadow-sm
//                  hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       {FEEDS.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
//     </select>
//   </div>

//   <div>
//     <label className="text-xs uppercase block mb-1 text-slate-600">Magnitude Bucket</label>
//     <select
//       value={magBucket}
//       onChange={e => setMagBucket(e.target.value)}
//       className="w-full rounded-xl border border-slate-300 bg-slate-100 text-slate-800 
//                  px-3 py-2 text-sm shadow-sm
//                  hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       {MAG_BUCKETS.map(m => <option key={m.key} value={m.key}>{m.label}</option>)}
//     </select>
//   </div>

//   <div>
//     <label className="text-xs uppercase block mb-1 text-slate-600">Min Magnitude</label>
//     <input
//       type="number"
//       step="0.1"
//       value={minMag}
//       onChange={e => setMinMag(e.target.value)}
//       className="w-full rounded-xl border border-slate-300 bg-slate-100 text-slate-800 
//                  px-3 py-2 text-sm shadow-sm
//                  placeholder-slate-500
//                  hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>

//   <div>
//     <label className="text-xs uppercase block mb-1 text-slate-600">Search (Place)</label>
//     <input
//       value={search}
//       onChange={e => setSearch(e.target.value)}
//       placeholder="California, Japan..."
//       className="w-full rounded-xl border border-slate-300 bg-slate-100 text-slate-800 
//                  px-3 py-2 text-sm shadow-sm
//                  placeholder-slate-500
//                  hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>
// </section>


//       {/* Body */}
//       <main className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10">
//         <section className="lg:col-span-2 h-[60vh] lg:h-[72vh] border rounded-2xl shadow-sm overflow-hidden">
//           <MapView features={features} selectedCoords={selectedCoords} onSelect={setSelectedId} />
//         </section>

//         <aside className="rounded-2xl border shadow-sm bg-white flex flex-col">
//           <div className="p-4 border-b">
//             <h2 className="font-semibold">Results</h2>
//             <p className="text-xs opacity-70">
//               {loading ? "Loading..." : error ? `Error: ${error}` : `${features.length} events`}
//             </p>
//           </div>
//           <EarthquakeList
//             features={features}
//             selectedId={selectedId}
//             setSelectedId={setSelectedId}
//             setSelectedCoords={setSelectedCoords}
//           />
//         </aside>
//       </main>

//       <section className="mx-auto max-w-7xl px-4 pb-8">
//         <Legend />
//       </section>

//       <footer className="pb-6 text-center text-xs opacity-60">
//         Built with React, Leaflet, and OpenStreetMap · Data: USGS GeoJSON feeds
//       </footer>
//     </div>
//   );
// }
import { useEffect, useMemo, useState } from "react";
import { FEEDS, MAG_BUCKETS, feedUrl } from "../utils/feedConfig";
import EarthquakeDisplay from "./EarthquakeDisplay";
import EarthquakeList from "./EarthquakeList";
import Legend from "./Legend";

export default function EarthquakeVisualizer() {
  const [feed, setFeed] = useState("all_day");
  const [magBucket, setMagBucket] = useState("all");
  const [minMag, setMinMag] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Fetch data
  useEffect(() => {
    const url = feedUrl(feed, magBucket);
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [feed, magBucket]);

  const features = useMemo(() => {
    const list = data?.features || [];
    return list
      .filter(f => Number(f.properties.mag) >= Number(minMag))
      .filter(f => search ? f.properties.place?.toLowerCase().includes(search.toLowerCase()) : true)
      .sort((a, b) => b.properties.time - a.properties.time);
  }, [data, minMag, search]);

  const selectedEarthquake = useMemo(() => {
    return features.find(f => f.id === selectedId) || null;
  }, [features, selectedId]);

  const handleViewOnMap = (lat, lng) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="app">
      <header className="appHeader">
        <div className="headerInner">
          <h1 className="headerTitle">🌎 Earthquake Visualizer</h1>
          <a className="headerLink"
             href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"
             target="_blank" rel="noreferrer">
            USGS Feeds
          </a>
        </div>
      </header>

      {/* Controls */}
      <section className="controls">
        <div className="control">
          <label className="control__label">Time Range</label>
          <select
            value={feed}
            onChange={e => setFeed(e.target.value)}
            className="control__field"
          >
            {FEEDS.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
          </select>
        </div>

        <div className="control">
          <label className="control__label">Magnitude Bucket</label>
          <select
            value={magBucket}
            onChange={e => setMagBucket(e.target.value)}
            className="control__field"
          >
            {MAG_BUCKETS.map(m => <option key={m.key} value={m.key}>{m.label}</option>)}
          </select>
        </div>

        <div className="control">
          <label className="control__label">Min Magnitude</label>
          <input
            type="number"
            step="0.1"
            value={minMag}
            onChange={e => setMinMag(e.target.value)}
            className="control__field"
            placeholder="e.g., 3.0"
          />
        </div>

        <div className="control">
          <label className="control__label">Search (Place)</label>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="control__field"
            placeholder="California, Japan..."
          />
        </div>
      </section>

      {/* Body */}
      <main className="mainLayout">
        <section className="earthquakePanel">
          <EarthquakeDisplay 
            selectedEarthquake={selectedEarthquake}
            onViewOnMap={handleViewOnMap}
          />
        </section>

        <aside className="resultsPanel">
          <div className="resultsHeader">
            <h2 className="resultsTitle">Results</h2>
            <p className="resultsMeta">
              {loading ? "Loading..." : error ? `Error: ${error}` : `${features.length} events`}
            </p>
          </div>
          <EarthquakeList
            features={features}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </aside>
      </main>

      <section className="legendWrapper">
        <Legend />
      </section>

      <footer className="appFooter">
        Built with React, Leaflet, and OpenStreetMap · Data: USGS GeoJSON feeds
      </footer>
    </div>
  );
}
