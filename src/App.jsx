import { useState } from "react";
import MapComponent from "./components/MapComponent";
import WeatherFetch from "./components/WeatherFetch";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [coords, setCoords] = useState({ lat: null, lng: null });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather Map App</h1>
      <p>
        Click anywhere on the map to get weather information for that location.
      </p>

      <MapComponent setCoords={setCoords} />

      {coords.lat && coords.lng && (
        <p>
          Selected coordinates: {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
        </p>
      )}

      <WeatherFetch coords={coords} />
    </div>
  );
};

export default App;
