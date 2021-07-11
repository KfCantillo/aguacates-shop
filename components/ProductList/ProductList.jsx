import { Card } from 'semantic-ui-react';
import Link from 'next/link';
import Image from 'next/image';

const ProductList = ({ products }) => (
  <Card.Group itemsPerRow={4} stackable>
    {products.map(({ name, id, price, image }) => (
      <Link key={id} href={`/product/${id}`} passHref>
        <Card
          as='a'
          header={name}
          image={<Image src={image} width='333' height='333' />}
          meta={<Card.Meta style={{ color: 'dimgray' }}>COP ${price}</Card.Meta>}
        />
      </Link>
    ))}
  </Card.Group>
);

export default ProductList;
