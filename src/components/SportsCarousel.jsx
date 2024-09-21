import React, { useRef, useState } from 'react';
import badminton from '../assets/allez assets/1724576671-badminton.png';
import athletics from '../assets/allez assets/athletics.png';
import basketball from '../assets/allez assets/basketball.png';
import football from '../assets/allez assets/football.png';
import tennis from '../assets/allez assets/tennis.png';
import volleyball from '../assets/allez assets/volleyball.png';

const sports = [
  { name: 'Athletics', icon: athletics },
  { name: 'Badminton', icon: badminton },
  { name: 'Basketball', icon: basketball },
  { name: 'Football', icon: football },
  { name: 'Tennis', icon: tennis },
  { name: 'Volleyball', icon: volleyball },
];

const SportsCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center py-8">
      {/* Left Arrow */}
      {/* <button
        onClick={() => scroll('left')}
        className="absolute left-[2%] z-10 bg-white p-2 w-[40px] font-bold rounded-full shadow-md hover:bg-gray-200 duration-200"
      >
        &lt;
      </button> */}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 py-4 scroll-smooth hide-scrollbar w-[90%] mx-auto justify-center"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {sports.map((sport, index) => (
          <div
            key={index}
            className="group flex flex-col items-center space-y-2 text-center hover:w-[300px] hover:bg-[#1c1b1f] duration-200 bg-[#DC1F2685] w-[150px] px-[10px] py-[46px] rounded-2xl relative"
            style={{ scrollSnapAlign: 'center' }}
          >
            {/* Sport Icon */}
            <div className="w-24 h-24">
              <img
                src={sport.icon}
                alt={`${sport.name} icon`}
                className={`w-full h-full object-contain ${sport.name == "Badminton" ? 'scale-100' : 'scale-75'}`}
              />
            </div>
            {/* Sport Name - hidden by default */}
            <p className="text-lg font-semibold text-white font-montserrat mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {sport.name.toUpperCase()}
            </p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {/* <button
        onClick={() => scroll('right')}
        className="absolute right-[2%] z-10 bg-white p-2 w-[40px] font-bold rounded-full shadow-md hover:bg-gray-200"
      >
        &gt;
      </button> */}
    </div>
  );
};

export default SportsCarousel;
