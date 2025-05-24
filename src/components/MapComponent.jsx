import { MapContainer, TileLayer } from "react-leaflet";
import MapClickHandler from "../MapClickHandler";

const MapComponent = ({ setCoords }) => {
  return (
    <MapContainer
      center={[17.4386, 73.2066]}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler setCoords={setCoords} />
    </MapContainer>
  );
};

export default MapComponent;
