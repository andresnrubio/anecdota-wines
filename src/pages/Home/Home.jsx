import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer.jsx';
import CardsSelector from '../../components/CardsSelector/CardsSelector';
import WineTechnicalSheet from '../../components/WineTechnicalSheet/WineTechnicalSheet';
import WineTechnicalSheetMobile from '../../components/WineTechnicalSheetMobile/WineTechnicalSheetMobile';
import wineTechnicalData from '../../data/wineTechnicalData.json';
import { useState } from 'react';
import InactiveScreen from '../../components/InactiveScreen/InactiveScreen';
import CardsSelectorMobile from '../../components/CardsSelectorMobile/CardsSelectorMobile';
import useMediaQuery from '../../hooks/useMediaQuery';

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  const { isMobile, isDesktop } = useMediaQuery();
  // const isDesktop = useMediaQuery('(min-width: 960px)').matches;

  return isActive ? (
    <>
      <main className={styles.container}>
        <section className={styles.hero}>
          <Header />
          {isDesktop && (
            <>
              <div></div>
              <CardsSelector />
            </>
          )}
          {isMobile && (
            <>
              <CardsSelectorMobile />
              <Footer />
            </>
          )}
        </section>
        <section className={styles.wineTechnicalSection}>
          {wineTechnicalData.map((varietal, index) => (
            <div key={index} className={styles.section}>
              {isDesktop && <WineTechnicalSheet wineDetails={varietal} />}
              {isMobile && <WineTechnicalSheetMobile wineDetails={varietal} />}
            </div>
          ))}
        </section>
      </main>
    </>
  ) : (
    <>
      <Header inactive />
      <InactiveScreen />
      <Footer />
    </>
  );
};

export default Home;
