import React, { useEffect, useState } from 'react';

const HeroAboutUs = () => {
  const [showTrain, setShowTrain] = useState(false);
  const [showAthletes, setShowAthletes] = useState(false);
  const [athText, setAthText] = useState("KIDS");
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setShowTrain(true);
    }, 1000); 

    setTimeout(() => {
      setShowAthletes(true);
    }, 1500);

    setTimeout(() => {
      setAthText("MEN");
    }, 2000);
    setTimeout(() => {
      setAthText("WOMEN");
    }, 2200);
    setTimeout(() => {
      setAthText("ELDERLY");
    }, 2400);
    setTimeout(() => {
      setAthText("BEGINNERS");
    }, 2600);
    setTimeout(() => {
      setAthText("PROFESSIONALS");
    }, 2800);
    setTimeout(() => {
      setAthText("ATHLETES");
    }, 3000);
  }, []);

  const handleMouseMove = (e) => {
    setTimeout(() => {setCirclePosition({ x: e.clientX, y: e.clientY })}, 200);
  };

  return (
    <div className='bg-[#1c1b1f] relative overflow-hidden h-[770px]' onMouseMove={handleMouseMove}>
      {/* Blurred Circle (Background) */}
      <div className='absolute z-[-4px]'>
        <div
          className='w-[300px] h-[300px] rounded-full bg-[#ca2d2e] opacity-50 pointer-events-none blur-[150px]'
          style={{
            transform: `translate(${circlePosition.x - 150}px, ${circlePosition.y - 250}px)`, // Adjust position to center the circle on cursor
          }}
        />
      </div>

      {/* Foreground Elements */}
      <div className='absolute bg-gradient-to-b to-[#1a6793] from-[#851e23] via-[#851e23] w-[23px] h-[570px] top-[50px] left-[2%] rounded-full z-10'></div>
      <div className='absolute bg-gradient-to-r to-[#851e23] from-[#1a6793] via-[#851e23] h-[23px] w-[48%] top-[77.56%] left-[2%] rounded-l-full z-10'></div>
      <div className='absolute bg-gradient-to-b to-[#1a6793] from-[#851e23] via-[#851e23] w-[23px] h-[175px] left-[49.2%] top-[77.56%] rounded-t-full z-10'></div>
      
      <div className='w-[90%] ml-[5%] flex flex-col items-start pt-10 h-[100vh] z-[1000px]'>
        <div className='text-[180px] flex justify-center items-center overflow-hidden h-[180px] font-bold font-bebas text-white'>
          ALLEZ
        </div>
        {showTrain && (
          <div className='text-[180px] flex justify-center items-center overflow-hidden h-[180px] font-bold font-bebas text-white'>
            TRAINS
          </div>
        )}
        {showAthletes && (
          <div className='text-[200px] flex justify-center items-center overflow-hidden h-[200px] font-bold font-bebas text-white'>
            {athText}.
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroAboutUs;
