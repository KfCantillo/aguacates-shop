import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'semantic-ui-react';

import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

import productsService from '@services/productsService';

/* Use for create static sites on build */
/* export const getStaticPaths = async () => {
  const products = await productsService.getAllProducts();
  let productsList = [];
  if (products.success) {
    productsList = products.data;
  }
  const paths = productsList.map(({ id }) => ({ params: { productId: id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await productsService.getProductById(params.productId);
  let productDetail = {};
  if (product.success) {
    productDetail = product.data;
  }

  return {
    props: {
      productDetail,
    },
  };
}; */

const ProductDetails = (/*{ productDetail }*/) => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(async () => {
    const { productId } = router.query;
    const product = await productsService.getProductById(productId);
    console.log(product);
    if (product.success) {
      setProductDetail(product.data);
    }
  }, []);

  const router = useRouter();
  return (
    <Layout>
      <Container text>{productDetail && <ProductSummary product={productDetail} />}</Container>
    </Layout>
  );
};

export default ProductDetails;
