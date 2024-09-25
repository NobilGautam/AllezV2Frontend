import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import coachImage from '../assets/coach.png'; // Use your coach image
import { Link } from 'react-router-dom';

const coaches = [
  {
    id: 1,
    name: 'Coach 1',
    description: 'Expert in Football and Basketball, with 10 years of experience.',
    image: coachImage,
  },
  {
    id: 2,
    name: 'Coach 2',
    description: 'Specializes in Volleyball and Badminton with extensive team management experience.',
    image: coachImage,
  },
  {
    id: 3,
    name: 'Coach 3',
    description: 'Focused on track and field sports with a background in Olympic-level coaching.',
    image: coachImage,
  },
  {
    id: 4,
    name: 'Coach 4',
    description: 'Highly skilled in Cricket and Hockey, emphasizing endurance training.',
    image: coachImage,
  },
  {
    id: 5,
    name: 'Coach 5',
    description: 'Football expert with a specialization in forward techniques.',
    image: coachImage,
  },
  {
    id: 6,
    name: 'Coach 6',
    description: 'Specializes in Tennis and long-term athlete development.',
    image: coachImage,
  },
  {
    id: 7,
    name: 'Coach 7',
    description: 'Expert in physical conditioning and Basketball coaching.',
    image: coachImage,
  },
  {
    id: 8,
    name: 'Coach 8',
    description: 'Rugby coach with a focus on strategic team building.',
    image: coachImage,
  },
  {
    id: 9,
    name: 'Coach 9',
    description: 'Highly skilled in athletics and fitness training.',
    image: coachImage,
  },
  {
    id: 10,
    name: 'Coach 10',
    description: 'Volleyball coach with over 15 years of experience.',
    image: coachImage,
  },
  {
    id: 11,
    name: 'Coach 11',
    description: 'Cricket coach with a focus on all-rounder development.',
    image: coachImage,
  },
  {
    id: 12,
    name: 'Coach 12',
    description: 'Professional athlete turned coach, specializing in Hockey.',
    image: coachImage,
  },
];

const ProfilesHome = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 w-[90%] ml-[5%]">
      {/* Heading and Description */}
      <div className="text-center">
        <h1 className="font-montserrat font-black text-4xl">
          MEET YOUR <span className="text-[#ca2d2e]">TRAINERS</span>
        </h1>
        <p className="font-montserrat mt-4">
          Unleash Your Potential with Our Coaching Champions. Our expert coaches are more than instructors - they are passionate mentors. Explore their profiles, discover their unique coaching styles, and connect with the perfect trainer to ignite your athletic journey.
        </p>
      </div>

      {/* Swiper Section for Coaches */}
      <div className="relative w-full mt-10">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={0}  
          slidesPerView={5.5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            425: {
              slidesPerView: 1.5,
            },
            0: {
              slidesPerView: 1.5,
            },
          }}
        >
          {coaches.map((coach) => (
            <SwiperSlide key={coach.id} className="flex flex-col items-center">
              <div className="flex flex-col items-center group">
                <div className="w-[200px] h-[200px] bg-[#1c1b1f] rounded-full p-2 mb-4">
                  <img src={coach.image} alt={coach.name} className="w-full h-full object-contain rounded-full" />
                </div>
                <p className="text-lg font-semibold font-montserrat mt-2 text-center">{coach.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Button */}
      <Link to="/trainers">
        <button className="mt-8 px-6 py-2 font-montserrat font-semibold text-black bg-white border border-[#1c1b1f] hover:border-[#ca2d2e] hover:text-[#ca2d2e] rounded-lg transition-all duration-200">
          View All
        </button>
      </Link>
    </div>
  );
};

export default ProfilesHome;
