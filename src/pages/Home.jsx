import React from 'react'
import Header from '../components/common/Header/Header'
import CardsSelector from '../components/CardsSelector/CardsSelector'
import CardsSelectorMobile from '../components/CardsSelectorMobile/CardsSelectorMobile.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <CardsSelectorMobile />
      {/* <CardsSelector /> */}
    </>
  )
}

export default Home
