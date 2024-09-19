import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [showTrain, setShowTrain] = useState(false);
  const [showAthletes, setShowAthletes] = useState(false);
  const [athText, setAthText] = useState("KIDS");

  useEffect(() => {
    // Initially show "ALLEZ"
    setTimeout(() => {
      setShowTrain(true);
    }, 1000); // 1 second delay for "TRAINS"

    // Show "TRAINS" after "ALLEZ"
    setTimeout(() => {
      setShowAthletes(true);
    }, 2000); // 1 second delay for "ATHLETES" after "TRAINS"

    setTimeout(() => {
        setAthText("MEN");
    }, 2200);
    setTimeout(() => {
        setAthText("WOMEN");
    }, 2400);
    setTimeout(() => {
        setAthText("ELDERLY");
    }, 2600);
    setTimeout(() => {
        setAthText("BEGINNERS");
    }, 2800);
    setTimeout(() => {
        setAthText("PROFESSIONALS");
    }, 3000);
    setTimeout(() => {
        setAthText("ATHLETES");
    }, 3200);
  }, []);

  return (
    <div className='bg-[#1c1b1f]'>
      <div className='w-[90%] ml-[5%] flex flex-col items-start pt-10 h-[100vh]'>
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
}

export default AboutUs;
