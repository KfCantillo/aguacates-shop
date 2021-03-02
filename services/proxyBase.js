import axios from 'axios';
import { getBaseUrlApi } from 'config/helpers';

const baseURL = getBaseUrlApi();
console.info('baseURL', baseURL);
const getConfigAxios = () => {
  return {
    baseURL,
    timeout: 110000,
    headers: {
      Authorization: `Bearer token`,
    },
  };
};

const proxyBase = axios.create(getConfigAxios());

export default proxyBase;
