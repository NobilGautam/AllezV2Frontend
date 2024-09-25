import React from 'react';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import f5 from '../assets/f5.png';

// Sample data for pre-register and recent tournaments
const preRegisterTournaments = [
  {
    id: 1,
    title: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 August, 2025 - 30 August, 2025',
    image: f1, // Replace with actual image path
  },
  {
    id: 2,
    title: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 August, 2025 - 30 August, 2025',
    image: f2, // Replace with actual image path
  },
  {
    id: 3,
    title: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 August, 2025 - 30 August, 2025',
    image: f3, // Replace with actual image path
  },
];

const recentTournaments = [
  {
    id: 1,
    title: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 August, 2025 - 30 August, 2025',
    image: f4, // Replace with actual image path
  },
  {
    id: 2,
    title: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 August, 2025 - 30 August, 2025',
    image: f1, // Replace with actual image path
  },
  {
    id: 3,
    title: 'FOOTBALL',
    location: 'Gurugram, Haryana',
    date: '29 August, 2025 - 30 August, 2025',
    image: f5, // Replace with actual image path
  },
];

const TournamentsComponent = () => {
  return (
    <div className="px-[5%] py-8">
      {/* Title Section */}
      <h1 className="font-montserrat text-left font-black text-4xl text-[#ca2d2e]">
        TOURNAMENTS
      </h1>
      <p className="font-montserrat text-lg text-[#1c1b1f] text-left">
        Ready to showcase your talent?{' '}<br/>
        <span className="text-[#ca2d2e]">Compete</span> in our exciting
        tournaments and put your skills to the test!
      </p>

      {/* Pre-register for 2025 Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="font-montserrat font-bold text-xl">
            Pre register for 2025
          </h2>
          <button className="font-montserrat text-sm text-[#ca2d2e] hover:underline">
            View All
          </button>
        </div>
        <div className=''>
            <h1 className='bg-[#ca2d2e] w-fit px-4 py-1 rounded-md font-montserrat font-semibold text-white mt-4'>Featured Trainings</h1>
        </div>
        <div className="flex mt-4 gap-[10%] w-full justify-center">
          {preRegisterTournaments.map((tournament) => (
            <div key={tournament.id} className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={tournament.image}
                alt={tournament.title}
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-lg text-[#1c1b1f]">
                  {tournament.title}
                </h3>
                <p className="font-montserrat text-sm text-gray-500">
                  {tournament.location}
                </p>
                <p className="font-montserrat text-sm text-gray-500">
                  {tournament.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Tournaments and Events Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="font-montserrat font-bold text-xl">
            Recent Tournaments and Events
          </h2>
          <button className="font-montserrat text-sm text-[#ca2d2e] hover:underline">
            View All
          </button>
        </div>
        <div className=''>
            <h1 className='bg-[#ca2d2e] w-fit px-4 py-1 rounded-md font-montserrat font-semibold text-white mt-4'>Featured Events</h1>
        </div>
        <div className="flex mt-4 gap-[10%] w-full justify-center">
          {recentTournaments.map((event) => (
            <div key={event.id} className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-lg text-[#1c1b1f]">
                  {event.title}
                </h3>
                <p className="font-montserrat text-sm text-gray-500">
                  {event.location}
                </p>
                <p className="font-montserrat text-sm text-gray-500">
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentsComponent;
