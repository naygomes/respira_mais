import { Neighborhood } from '@/interfaces';

const getSelectOptions: (
  data: Array<Neighborhood>,
  param: keyof Neighborhood,
) => Array<any> = (data, param) => {
  return data.map((item) => {
    const valor = item[param];
    return String(valor);
  });
};

export default getSelectOptions;
