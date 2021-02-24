import React from 'react';
import Navbar from '@components/Navbar';

import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>Este es el footer</footer>
    </div>
  );
};

export default Layout;
