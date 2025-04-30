import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <span className={styles.logo}>Software Hub</span>
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Products
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Support
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <a href="#" className={styles.searchBtn}>
            <span>Search</span>
          </a>
          <a href="#" className={styles.accountBtn}>
            <span>Account</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 