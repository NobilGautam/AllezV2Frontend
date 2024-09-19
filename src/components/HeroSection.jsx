import React from 'react';
import heroVideo from "../assets/hero_video.mp4"; // Import the video file
import appStoreCTA from '../assets/allez assets/apple-store-white.png'
import playStoreCTA from "../assets/allez assets/google-store-white.png"

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[#1C1B1F] text-white">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* [#1C1B1F] Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1C1B1F] opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-center font-montserrat py-20 h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[3.5rem] font-semibold mb-6">
            Sweat . Smile . Repeat
          </h1>
          <p className="text-[1.5rem] text-gray-400 mb-8 w-[70%]">
          Take your game to the next level and compete for glory.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <img src={appStoreCTA} alt="" className='w-[200px] hover:cursor-pointer hover:scale-105 duration-200 hover:bg-[#222222] hover:bg-opacity-45 rounded-lg'/>
          <img src={playStoreCTA} alt='' className='w-[200px] hover:cursor-pointer hover:scale-105 duration-200 hover:bg-[#222222] hover:bg-opacity-45 rounded-lg'/>
        </div>
        <p className="text-gray-400 mt-2">No credit card required.</p>
      </div>
    </section>
  );
};

export default HeroSection;
