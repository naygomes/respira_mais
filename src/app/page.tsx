'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

const initialPosition = { lat: -22.897, lng: -43.338 };

function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/Map'), {
        loading: () => (
          <p className="text-secondary text-xl animate-pulse h-screen flex items-center justify-center">
            Carregando...
          </p>
        ),
        ssr: false,
      }),
    [],
  );

  const [position, setPosition] = useState(initialPosition);

  return (
    <div id="page-map">
      <Map zoom={12} position={position} />
    </div>
  );
}

export default Home;
