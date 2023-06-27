import React from 'react';
import styles from './WineComposition.module.css';

function WineComposition({ detail }) {
  return (
    <ul className={styles.list}>
      <li>
        COMPOSICIÓN: <span>{detail.composition}</span>
      </li>
      <li>
        ALCOHOL: <span>{detail.alcohol}</span>
      </li>
      <li>
        PH/ACIDEZ: <span>{detail.acidity}</span>
      </li>
      <li>
        AZUCAR RESIDUAL: <span>{detail.sugar}</span>
      </li>
      <li>
        COSECHA: <span>{detail.harvest}</span>
      </li>
      <li>
        ROBLE: <span>{detail.oak}</span>
      </li>
      <li>
        GUARDA: <span>{detail.stored}</span>
      </li>
    </ul>
  );
}

export default WineComposition;
