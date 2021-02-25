import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Container, Transition } from 'semantic-ui-react';

import { Avocado } from '@components/SVGIcons';
import ShoppingCartIcon from './ShoppingCartIcon';
import { useCart } from '@store/Cart';

import styles from './navbar.module.css';

const Navbar = () => {
  const { pathname } = useRouter();
  const { count: cartCount } = useCart();
  const [visible, setVisible] = useState(true);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      setCount(0);
      setVisible(prevVisible => !prevVisible);
    }
  }, [count]);

  useEffect(() => {
    let interval = setInterval(() => setCount(count + 1), 1000);
    return () => {
      window.clearInterval(interval);
      interval = null;
    };
  });

  return (
    <Menu size='huge' borderless pointing as='header' className={styles.menu}>
      <Container text className={styles.container}>
        <Link href='/' passHref>
          <Menu.Item
            active={pathname === '/'}
            title='Inicio | Todos los productos'
          >
            <Transition
              animation='jiggle'
              visible={visible}
              duration={900}
              onComplete={() => setCount(prevCount => prevCount + 1)}
            >
              <Avocado />
            </Transition>
            Avo Store
          </Menu.Item>
        </Link>
        <Menu.Menu position='right'>
          <Link href='/cart' passHref>
            <Menu.Item active={pathname === '/cart'}>
              <ShoppingCartIcon cartCount={cartCount} name='Canasta' />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
