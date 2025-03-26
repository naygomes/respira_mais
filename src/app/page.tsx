'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
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

  const Button = useMemo(
    () =>
      dynamic(() => import('@/components/Button/Button'), {
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

  const router = useRouter();
  const [position, setPosition] = useState(initialPosition);
  const { neighborhoodData, error } = useNeighborhoodData(params);
  const { location } = useGeolocation();

  const handleNavigation = () => {
    router.push('/recents');
  };

  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Map location={location} position={position} />
      <div className="flex flex-col items-center justify-center w-screen">
        <Title>Mais recentes</Title>
        <Table
          hasPagination={false}
          headList={tableHeadList}
          data={neighborhoodData}
        />
        <div className="p-8 flex justify-end w-screen">
          <Button type="solid" onClick={handleNavigation}>
            Veja mais
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
