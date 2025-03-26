'use client';

import { useState } from 'react';
import { Table, Text, Title } from '@/components';
import { FetchDataParams } from '@/interfaces';
import { useNeighborhoodData } from '@/hooks';
import { tableHeadList } from '@/utils';

const cta = 'Vai sair? Chega mais e aproveite o dia numa boa.';
const description =
  'No Respira+, você fica por dentro de como tá o ar em qualquer canto da cidade para aproveitar o Rio com a tranquilidade que só o carioca sabe ter.';

const Recents = () => {
  const [params, setParams] = useState<FetchDataParams>({ page: 1, limit: 10 });
  const { neighborhoodData, loading, error } = useNeighborhoodData(params);

  if (loading)
    return (
      <p className="text-secondary text-xl animate-pulse h-screen flex items-center justify-center">
        Carregando...
      </p>
    );
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="text-center mt-12 mx-32">
        <Title>{cta}</Title>
        <Text>{description}</Text>
      </div>
      <Table headList={tableHeadList} data={neighborhoodData} />
    </div>
  );
};
export default Recents;
