import { useEffect, useState } from 'react';
import getNeighborhoods from '@/api/getNeighborhoods';
import { FetchDataParams } from '@/interfaces';

const useNeighbordhoodData = (params: FetchDataParams) => {
  const [neighbordhoodData, setNeighbordhoodData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getNeighbordhoodData = async (params: FetchDataParams) => {
    setLoading(true);
    setError(null);

    try {
      const result = await getNeighborhoods(params);
      if (result) {
        setNeighbordhoodData(result);
      }
    } catch (err) {
      setError('Erro ao buscar os dados.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNeighbordhoodData(params);
  }, [params]);

  return { neighbordhoodData, loading, error };
};

export default useNeighbordhoodData;
