'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useGeolocation from '@/hooks/useGeolocation';
import getNeighborhoods from '@/api/getNeighborhoods';

const initialPosition = { lat: -22.897, lng: -43.338 };
const headList = [
  'Bairro',
  'Região',
  'IQAr',
  'Nível de Qualidade do Ar',
  'Fonte',
  'Data',
  'Recomendação',
];
const loadingClasses =
  'text-secondary text-xl animate-pulse h-screen flex items-center justify-center';
const LoadingComponent = <p className={loadingClasses}>Carregando...</p>;

function Home() {
  const [position, setPosition] = useState(initialPosition);
  const [tableData, setTableData] = useState([]);

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

  const getTableData = async () => {
    const result = await getNeighborhoods();
    if (result) {
      setTableData(result);
      return result;
    }
    return undefined;
  };

  useEffect(() => {
    getTableData();
  }, []);

  const { location, error } = useGeolocation();

  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Map location={location} position={position} />
      <div className="flex flex-col items-center justify-center w-screen">
        <Title>Mais recentes</Title>
        <Table mainPage headList={headList} data={tableData} />
      </div>
    </>
  );
}

export default Home;
