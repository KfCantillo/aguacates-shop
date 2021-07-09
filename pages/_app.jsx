import Head from 'next/head';
import CartProvider from '@store/Cart';

import 'semantic-ui-css/semantic.min.css';
import './global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>KC Fashion</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta
          name='description'
          content='En K.C Fashion Ofrecemos las mejores prendas de vestir para dama. KC Fashion está siempre a la cabeza de la moda. Visítanos para que te sientas bella y sexy.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='http://kcfashion.store/' />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
};

export default MyApp;
