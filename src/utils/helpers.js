export function magColor(m) {
  if (m >= 7) return "#7f0000";
  if (m >= 6) return "#b30000";
  if (m >= 5) return "#e34a33";
  if (m >= 4) return "#fc8d59";
  if (m >= 3) return "#fdbb84";
  if (m >= 2) return "#fdd49e";
  return "#fee8c8";
}

export function magRadius(m) {
  return Math.max(3, Math.min(24, m * 4)); // keep circles visible
}

export function formatTime(ms) {
  try {
    return new Date(ms).toLocaleString();
  } catch {
    return "—";
  }
}
