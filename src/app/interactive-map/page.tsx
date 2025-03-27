'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGeolocation } from '@/hooks';
import { initialPosition } from '@/utils';

const loadingClasses =
  'text-secondary text-xl animate-pulse h-screen flex items-center justify-center';
const LoadingComponent = <p className={loadingClasses}>Carregando...</p>;

const InteractiveMap = () => {
  const [position, setPosition] = useState(initialPosition);
  const { location } = useGeolocation();

  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/Map'), {
        loading: () => LoadingComponent,
        ssr: false,
      }),
    [],
  );
  return <Map location={location} position={position} />;
};

export default InteractiveMap;
