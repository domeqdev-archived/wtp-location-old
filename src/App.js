import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Vehicles from './components/Vehicles';

export default function App() {
  return (
    <>
      <MapContainer center={localStorage.bounds?.split(",") || [52.22983095298667, 21.0117354814593]} zoom={localStorage.zoom || 16} minZoom={11}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Vehicles />
      </MapContainer>
    </>
  );
}