// USGS Feed configuration
export const FEEDS = [
  { key: "all_hour", label: "Past Hour" },
  { key: "all_day", label: "Past Day" },
  { key: "all_week", label: "Past 7 Days" },
  { key: "all_month", label: "Past 30 Days" },
];

export const MAG_BUCKETS = [
  { key: "all", label: "All magnitudes" },
  { key: "2.5", label: "≥ 2.5" },
  { key: "4.5", label: "≥ 4.5" },
  { key: "significant", label: "Significant" },
];

export function feedUrl(feed, magBucket) {
  if (magBucket === "all")
    return `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${feed}.geojson`;
  return `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magBucket}_${feed}.geojson`;
}
