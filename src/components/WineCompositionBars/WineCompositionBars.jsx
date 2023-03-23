import styles from './WineCompositionBars.module.css';
import { useState } from 'react';

const WineCompositionBars = ({ malbec }) => {
  const [bars, setBars] = useState([
    { name: 'CUERPO', quantity: 6 },
    { name: 'FRUTA', quantity: 4 },
    { name: 'ALCOHOL', quantity: 3 },
    { name: 'ACIDEZ', quantity: 5 },
    { name: 'TANINOS', quantity: 5 },
  ]);
  const WineCompositionBars = bars.map((bar, index) => (
    <div key={index}>
      <label for={`${index + 1}`}>{bar.name}</label>
      <progress id={`${index + 1}`} value={bar.quantity} max='8'></progress>
    </div>
  ));
  return <div>{WineCompositionBars}</div>;
};

export default WineCompositionBars;
