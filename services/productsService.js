import proxyBase from './proxyBase';

class productsService {
  getAllProducts = async () => {
    return proxyBase
      .get('api/avo')
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  getProductById = async (id = '') => {
    return proxyBase
      .get(`api/avo/${id}`)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
}

export default new productsService();
