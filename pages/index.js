import { useEffect, useState } from 'react';

import productsService from '../services/productsService.js';

const Home = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(async () => {
    const products = await productsService.getAllProducts();
    console.log(products);
    if (products.success) {
      setProductsList(products.data);
    }
  }, []);

  return (
    <div>
      <h1>Hola Perriiitos!!!!</h1>
      {productsList.map(product => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default Home;
