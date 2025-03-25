import { FetchData, FetchDataParams } from '@/interfaces';

const fetchData: FetchData = {
  async request(
    url: string,
    method = 'GET',
    data: any = null,
    customHeaders: HeadersInit = {},
  ) {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...customHeaders,
      },
    };

    if (method.toUpperCase() === 'POST' && data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  },

  async get(
    baseURL: string,
    endpoint: string,
    params: FetchDataParams = {},
    customHeaders: HeadersInit = {},
  ) {
    const queryString = new URLSearchParams(
      Object.entries(params)
        .filter(([_, value]) => value !== null && value !== undefined)
        .map(([key, value]) => [key, String(value)]),
    ).toString();
    const url = queryString
      ? `${baseURL}${endpoint}/${queryString}`
      : `${baseURL}${endpoint}`;
    return this.request(url, 'GET', null, customHeaders);
  },

  async post(
    baseURL: string,
    endpoint: string,
    data: any,
    customHeaders: HeadersInit = {},
  ) {
    const url = `${baseURL}${endpoint}`;
    return this.request(url, 'POST', data, customHeaders);
  },
};

export default fetchData;
