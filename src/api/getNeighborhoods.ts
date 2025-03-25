import { BASE_URL, NEIGHBORHOODS_ENDPOINT } from '../../settings';
import { fetchData } from '@/utils';

const getNeighborhoods = async () => {
  try {
    const location = await fetchData.get(
      BASE_URL,
      `/${NEIGHBORHOODS_ENDPOINT}`,
    );
    return location;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default getNeighborhoods;
