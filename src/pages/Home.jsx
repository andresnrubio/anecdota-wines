import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer.jsx';
import CardsSelector from '../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <CardsSelectorMobile />
      {/* <CardsSelector /> */}
      <Footer />
    </>
  );
};

export default Home;
