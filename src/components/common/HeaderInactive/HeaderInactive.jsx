import React, { useState, useEffect } from 'react';
import styles from './HeaderInactive.module.css';
import { isotipo, logotipo } from '../../../assets';

const HeaderInactive = ({ status }) => {
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
    <div className={styles.headerScrolled}>
      <div className={styles.section}>
        <img src={isotipo} alt='isotipo_anecdota' className={styles.isotipo} />
        <img
          src={logotipo}
          alt='logo_anecdota'
          className={styles.logotipo}
          style={{ display: status ? 'none' : 'block' }}
        />

        <h1
          className={styles.logotipo}
          style={{
            display: status ? 'block' : 'none',
            color: '#e1e1e1',
            fontSize: '3rem',
            filter: 'none',
            top: '60%',
          }}
        >
          Nos estamos preparando ...
        </h1>
      </div>
    </div>
  );
};

export default HeaderInactive;
