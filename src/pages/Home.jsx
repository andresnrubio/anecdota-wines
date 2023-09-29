import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer.jsx';
import CardsSelector from '../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx';
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
