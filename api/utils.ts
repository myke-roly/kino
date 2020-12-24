import { URL_BASE } from './constants';

export enum Methods {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  options = 'OPTIONS',
  delete = 'DELETE',
}

export interface RequestOptionsI {
  crossDomain?: boolean;
  method?: string;
  headers?: {};
  body?: [] | any;
}

export const TYPES = {
  json: 'application/json',
  multipart: 'multipart/form-data',
  default: 'application/x-www-form-urlencoded;charset=UTF-8',
};

export interface FetchModuleI {
  url?: string;
  token?: string | null;
  method: string;
  payload?: {} | null;
  type?: {};
}

// export const fetchModule: FetchModuleI = async(url, token = null, method = Methods.get, payload = null, type = TYPES.default): Promise<any> => {
export const fetchModule = async (options: FetchModuleI): Promise<any> => {
  const { url, token, method, payload, type } = options;

  const headers = token
    ? {
        Accept: 'application/json',
        'Content-Type': type,
        Authorization: `Bearer ${token}`,
      }
    : {
        Accept: 'application/json',
        'Content-Type': type,
      };

  const requestOptions: RequestOptionsI = {
    crossDomain: true,
    method: method,
    headers: headers,
    body: payload,
  };

  try {
    const response = await fetch(`${URL_BASE}${url}`, requestOptions);
    const textBody = await response.text();
    const data = textBody.length > 0 ? JSON.parse(textBody) : null;
    return { response, data };
  } catch (error) {
    console.log(`fetchModule error -> ${error}`);
    return { response: { status: -1, debug: error }, data: -1 };
  }
};
