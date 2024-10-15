import React, { useRef } from 'react';
import football from '../assets/football.png';
import basketball from '../assets/basketball.png';
import volleyball from '../assets/volleyball.png';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const trainings = [
  {
    name: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 Aug, 2024 - 30 Aug, 2024',
    icon: football,
    bgColor: 'bg-[#1c1b1f]', // Dark background for Football
  },
  {
    name: 'BASKETBALL',
    location: 'Pune, Maharashtra',
    date: '10 Sept, 2024 - 11 Sept, 2024',
    icon: basketball,
    bgColor: 'bg-[#DC1F2685]', // Red background for Basketball
  },
  {
    name: 'VOLLEYBALL',
    location: 'Chennai, Tamil Nadu',
    date: '5 Oct, 2024 - 6 Oct, 2024',
    icon: volleyball,
    bgColor: 'bg-[#DC1F2685]', // Red background for Volleyball
  },
  {
    name: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 Aug, 2024 - 30 Aug, 2024',
    icon: football,
    bgColor: 'bg-[#1c1b1f]', // Dark background for Football
  },
  {
    name: 'BASKETBALL',
    location: 'Pune, Maharashtra',
    date: '10 Sept, 2024 - 11 Sept, 2024',
    icon: basketball,
    bgColor: 'bg-[#DC1F2685]', // Red background for Basketball
  },
  // Add more items...
];

const SportsHome = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const ZoomInScrollOut = batch(ZoomIn(3,1));
  return (
    <ScrollPage>
    <div className="relative w-full py-8 mt-8 flex flex-col items-center">
      {/* Heading */}
      <Animator animation={ZoomInScrollOut}>
      <h2 className="font-montserrat text-4xl font-black text-center mb-4">
        JOIN US NOW FOR <span className="text-[#ca1d2e]">TRAINING</span>
      </h2>
      </Animator>
      <p className="text-gray-700 text-center w-[80%] mb-8">
        Join the winning team & unleash your inner athlete! Explore our diverse training programs for badminton, cricket, football, and more! Connect with our experienced coaches who will personalize a plan to unlock your full potential. We can’t wait to welcome you to our supportive environment and witness your journey from aspiring athlete to triumphant competitor!
      </p>

      {/* Scrollable Cards */}
      <div className="relative w-full flex items-center justify-center">
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 py-4 h-[350px] scroll-smooth hide-scrollbar w-[90%] mx-auto justify-center"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trainings.map((training, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center hover:bg-[#1c1b1f] transition-all duration-300 ease-in-out transform w-[200px] hover:w-[300px] bg-[#DC1F2685] px-[10px] py-[46px] rounded-2xl relative`}
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Training Icon */}
              <div className="w-[150px] h-[150px] mb-4">
                <img
                  src={training.icon}
                  alt={`${training.name} icon`}
                  className={`w-full h-full object-contain ${training.name === 'FOOTBALL' ? "opacity-30 group-hover:opacity-100" : "opacity-100"}`}
                />
              </div>
              {/* Training Name and Info */}
              <p className="font-semibold w-full text-white font-montserrat mt-2 hidden transition-opacity duration-300 group-hover:block">
                {training.name}
              </p>
              <p className="text-white w-full font-montserrat hidden transition-opacity duration-300 group-hover:block">
                {training.location}
              </p>
              <p className="text-white w-full font-montserrat hidden transition-opacity duration-300 group-hover:block">
                {training.date}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 bg-white p-2 w-[40px] font-bold rounded-full shadow-md hover:bg-gray-200 duration-200"
        >
          &lt;
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 bg-white p-2 w-[40px] font-bold rounded-full shadow-md hover:bg-gray-200 duration-200"
        >
          &gt;
        </button>
      </div>
      <div className='hover:cursor-pointer mt-10'>
        <h1 className='font-montserrat font-semibold px-4 py-2 border-[1px] rounded-xl border-black hover:border-[#ca2d2e] hover:text-[#ca1d2e]'>View All</h1>
      </div>
    </div>
    </ScrollPage>
  );
};

export default SportsHome;
