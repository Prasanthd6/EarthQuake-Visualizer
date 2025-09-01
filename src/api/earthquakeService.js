import axios from "axios";

const API_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

export const fetchEarthquakes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.features; // Array of earthquakes
  } catch (error) {
    console.error("Error fetching earthquakes:", error);
    return [];
  }
};
