import { useRouter } from 'next/router';
import { Container } from 'semantic-ui-react';

import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

import productsService from '@services/productsService';

export const getStaticPaths = async () => {
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
};

const ProductDetails = ({ productDetail }) => {
  const router = useRouter();
  return (
    <Layout>
      <Container text>
        {productDetail && <ProductSummary product={productDetail} />}
      </Container>
    </Layout>
  );
};

export default ProductDetails;
