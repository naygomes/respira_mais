'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map/Map'), {
  ssr: false,
  loading: () => (
    <p className="text-secondary text-xl animate-pulse h-screen flex items-center justify-center">
      Carregando...
    </p>
  ),
});

const initialPosition = { lat: -22.897, lng: -43.338 };

function Home() {
  const [position, setPosition] = useState(initialPosition);

  return (
    <div id="page-map">
      <Map zoom={12} position={position} />
    </div>
  );
}

export default Home;
