import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProfilesHome from '../components/ProfilesHome'
import SportsHome from '../components/SportsHome'
import Footer from '../components/Footer'
import SportsCarousel from '../components/SportsCarousel'
import MobileAppPromo from '../components/MobileAppPromo'
import Parallax from '../components/Parallax'
import AboutUs from './AboutUs'
import AboutUsHome from '../components/AboutUsHome'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SportsCarousel />
      <AboutUsHome />
      <ProfilesHome />
      <Parallax />
      <SportsHome />
      {/* <MobileAppPromo /> */}
      
    </>
  )
}

export default Home