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
    <header
      className={`${scrolled ? styles.headerScrolled : styles.header}`}
      style={{
        zIndex: inactive ? '0' : null,
        boxShadow: inactive ? 'none' : 'inherit',
      }}
    >
      <nav className={styles.section}>
        <a
          aria-label='Contacto'
          href='https://wa.me/541144445264?text=%48%6F%6C%61%21%20%45%73%74%6F%79%20%69%6E%74%65%72%65%73%61%64%6F%20%65%6E%20%73%61%62%65%72%20%6D%61%73%20%73%6F%62%72%65%20%41%6E%C3%A9%63%64%6F%74%61'
          target='blank'
          rel='noreferer'
        >
          Contacto
        </a>
        <img src={isotipo} alt='isotipo_anecdota' className={styles.isotipo} />
        <img src={logotipo} alt='logo_anecdota' className={styles.logotipo} />
        <a
          aria-label='Tienda'
          role='button'
          href='https://anecdotawines.mercadoshops.com.ar/'
          target='blank'
          rel='noreferer'
        >
          Tienda
        </a>
        {/* <h1 className={styles.logotipo}>ANÉCDOTA</h1> */}
      </nav>
    </header>
  );
};

export default Header;
