import styles from './WineCompositionBars.module.css';
import { useEffect, useState } from 'react';

const WineCompositionBars = ({ detail }) => {
  const [bars, setBars] = useState([
    { name: 'CUERPO', quantity: 0 },
    { name: 'FRUTA', quantity: 0 },
    { name: 'ALCOHOL', quantity: 0 },
    { name: 'ACIDEZ', quantity: 0 },
    { name: 'TANINOS', quantity: 0 },
  ]);
  useEffect(() => {
    if (detail) {
      setBars(detail.descriptionValues);
    }
  }, [detail]);

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
