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
      <div className={styles.desktopContainer}>
        {/* <HeroSection /> */}
        {/* <CardsSelectorMobile /> */}
        <div className={styles.hero}>
          <Header />
          <CardsSelector />
        </div>
        <div className={styles.wineTechnicalSection}>
          {wineTechinalData.map((varietal, index) => (
            <div key={index} className={styles.section}>
              <WineTechnicalSheet wineDetails={varietal} />
            </div>
          ))}
        </div>
      </div>
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
