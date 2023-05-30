import { blend_bg, dot, isotipo, logotipo } from '../../assets';
import CardsSelector from '../CardsSelector/CardsSelector';
import InactiveScreenCarousel from '../InactiveScreenCarousel/InactiveScreenCarousel';
import Header from '../common/Header/Header';
import styles from './InactiveScreen.module.css';
import React from 'react';

const InactiveScreen = () => {
  return (
    <>
      {/* <InactiveScreenCarousel /> */}
      <div className={styles.container}>
        <CardsSelector inactive={true} />
      </div>
    </>
  );
};

export default InactiveScreen;
