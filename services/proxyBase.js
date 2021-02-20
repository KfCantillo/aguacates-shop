import axios from 'axios';

const baseURL = '/api'; //getBaseUrlApi();
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
