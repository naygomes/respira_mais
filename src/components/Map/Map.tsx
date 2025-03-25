'use client';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { HOST_MAP } from '../../../settings';

interface MapProps {
  zoom?: number;
  position: { lat: number; lng: number };
}

const Map = ({ position, zoom = 12 }: MapProps) => {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={HOST_MAP}
      />
      <Marker position={position}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
