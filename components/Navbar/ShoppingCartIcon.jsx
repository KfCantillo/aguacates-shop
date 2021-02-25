import { Basket } from '@components/SVGIcons';

import style from './shoppingCartIcon.module.css';

const ShoppingCartIcon = ({ cartCount, name }) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`;
    }
    if (cartCount > 9) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      );
    }
    return `(${cartCount})`;
  };

  return (
    <div className={style.container}>
      <Basket />
      <div className={style.text}>
        {` ${name} `}
        {showCartCount()}
      </div>
    </div>
  );
};

export default ShoppingCartIcon;
