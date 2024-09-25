import React from 'react'
import HeroAboutUs from '../components/HeroAboutUs'
import AboutTimeline from '../components/AboutTimeline'
import FAQs from '../components/FAQs'
import ExpertGuidanceSection from '../components/ExpertGuidanceSection'

const AboutUs = () => {
  return (
    <>
      <HeroAboutUs/>
      <AboutTimeline />
      <ExpertGuidanceSection/>
      <FAQs />
    </>
  )
}

export default AboutUs