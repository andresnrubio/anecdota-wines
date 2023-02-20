import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'
import { isotipo, logotipo } from '../../../assets'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <div className={`${scrolled ? styles.headerScrolled : styles.header}`}>
        <img src={isotipo} alt="isotipo_anecdota" className={styles.isotipo}/>
        {/* <img src={logotipo} alt="logo_anecdota" className={styles.logotipo}/> */}
        <h1 className={styles.logotipo}>ANÉCDOTA</h1>
    </div>
  )
}

export default Header