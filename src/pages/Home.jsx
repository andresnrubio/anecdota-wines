import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer.jsx';
import CardsSelector from '../components/CardsSelector/CardsSelector';
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx';
import { useState } from 'react';
import InactiveScreen from '../components/InactiveScreen/InactiveScreen';
import HeaderInactive from '../components/common/HeaderInactive/HeaderInactive';
import { dot } from '../assets';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  return isActive ? (
    <>
      <Header />
      <CardsSelectorMobile />
      <CardsSelector />
      <Footer />
    </>
  ) : (
    <>
      <HeaderInactive status={true} inactive={true} />
      <InactiveScreen />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
