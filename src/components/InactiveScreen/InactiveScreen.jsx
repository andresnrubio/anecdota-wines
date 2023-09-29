import CardsSelector from '../CardsSelector/CardsSelector';
import CardsSelectorMobile from '../CardsSelectorMobile/CardsSelectorMobile';
import styles from './InactiveScreen.module.css';
import React from 'react';

const InactiveScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <InactiveScreenCarousel /> */}
      <div className={styles.container}>
        <CardsSelector inactive={true} className={styles.cardsDesktop} />
        <CardsSelectorMobile inactive={true} className={styles.cardsMobile} />
      </div>
      <h1 className={styles.comingSoon}>Proximamente...</h1>
    </div>
  );
};

export default InactiveScreen;
