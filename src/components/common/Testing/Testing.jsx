import React, { useState } from 'react';
import styles from './Testing.module.css';
import { malbec_bg, blend_bg, cabernet_franc_bg } from '../../../assets';

const Testing = () => {
  const [isAnyCardSelected, setIsAnyCardSelected] = useState(false);
  const [nameOfSelectedCard, setNameOfSelectedCard] = useState('main');

  const handleChangeSelectedCard = (cardIndex) => {
    setNameOfSelectedCard(cardIndex);
  };

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className={styles.parent}>
      <div
        className={styles.firstCard}
        onClick={() => handleChangeSelectedCard('first')}
      >
        <div className={styles.mask}>
          <img src={malbec_bg} alt='' />
        </div>
      </div>
      <div
        className={styles.secondCard}
        onClick={() => changeSelectedCard('second')}
      >
        <div className={styles.mask}>
          <img src={cabernet_franc_bg} alt='' />
        </div>
      </div>
      <div
        className={styles.thirdCard}
        onClick={() => changeSelectedCard('third')}
      >
        <div className={styles.mask}>
          <img src={blend_bg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Testing;
