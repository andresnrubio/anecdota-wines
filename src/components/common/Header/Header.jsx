import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { isotipo, logotipo } from '../../../assets';

const Header = ({ status, inactive }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (status) {
      setScrolled(true);
    }
  }, [status]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${scrolled ? styles.headerScrolled : styles.header}`}
      style={{
        zIndex: inactive ? '0' : null,
        boxShadow: inactive ? 'none' : 'inherit',
      }}
    >
      <div className={styles.section}>
        <img src={isotipo} alt='isotipo_anecdota' className={styles.isotipo} />
        <img src={logotipo} alt='logo_anecdota' className={styles.logotipo} />
        {/* <h1 className={styles.logotipo}>ANÉCDOTA</h1> */}
      </div>
    </div>
  );
};

export default Header;
