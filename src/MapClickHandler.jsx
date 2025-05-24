import { useMapEvents } from "react-leaflet";

const MapClickHandler = ({ setCoords }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setCoords({ lat, lng });
    },
  });

  return null;
};

export default MapClickHandler;
