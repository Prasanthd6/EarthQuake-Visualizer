import { magColor, formatTime } from "../utils/helpers";

export default function EarthquakeDisplay({ selectedEarthquake, onViewOnMap }) {
  if (!selectedEarthquake) {
    return (
      <div className="earthquakeDisplay earthquakeDisplay--empty">
        <div className="earthquakeDisplay__background">
          <img 
            src="https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Earth background"
            className="earthquakeDisplay__bgImage"
          />
          <div className="earthquakeDisplay__overlay" />
        </div>
        <div className="earthquakeDisplay__content">
          <div className="earthquakeDisplay__icon">🌍</div>
          <h3 className="earthquakeDisplay__emptyTitle">Select an Earthquake</h3>
          <p className="earthquakeDisplay__emptyText">
            Click on any earthquake from the results panel to view detailed information here
          </p>
        </div>
      </div>
    );
  }

  const { properties, geometry } = selectedEarthquake;
  const [lng, lat, depthKm] = geometry.coordinates;
  const magnitude = properties.mag;

  return (
    <div className="earthquakeDisplay earthquakeDisplay--active">
      <div className="earthquakeDisplay__background">
        <img 
          src="https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Earthquake visualization"
          className="earthquakeDisplay__bgImage"
        />
        <div className="earthquakeDisplay__overlay" />
      </div>
      
      <div className="earthquakeDisplay__content">
        <div className="earthquakeDisplay__header">
          <div 
            className="earthquakeDisplay__magnitude"
            style={{ backgroundColor: magColor(magnitude) }}
          >
            M {magnitude.toFixed(1)}
          </div>
          <div className="earthquakeDisplay__location">
            <h3 className="earthquakeDisplay__title">{properties.place}</h3>
            <p className="earthquakeDisplay__coords">
              {lat.toFixed(4)}°, {lng.toFixed(4)}°
            </p>
          </div>
        </div>

        <div className="earthquakeDisplay__details">
          <div className="earthquakeDisplay__detail">
            <span className="earthquakeDisplay__label">Time</span>
            <span className="earthquakeDisplay__value">{formatTime(properties.time)}</span>
          </div>
          <div className="earthquakeDisplay__detail">
            <span className="earthquakeDisplay__label">Depth</span>
            <span className="earthquakeDisplay__value">{depthKm.toFixed(1)} km</span>
          </div>
          {properties.tsunami && (
            <div className="earthquakeDisplay__detail">
              <span className="earthquakeDisplay__label">Tsunami</span>
              <span className="earthquakeDisplay__value earthquakeDisplay__value--warning">
                ⚠️ Alert
              </span>
            </div>
          )}
        </div>

        <div className="earthquakeDisplay__actions">
          <button
            onClick={() => onViewOnMap(lat, lng)}
            className="earthquakeDisplay__button earthquakeDisplay__button--primary"
          >
            📍 View on Map
          </button>
          {properties.url && (
            <a
              href={properties.url}
              target="_blank"
              rel="noreferrer"
              className="earthquakeDisplay__button earthquakeDisplay__button--secondary"
            >
              📊 USGS Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
}