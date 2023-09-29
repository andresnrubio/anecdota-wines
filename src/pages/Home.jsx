import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer.jsx';
import CardsSelector from '../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx';

import WineTechnicalSheet from '../components/WineTechnicalSheet';
import technicalData from '../malbec2021.json';

import { useState } from 'react';
import InactiveScreen from '../components/InactiveScreen/InactiveScreen';
import HeaderInactive from '../components/common/HeaderInactive/HeaderInactive';
import Testing from '../components/common/Testing/Testing.jsx';
import { dot } from '../assets';
import CardSelectorStatic from '../components/CardSelectorStatic/CardSelectorStatic';

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  return isActive ? (
    // <>
    //   <Testing />
    // </>
    <>
      <Header />
      <CardSelectorStatic />
      {/* <CardsSelectorMobile />
      {/* <CardsSelector /> */}
      <div style={{ height: '100vh', background: '#1e1e1e', width: '100%' }} />
      {technicalData.map((varietal, index) => (
        <WineTechnicalSheet wineDetails={varietal} key={index} />
      ))}
      <CardsSelector /> */}
      <Footer />
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
