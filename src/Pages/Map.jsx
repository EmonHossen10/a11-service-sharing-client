import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [51.505, -0.09]; // Default position (latitude, longitude)
  return (
    <div className="my-10">
        <h1 className="text-4xl font-bold text-center mb-5 "> Our company Location</h1>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>A sample popup. Change this with your information.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
