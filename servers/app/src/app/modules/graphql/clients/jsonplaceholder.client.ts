import axios, { AxiosInstance } from 'axios';
import { setupCache } from 'axios-cache-adapter';

export const JsonPlaceholderClientProvider = {
  provide: 'JsonPlaceholderClient',
  useFactory: (): AxiosInstance => {

    const cache = setupCache({
      maxAge: 10 * 60000,
    });

    return axios.create({
      baseURL: `https://jsonplaceholder.typicode.com`,
      adapter: cache.adapter,
    });

  },
};
