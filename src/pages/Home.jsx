import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProfilesHome from '../components/ProfilesHome'
import SportsHome from '../components/SportsHome'
import Footer from '../components/Footer'
import SportsCarousel from '../components/SportsCarousel'
import MobileAppPromo from '../components/MobileAppPromo'
import Parallax from '../components/Parallax'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SportsCarousel />
      <ProfilesHome />
      <SportsHome />
      {/* <MobileAppPromo /> */}
      <Parallax />
    </>
  )
}

export default Home