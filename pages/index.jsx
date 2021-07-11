import { useEffect, useState } from 'react';
import Layout from '@components/Layout/Layout';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import ProductList from '@components/ProductList/ProductList';
import LoadingProductList from '@components/Commons/LoadingProduct';

import productsService from '@services/productsService.js';
/* Use for pre rendering products */
/* export const getServerSideProps = async () => {
  const products = await productsService.getAllProducts();
  let productsList = [];
  if (products.success) {
    productsList = products.data;
  }

  return {
    props: {
      productsList,
    },
  };
}; */

const Home = (/*{ productsList }*/) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(async () => {
    const products = await productsService.getAllProducts();
    console.log(products);
    if (products.success) {
      setProductsList(products.data);
    }
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      {productsList.length ? (
        <ProductList products={productsList} />
      ) : (
        <LoadingProductList repeat={8} />
      )}
    </Layout>
  );
};

export default Home;
