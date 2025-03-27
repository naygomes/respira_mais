'use client';

import { useEffect, useState } from 'react';
import { Button, SelectInput } from '@/components';
import { FilterProps } from '@/interfaces';
import { getSelectOptions, iqarLevels } from '@/utils';

const Filter = ({ neighborhoodsData, onClick }: FilterProps) => {
  const [neighborhoods, setNeighborhood] = useState<Array<string>>([]);
  const [name, setName] = useState<string>('');
  const [iqarLevel, setIqarLevel] = useState<string>('');

  useEffect(() => {
    if (neighborhoodsData) {
      const neighborhoods = getSelectOptions(neighborhoodsData, 'name');
      setNeighborhood(neighborhoods);
    }
  }, [neighborhoodsData]);

  return (
    <div className="m-8 p-8 border border-primary rounded-xl w-19/20 flex flex-col md:flex-row  items-center justify-between gap-4">
      <SelectInput
        label="Selecione o bairro"
        placeholder="Nenhum"
        options={neighborhoods}
        onChange={setName}
      ></SelectInput>
      <SelectInput
        label="Selecione o nível de qualidade do ar"
        placeholder="Nenhum"
        options={iqarLevels}
        onChange={setIqarLevel}
      ></SelectInput>
      <Button onClick={() => onClick({ name: name, iqarLevel: iqarLevel })}>
        Filtrar
      </Button>
    </div>
  );
};

export default Filter;
