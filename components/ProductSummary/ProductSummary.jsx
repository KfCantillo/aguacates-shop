import { Item, Label, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import AddToCart from './AddToCart';
import ProductAttributes from './ProductAttributes';

const ProductSummary = ({ product }) => {
  const { back } = useRouter();

  return (
    <>
      <Button
        basic
        content='Back'
        icon='arrow left'
        onClick={() => back()}
        loading={false}
        disabled={false}
      />
      <Item.Group as='section'>
        <Item style={{ alignItems: 'center' }}>
          <Item.Image size='medium'>
            <img src={product.image} alt={product.name} />
          </Item.Image>
          <Item.Content>
            <Item.Header as='h1'>{product.name}</Item.Header>
            <Item.Description>
              <p>COP ${product.price}</p>
              <Label>{`SKU: ${product.sku}`}</Label>
            </Item.Description>
            <Item.Extra>
              <AddToCart product={product} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <ProductAttributes {...product.attributes} />
    </>
  );
};

export default ProductSummary;
