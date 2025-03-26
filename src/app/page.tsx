'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useGeolocation, useNeighborhoodData } from '@/hooks';
import { FetchDataParams } from '@/interfaces';
import { tableHeadList, initialPosition } from '@/utils';

const params: FetchDataParams = {
  orderBy: 'createdAt',
  order: 'desc',
  page: 1,
  limit: 10,
};

const loadingClasses =
  'text-secondary text-xl animate-pulse h-screen flex items-center justify-center';
const LoadingComponent = <p className={loadingClasses}>Carregando...</p>;

function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map/Map'), {
        loading: () => LoadingComponent,
        ssr: false,
      }),
    [],
  );

  const Title = useMemo(
    () =>
      dynamic(() => import('@/components/Title/Title'), {
        ssr: false,
      }),
    [],
  );

  const Table = useMemo(
    () =>
      dynamic(() => import('@/components/Table/Table'), {
        loading: () => LoadingComponent,
        ssr: false,
      }),
    [],
  );

  const [position, setPosition] = useState(initialPosition);
  const { neighbordhoodData, error } = useNeighborhoodData(params);
  const { location } = useGeolocation();

  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Map location={location} position={position} />
      <div className="flex flex-col items-center justify-center w-screen">
        <Title>Mais recentes</Title>
        <Table mainPage headList={tableHeadList} data={neighbordhoodData} />
      </div>
    </>
  );
}

export default Home;
