import React from 'react';
import styles from './WineTechnicalTitle.module.css';

const WineTechnicalTitle = ({ malbec }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.technicalTitle}>POR LA ANÉCDOTA</h1>
      <h2 className={styles.technicalSubtitle}>{malbec.name}</h2>
      <h3 className={styles.location}>ALTO UGARTECHE, LUJÁN DE CUYO</h3>
      <span>MENDOZA, ARGENTINA</span>
      <h2>{malbec.year}</h2>
    </div>
  );
};

export default WineTechnicalTitle;
