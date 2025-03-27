'use client';

import { MapContainer, Marker, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapProps } from '@/interfaces';
import { HOST_MAP } from '../../../settings';
import './Map.css';
import { useNeighborhoodData } from '@/hooks';
import Card from '../Card/Card';
import { iqarLevels } from '@/utils';

const Map = ({ position, location, zoom = 12 }: MapProps) => {
  const { allData, error } = useNeighborhoodData();

  return (
    <div id="page-map">
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
          <Popup>Você está aqui!</Popup>
        </Marker>
        {allData &&
          allData.map((item) => (
            <Polygon key={item.id} positions={item.coordinates} color="blue">
              <Popup maxWidth={1000}>
                <Card
                  title={item.name}
                  iqarLevel={item.iqarLevel}
                  recommendation={item.recommendations}
                  chartData={item.lastMeasures}
                />
              </Popup>
            </Polygon>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
