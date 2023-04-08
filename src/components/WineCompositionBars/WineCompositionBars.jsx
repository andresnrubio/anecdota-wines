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
    <div key={index} className={styles.bar}>
      <label for={`${index + 1}`}>{bar.name}</label>
      <div className={styles.progress}>
        {[...Array(bar.quantity)].map((_, index) => (
          <div key={index} className={styles.barFiller}></div>
        ))}
        <div style={{ borderRight: 'solid 1px black', height: '140%' }} />
      </div>
    </div>
  ));
  return <div className={styles.barContainer}>{WineCompositionBars}</div>;
};

export default WineCompositionBars;
