export const HOST_MAP =
  process.env.NEXT_PUBLIC_HOST_MAP ??
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const HOST_API =
  process.env.NEXT_PUBLIC_HOST_API ??
  'https://67e2530e97fc65f535357469.mockapi.io';

export const BASE_URL = HOST_API + '/respira_mais/v1';

export const NEIGHBORHOODS_ENDPOINT = '/neighborhoods';
