import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer.jsx';
import CardsSelector from '../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx';
import WineTechnicalSheet from '../components/WineTechnicalSheet';

const Home = () => {
  return (
    <>
      <Header />
      <CardsSelectorMobile />
      <WineTechnicalSheet />
      {/* <CardsSelector /> */}
      <Footer />
    </>
  );
};

export default Home;
