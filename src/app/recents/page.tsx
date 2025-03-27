'use client';

import { useEffect, useState } from 'react';
import { Filter, Pagination, Table, Text, Title } from '@/components';
import {
  FetchDataParams,
  FilterParams,
  OrderingParams,
  PaginationParams,
} from '@/interfaces';
import { useNeighborhoodData } from '@/hooks';
import { tableHeadList } from '@/utils';

const cta = 'Vai sair? Chega mais e aproveite o dia numa boa.';
const description =
  'No Respira+, você fica por dentro de como tá o ar em qualquer canto da cidade para aproveitar o Rio com a tranquilidade que só o carioca sabe ter.';

const Recents = () => {
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
  });
  const [filter, setFilter] = useState<FilterParams>({
    name: '',
    iqarLevel: '',
  });
  const [order, setOrder] = useState<OrderingParams>({
    orderBy: 'createdAt',
    order: 'desc',
  });

  const [params, setParams] = useState<FetchDataParams>({
    ...pagination,
    ...filter,
    ...order,
  });

  const { neighborhoodData, allData, loading, error } =
    useNeighborhoodData(params);

  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(allData.length / pagination.limit),
  );

  const handlePagination: (action: string) => void = (action) => {
    if (action === 'next' && pagination.page < 5) {
      setPagination((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
    } else if (action === 'prev' && pagination.page > 1) {
      setPagination((prev) => ({
        ...prev,
        page: prev.page - 1,
      }));
    }
  };

  const handleFilter = (filter: FilterParams) => {
    setFilter(filter);
    setPagination({
      ...pagination,
      page: 1,
    });
  };

  useEffect(() => {
    if (allData) {
      setTotalPages(Math.ceil(allData.length / pagination.limit));
    }
  }, [allData, pagination.limit]);

  useEffect(() => {
    setParams({
      ...pagination,
      ...filter,
      ...order,
    });
  }, [pagination, filter, order]);

  if (loading)
    return (
      <p className="text-secondary text-xl animate-pulse h-screen flex items-center justify-center">
        Carregando...
      </p>
    );
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="text-center my-12 mx-32">
        <Title>{cta}</Title>
        <Text>{description}</Text>
      </div>
      <Filter neighborhoodsData={allData} onClick={handleFilter} />
      <Table headList={tableHeadList} data={neighborhoodData} />
      {totalPages > 1 && (
        <Pagination
          page={pagination.page}
          totalPages={totalPages}
          onPageChange={handlePagination}
        />
      )}
    </div>
  );
};
export default Recents;
