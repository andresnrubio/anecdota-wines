import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer.jsx';
import CardsSelector from '../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx';

const Home = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <CardsSelectorMobile />
      <CardsSelector />
      <Footer />
    </div>
  );
};

export default Home;
