import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer.jsx';
import CardsSelector from '../../components/CardsSelector/CardsSelector';
import WineTechnicalSheet from '../../components/WineTechnicalSheet/WineTechnicalSheet';
import WineTechnicalSheetMobile from '../../components/WineTechnicalSheetMobile/WineTechnicalSheetMobile';
import wineTechinalData from '../../data/wineTechinalData.json';
import { useState } from 'react';
import InactiveScreen from '../../components/InactiveScreen/InactiveScreen';
import CardsSelectorMobile from '../../components/CardsSelectorMobile/CardsSelectorMobile';
import useMediaQuery from '../../hooks/useMediaQuery';

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return isActive ? (
    <>
      <main className={styles.container}>
        <section className={styles.hero}>
          <Header />
          {isDesktop ? (
            <CardsSelector />
          ) : (
            <>
              <CardsSelectorMobile />
              <Footer />
            </>
          )}
        </section>
        <section className={styles.wineTechnicalSection}>
          {isDesktop
            ? wineTechinalData.map((varietal, index) => (
                <div key={index} className={styles.section}>
                  <WineTechnicalSheet wineDetails={varietal} />
                </div>
              ))
            : wineTechinalData.map((varietal, index) => (
                <div key={index} className={styles.section}>
                  <WineTechnicalSheetMobile wineDetails={varietal} />
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
