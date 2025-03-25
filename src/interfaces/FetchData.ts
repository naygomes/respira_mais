export interface FetchDataParams {
  [key: string]: string | number | boolean | null;
}

export interface FetchData {
  request(
    url: string,
    method?: string,
    data?: any,
    customHeaders?: HeadersInit,
  ): Promise<any>;
  get(
    baseURL: string,
    endpoint: string,
    params?: FetchDataParams,
    customHeaders?: HeadersInit,
  ): Promise<any>;
  post(
    baseURL: string,
    endpoint: string,
    data: any,
    customHeaders?: HeadersInit,
  ): Promise<any>;
}
