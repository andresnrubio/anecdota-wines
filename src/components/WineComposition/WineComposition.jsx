import React from 'react';
import styles from './WineComposition.module.css';

function WineComposition({ malbec }) {
  return (
    <ul>
      <li>COMPOSICIÓN: {malbec.composition}</li>
      <li>ALCOHOL: {malbec.alcohol}</li>
      <li>PH/ACIDEZ: {malbec.acidity}</li>
      <li>AZUCAR RESIDUAL: {malbec.sugar}</li>
      <li>COSECHA: {malbec.harvest}</li>
      <li>ROBLE: {malbec.oak}</li>
      <li>GUARDA: {malbec.stored}</li>
    </ul>
  );
}

export default WineComposition;
