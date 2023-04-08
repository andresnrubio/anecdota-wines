import React from 'react';
import styles from './WineComposition.module.css';

function WineComposition({ malbec }) {
  return (
    <ul className={styles.list}>
      <li>
        COMPOSICIÓN: <span>{malbec.composition}</span>
      </li>
      <li>
        ALCOHOL: <span>{malbec.alcohol}</span>
      </li>
      <li>
        PH/ACIDEZ: <span>{malbec.acidity}</span>
      </li>
      <li>
        AZUCAR RESIDUAL: <span>{malbec.sugar}</span>
      </li>
      <li>
        COSECHA: <span>{malbec.harvest}</span>
      </li>
      <li>
        ROBLE: <span>{malbec.oak}</span>
      </li>
      <li>
        GUARDA: <span>{malbec.stored}</span>
      </li>
    </ul>
  );
}

export default WineComposition;
