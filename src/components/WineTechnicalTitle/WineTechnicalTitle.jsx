import React from 'react';
import styles from './WineTechnicalTitle.module.css';

const WineTechnicalTitle = ({ detail }) => {
  return (
    <div className={styles.titleContainer}>
      {/* <h1 className={styles.technicalTitle}>POR LA ANÉCDOTA</h1> */}
      <h1 className={styles.technicalTitle}>{detail.name}</h1>
      <h3 className={styles.location}>ALTO UGARTECHE, LUJÁN DE CUYO</h3>
      <p className={styles.province}>MENDOZA, ARGENTINA</p>
      <h2 className={styles.year}>{detail.year}</h2>
    </div>
  );
};

export default WineTechnicalTitle;
