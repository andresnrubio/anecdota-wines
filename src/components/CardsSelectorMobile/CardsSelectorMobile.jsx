import React, { useState } from 'react';
import styles from './CardsSelectorMobile.module.css';
import cabernetMobile from '../../assets/cabernetMobile.png';
import malbecMobile from '../../assets/malbecMobile.png';
import blendMobile from '../../assets/blendMobile.png';

const CardsSelectorMobile = ({ inactive }) => {
  const [isSelected, setIsSelected] = useState('blend');
  const [isTransitionFinish, setTransitionFinish] = useState(true);

  console.log('Carga Mobile');

  const timerForTransition = () => {
    setTransitionFinish(false);
    setTimeout(() => {
      setTransitionFinish(true);
    }, 1000);
  };

  const handleClick = (selectVar) => {
    if (isTransitionFinish) {
      setIsSelected(selectVar);
      timerForTransition();
    }
  };

  return (
    <div
      style={{ display: 'flex', position: 'relative', alignItems: 'center' }}
    >
      <div className={styles.CardsSelectorMobileContainer}>
        <div
          className={`${styles.frontCard} ${inactive ? styles.mask : ''} ${
            inactive ? styles.cardOne : ''
          } ${isSelected === 'blend' ? styles.selected : ''}`}
          onClick={() => handleClick('blend')}
        >
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${blendMobile})` }}
          >
            <div className={styles.titleLight}>
              <p className={styles.region}>2021</p>
              <h3>BLEND</h3>
              <div className={styles.region}>
                <p>MENDOZA</p>
                <p className={styles.pais}>ARGENTINA</p>
              </div>
            </div>
            <div
              style={{
                border: 'solid .5px rgba(255 , 255 , 255, 0.3)',
                width: '90%',
                margin: '0 auto',
              }}
            />
          </div>
        </div>
        <div
          className={`${styles.frontCard} ${inactive ? styles.mask : ''} ${
            inactive ? styles.cardTwo : ''
          } ${isSelected === 'malbec' ? styles.selected : ''}`}
          onClick={() => handleClick('malbec')}
        >
          <div
            className={`${styles.background} ${styles.malbec}`}
            style={{ backgroundImage: `url(${malbecMobile})` }}
          >
            <div className={styles.titleLight}>
              <p className={styles.region}>2021</p>
              <h3>MALBEC</h3>
              <div className={styles.region}>
                <p>MENDOZA</p>
                <p className={styles.pais}>ARGENTINA</p>
              </div>
            </div>
            <div
              style={{
                border: 'solid .5px rgba(255 , 255 , 255, 0.3)',
                width: '90%',
                margin: '0 auto',
              }}
            />
          </div>
        </div>
        <div
          className={`${styles.frontCard} ${inactive ? styles.cardThree : ''} ${
            isSelected === 'cabernetFranc' ? styles.selected : ''
          }`}
          onClick={() => handleClick('cabernetFranc')}
        >
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${cabernetMobile})` }}
          >
            {' '}
            <div className={styles.title}>
              <p className={styles.region}>2021</p>
              <h3>CABERNET FRANC</h3>
              <div className={styles.region}>
                <p>MENDOZA</p>
                <p className={styles.pais}>ARGENTINA</p>
              </div>
            </div>
            <div
              style={{
                border: 'solid .5px rgba(255 , 255 , 255, 0.3)',
                width: '90%',
                margin: '0 auto',
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          position: 'absolute',
          width: '100%',
          maxHeight: 'calc(1440px / 1.778)',
          margin: 'auto',
        }}
      >
        <p
          style={{
            fontFamily: 'Futura Book, Jost',
            fontSize: '280%',
            color: '#fff1d8',
            letterSpacing: '10px',
            // position: 'absolute',
            zIndex: 2,
            marginLeft: '2%',
            marginTop: '-30%',
            textShadow: 'rgb(0 0 0 / 90%) 1px 2px 3px',
            width: '100%',
            // height: '65px',
          }}
        >
          ANÉCDOTA
        </p>
      </div>
    </div>
  );
};

export default CardsSelectorMobile;
