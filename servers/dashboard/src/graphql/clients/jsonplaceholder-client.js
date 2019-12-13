import * as axios from 'axios'
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 10 * 60000,
});

export const client = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  adapter: cache.adapter,
});
