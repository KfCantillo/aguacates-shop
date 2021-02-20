import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import productsService from '../../services/productsService';

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState({});

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
    <div>
      Pagina de ProductDetails perros -- ID: {router.query.productId}
      <p>{productDetail.name}</p>
    </div>
  );
};

export default ProductDetails;
