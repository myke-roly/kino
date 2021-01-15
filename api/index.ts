import { fetchModule, TYPES, Methods, FetchModuleI } from './utils';

export { TYPES };

export const httpModules = {
  async get(options: FetchModuleI) {
    try {
      const { response, data } = await fetchModule(options);
      return { response, data };
    } catch (error) {
      console.error(`httpModules error [GET] -> ${error}`);
    }
  },
  // Payload tiene que tener JSON.stringify(payload)
  async post(options: FetchModuleI) {
    try {
      const { response, data } = await fetchModule(options);
      return { response, data };
    } catch (error) {
      console.error(`httpModules error [POST]-> ${error}`);
    }
  },
  // Payload tiene que tener JSON.stringify(payload)
  async put(options: FetchModuleI) {
    try {
      const { response, data } = await fetchModule(options);
      return { response, data };
    } catch (error) {
      console.error(`httpModules error [PUT] -> ${error}`);
    }
  },
  async delete(url: string, token: string) {
    try {
      const { response, data } = await fetchModule({ url, token, method: Methods.delete });
      return { response, data };
    } catch (error) {
      console.error(`httpModules error [DELETE] -> ${error}`);
    }
  },
};

export default httpModules;
