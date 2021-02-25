import { Card } from 'semantic-ui-react';
import Link from 'next/link';

const mapProductsToCards = products =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href='/product/[id]' as={`/product/${id}`} passHref>
      <Card
        as='a'
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'dimgray' }}>COP ${price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }) => (
  <Card.Group itemsPerRow={4} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
);

export default ProductList;
