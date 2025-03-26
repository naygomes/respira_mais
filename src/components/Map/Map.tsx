'use client';

import { MapContainer, Marker, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapProps } from '@/interfaces';
import { HOST_MAP } from '../../../settings';
import './Map.css';

const Map = ({ position, location, zoom = 12 }: MapProps) => {
  const bairroCoordinates: [number, number][] = [
    [-23.034538, -43.492552],
    [-23.012702, -43.390679],
    [-22.994675, -43.390867],
    [-22.995196, -43.432859],
    [-23.020379, -43.508373],
    [-23.03698, -43.49891],
  ];

  return (
    <div id="page-map" className="pt-22">
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
        <Marker position={location}>
          <Popup></Popup>
        </Marker>
        <Polygon positions={bairroCoordinates} color="blue">
          <Popup>Informações sobre o bairro.</Popup>
        </Polygon>
      </MapContainer>
    </div>
  );
};

export default Map;
