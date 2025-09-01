# 🌎 Earthquake Visualizer

A real-time earthquake monitoring application built with React and Vite that visualizes seismic activity data from the USGS (United States Geological Survey) earthquake feeds.

## 🚀 Features

- **Real-time Data**: Fetches live earthquake data from USGS GeoJSON feeds
- **Interactive Filtering**: Filter earthquakes by time range, magnitude, and location
- **Visual Magnitude Coding**: Color-coded earthquake markers based on magnitude intensity
- **Detailed Information**: View comprehensive earthquake details including location, depth, time, and tsunami alerts
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **External Integration**: Direct links to Google Maps and USGS event pages

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.3
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **HTTP Client**: Axios for API requests
- **Data Source**: USGS Earthquake Hazards Program API

## 📁 Project Structure

```
src/
├── components/
│   ├── EarthquakeVisualizer.jsx    # Main application component
│   ├── EarthquakeDisplay.jsx       # Detailed earthquake information display
│   ├── EarthquakeList.jsx          # Grid of earthquake cards
│   └── Legend.jsx                  # Magnitude color legend
├── pages/
│   └── HomePage.jsx                # Main page wrapper
├── utils/
│   ├── helpers.js                  # Utility functions (colors, formatting)
│   └── feedConfig.js               # USGS feed configuration
├── api/
│   └── earthquakeService.js        # API service for fetching data
├── styles.css                      # Main application styles
├── index.css                       # Global styles and CSS variables
└── App.jsx                         # Root application component
```

## 🎨 Design System

### Color Palette

- **Background**: Dark theme with `#0b0f1a` primary and `#111827` panels
- **Text**: Light gray `#e5e7eb` with muted text in `#9ca3af`
- **Accent**: Blue tones `#3b82f6` and `#60a5fa`
- **Magnitude Colors**: Heat map from light yellow to dark red

### Typography

- **System Font Stack**: system-ui, Avenir, Helvetica, Arial, sans-serif
- **Responsive Sizing**: Scales from mobile to desktop
- **Hierarchy**: Clear distinction between headings, body text, and metadata

## 🔧 Installation & Setup

1. **Clone and install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📊 Data Sources

The application uses USGS Earthquake Hazards Program real-time feeds:

### Time Ranges

- **Past Hour**: Most recent seismic activity
- **Past Day**: Last 24 hours of earthquakes
- **Past 7 Days**: Weekly earthquake summary
- **Past 30 Days**: Monthly earthquake data

### Magnitude Filters

- **All Magnitudes**: Complete dataset
- **≥ 2.5**: Moderate and above earthquakes
- **≥ 4.5**: Strong earthquakes only
- **Significant**: Major earthquakes with significant impact

## 🎯 Key Components

### EarthquakeVisualizer

Main orchestrator component that manages:

- Data fetching and state management
- Filter controls and user interactions
- Layout coordination between display and list components

### EarthquakeDisplay

Detailed view component featuring:

- Dynamic background images based on selection state
- Magnitude-coded visual indicators
- Comprehensive earthquake metadata
- External navigation buttons

### EarthquakeList

Grid-based earthquake browser with:

- Responsive card layout
- Interactive selection states
- Quick access to key information
- Magnitude-based visual coding

## 🌐 API Integration

The app integrates with USGS earthquake feeds:

```javascript
// Example API endpoint
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
```

### Data Structure

Each earthquake feature includes:

- **Geometry**: Longitude, latitude, and depth coordinates
- **Properties**: Magnitude, location description, timestamp, and metadata
- **Links**: USGS event page and additional resources

## 🎨 Styling Architecture

### CSS Custom Properties

```css
:root {
  --bg: #0b0f1a; /* Primary background */
  --panel: #111827; /* Panel backgrounds */
  --text: #e5e7eb; /* Primary text */
  --accent: #3b82f6; /* Interactive elements */
}
```

### Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (transitional layout)
- **Desktop**: > 1024px (two-column layout)

## 🔍 Features in Detail

### Filtering System

- **Time-based filtering**: Select from predefined time ranges
- **Magnitude filtering**: Set minimum magnitude thresholds
- **Location search**: Text-based location filtering
- **Real-time updates**: Automatic data refresh based on filter changes

### Visual Feedback

- **Hover states**: Interactive feedback on all clickable elements
- **Active states**: Clear indication of selected earthquakes
- **Loading states**: User feedback during data fetching
- **Error handling**: Graceful error display and recovery

### Accessibility

- **Keyboard navigation**: Full keyboard accessibility
- **Screen reader support**: Semantic HTML structure
- **Color contrast**: WCAG compliant color combinations
- **Focus indicators**: Clear focus states for all interactive elements

## 🚀 Performance Optimizations

- **Memoized computations**: Efficient filtering and sorting with useMemo
- **Optimized re-renders**: Strategic component updates
- **Responsive images**: Optimized background images from Pexels
- **Efficient data structures**: Minimal DOM updates

## 🔮 Future Enhancements

- **Map Integration**: Interactive map view with earthquake markers
- **Historical Data**: Extended time range options
- **Notifications**: Real-time alerts for significant earthquakes
- **Data Export**: CSV/JSON export functionality
- **Favorites**: Save and track specific earthquake events

## 📝 Development Notes

### Code Organization

- **Separation of Concerns**: Clear division between data, presentation, and logic
- **Reusable Components**: Modular component architecture
- **Utility Functions**: Centralized helper functions for common operations
- **Configuration Management**: Externalized API configuration

### State Management

- **Local State**: React hooks for component-level state
- **Derived State**: Computed values using useMemo for performance
- **Effect Management**: useEffect for data fetching and side effects

## 🤝 Contributing

When contributing to this project:

1. **Follow the existing code style** and component patterns
2. **Test responsive behavior** across different screen sizes
3. **Maintain accessibility standards** in all new features
4. **Update documentation** for any new functionality
5. **Verify USGS API compatibility** for any data-related changes

## 📄 License

This project is built for educational and demonstration purposes using public USGS earthquake data.

---

**Data Source**: [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/)  
**Built with**: React + Vite + Modern CSS
