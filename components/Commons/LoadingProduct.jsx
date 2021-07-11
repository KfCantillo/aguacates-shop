import { Card } from 'semantic-ui-react';

import styles from './loadingProduct.module.css';

const LoadingProduct = ({ repeat = 0 }) => {
  const repeatArr = [...new Array(repeat).keys()];
  return (
    <Card.Group itemsPerRow={4} stackable>
      {repeatArr.map(i => (
        <Card
          key={'card' + i}
          as='a'
          className={styles.card}
          header={<div className={styles.header}></div>}
          image={<div className={styles.image}></div>}
          meta={<div className={styles.meta}></div>}
        />
      ))}
    </Card.Group>
  );
};

export default LoadingProduct;
