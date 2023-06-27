import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer.jsx';
import CardsSelector from '../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx';
import WineTechnicalSheet from '../components/WineTechnicalSheet';
import technicalData from '../malbec2021.json';

const Home = () => {
  return (
    <>
      <Header />
      <CardsSelectorMobile />
      {/* <CardsSelector /> */}
      <div style={{ height: '100vh', background: '#1e1e1e', width: '100%' }} />
      {technicalData.map((varietal, index) => (
        <WineTechnicalSheet wineDetails={varietal} key={index} />
      ))}
      <Footer />
    </>
  );
};

export default Home;
