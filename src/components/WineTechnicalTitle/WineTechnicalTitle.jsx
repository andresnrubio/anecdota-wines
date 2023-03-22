import React from 'react';
import styles from './WineTechnicalTitle.module.css';

const WineTechnicalTitle = ({ malbec }) => {
  return (
    <div>
      <h1>POR LA ANÉCDOTA</h1>
      <h2>{malbec.name}</h2>
      <h3>ALTO UGARTECHE, LUJÁN DE CUYO</h3>
      <span>MENDOZA, ARGENTINA</span>
      <h2>{malbec.year}</h2>
    </div>
  );
};

export default WineTechnicalTitle;
