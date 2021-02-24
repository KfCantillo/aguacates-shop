import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

import productsService from '@services/productsService';

const ProductDetails = () => {
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
      {productDetail && <ProductSummary product={productDetail} />}
    </Layout>
  );
};

export default ProductDetails;
