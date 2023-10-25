import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer.jsx';
import CardsSelector from '../../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../../components/CardsSelectorMobile/CardsSelectorMobile.jsx';

import WineTechnicalSheet from '../../components/WineTechnicalSheet/WineTechnicalSheet';
import wineTechinalData from '../../data/wineTechinalData.json';

import { useState } from 'react';
import InactiveScreen from '../../components/InactiveScreen/InactiveScreen';
import HeaderInactive from '../../components/common/HeaderInactive/HeaderInactive';
import Testing from '../../components/common/Testing/Testing.jsx';
import { dot } from '../../assets';
import HeroSection from '../../components/HeroSection/HeroSection';
import { useRef } from 'react';

const Home = () => {
  const [isActive, setIsActive] = useState(true);

  return isActive ? (
    <>
      <main className={styles.desktopContainer}>
        {/* <HeroSection /> */}
        {/* <CardsSelectorMobile /> */}
        <section className={styles.hero}>
          <Header />
          <CardsSelector />
          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              width: '100%',
              height: '100%',
              // top: '45%',
              // right: '35%',
              gap: '150px',
            }}
          >
            <p
              style={{
                fontFamily: 'Futura Book',
                fontSize: '65px',
                color: '#fff1d8',
                letterSpacing: '10px',
                // position: 'absolute',
                zIndex: 10,
                margin: 'auto',
                textShadow: '1px 1px 3px #816d70e6',
                width: '100%',
              }}
            >
              ANÉCDOTA
            </p>
            <img
              src={dot}
              alt=''
              style={{
                position: 'absolute',
                zIndex: 9,
                width: 'calc(100vw / 12.5)',
                height: 'calc(100vw / 12.5)',
                minHeight: '120px',
                minWidth: '120px',
                maxWidth: '230px',
                maxHeight: '230px',
                margin: '50px 0',
                // top: '60%',
                // left: '45%',
              }}
            />
            <a
              className={styles.button}
              onClick={() => {
                console.log('click');
              }}
              // style={{
              //   all: 'unset',
              //   position: 'absolute',
              //   width: '180px',
              //   height: '60px',
              //   borderColor: 'white',
              //   border: '1px solid white',
              //   color: 'white',
              //   filter: 'blur 10px',
              //   zIndex: '10',
              // }}
              href='https://anecdotawines.mercadoshops.com.ar/'
            >
              Ir a tienda
            </a>
          </div> */}
        </section>
        <section className={styles.wineTechnicalSection}>
          {wineTechinalData.map((varietal, index) => (
            <div key={index} className={styles.section}>
              <WineTechnicalSheet wineDetails={varietal} />
            </div>
          ))}
        </section>
      </main>
      {/* <CardsSelector /> */}
      {/* <Footer /> */}
    </>
  ) : (
    <>
      <Header inactive />
      <InactiveScreen />
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default Home;
