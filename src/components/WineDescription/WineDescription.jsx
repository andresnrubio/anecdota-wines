import React from 'react';
import styles from './WineDescription.module.css';

const WineDescription = ({ detail }) => {
  return (
    <div className={styles.descriptionContainer}>
      <h2>DESCRIPCIÓN</h2>
      <p className={styles.description}>{detail ? detail.description : null}</p>
    </div>
  );
};

export default WineDescription;
