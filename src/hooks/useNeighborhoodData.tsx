import { useEffect, useState } from 'react';
import getNeighborhoods from '@/api/getNeighborhoods';
import { FetchDataParams, Neighborhood } from '@/interfaces';

const useNeighborhoodData = (params?: FetchDataParams) => {
  const [neighborhoodData, setNeighborhoodData] = useState<any[]>([]);
  const [allData, setAllData] = useState<Array<Neighborhood>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getNeighborhoodData = async (queryParams?: FetchDataParams) => {
    setLoading(true);
    setError(null);

    try {
      const result = await getNeighborhoods(queryParams);
      if (result) {
        if (!queryParams) {
          setAllData(result);
        }
        setNeighborhoodData(result);
      }
    } catch (err) {
      setError('Erro ao buscar os dados.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNeighborhoodData();
  }, []);

  useEffect(() => {
    getNeighborhoodData(params);
  }, [params]);

  return { neighborhoodData, allData, loading, error };
};

export default useNeighborhoodData;
