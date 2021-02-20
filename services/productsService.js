import proxyBase from './proxyBase';

class productsService {
  getAllProducts = () => {
    return proxyBase
      .get('/avo')
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  getProductById = (id = '') => {
    return proxyBase
      .get(`/avo/${id}`)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
}

export default new productsService();
