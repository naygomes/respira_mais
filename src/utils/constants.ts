import { Coordinates } from '@/interfaces';

export const tableHeadList: Array<string> = [
  'Bairro',
  'Região',
  'IQAr',
  'Nível de Qualidade do Ar',
  'Fonte',
  'Data',
  'Recomendação',
];

export const iqarLevels: Array<string> = ['Bom', 'Moderado', 'Ruim', 'Péssimo'];

export const initialPosition: Coordinates = { lat: -22.897, lng: -43.338 };
