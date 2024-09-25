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
import EcomHome from '../components/EcomHome'
import FAQs from '../components/FAQs'
import TournamentsComponent from '../components/TournamentsComponent'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SportsCarousel />
      <AboutUsHome />
      <SportsHome />
      <Parallax />
      <ProfilesHome />
      <EcomHome />
      <TournamentsComponent />
      <FAQs />
      {/* <MobileAppPromo /> */}
      
    </>
  )
}

export default Home