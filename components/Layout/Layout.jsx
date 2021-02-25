import { Container } from 'semantic-ui-react';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

import styles from './layout.module.css';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Container as='main' text className={styles.container}>
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;
