import React from 'react';

function WineComposition({
  composition,
  alcohol,
  acidity,
  sugar,
  harvest,
  oak,
  stored,
}) {
  return (
    <ul>
      <li>COMPOSICIÓN: {composition}</li>
      <li>ALCOHOL: {alcohol}</li>
      <li>PH/ACIDEZ: {acidity}</li>
      <li>AZUCAR RESIDUAL: {sugar}</li>
      <li>COSECHA: {harvest}</li>
      <li>ROBLE: {oak}</li>
      <li>GUARDA: {stored}</li>
    </ul>
  );
}

export default WineComposition;
