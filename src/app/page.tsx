'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import useGeolocation from '@/hooks/useGeolocation';

const initialPosition = { lat: -22.897, lng: -43.338 };

const loadingClasses =
  'text-secondary text-xl animate-pulse h-screen flex items-center justify-center';
const LoadingComponent = <p className={loadingClasses}>Carregando...</p>;

function Home() {
  const [position, setPosition] = useState(initialPosition);

  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/Map'), {
        loading: () => LoadingComponent,
        ssr: false,
      }),
    [],
  );

  const { location, error } = useGeolocation();

  if (error) return <p>Erro: {error}</p>;

  return (
    <div id="page-map" className="pt-23">
      <Map location={location} position={position} />
    </div>
  );
}

export default Home;
