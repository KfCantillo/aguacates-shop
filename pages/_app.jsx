import CartProvider from '@store/Cart';

import 'semantic-ui-css/semantic.min.css';
import './global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
