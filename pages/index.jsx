import { useEffect, useState } from 'react';
import Layout from '@components/Layout/Layout';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import ProductList from '@components/ProductList/ProductList';

import productsService from '../services/productsService.js';

export const getServerSideProps = async () => {
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
};

const Home = ({ productsList }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productsList} />
    </Layout>
  );
};

export default Home;
