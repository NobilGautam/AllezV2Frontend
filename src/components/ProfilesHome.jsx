import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import coachImage from '../assets/coach.png'; // Use your coach image
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const coaches = [
  {
    id: 1,
    name: 'José Mourinho',
    description: 'Expert in Football and Basketball, with 10 years of experience.',
    image: coachImage,
  },
  {
    id: 2,
    name: 'José Mourinho',
    description: 'Specializes in Volleyball and Badminton with extensive team management experience.',
    image: coachImage,
  },
  {
    id: 3,
    name: 'José Mourinho',
    description: 'Focused on track and field sports with a background in Olympic-level coaching.',
    image: coachImage,
  },
  {
    id: 4,
    name: 'José Mourinho',
    description: 'Highly skilled in Cricket and Hockey, emphasizing endurance training.',
    image: coachImage,
  },
  {
    id: 5,
    name: 'José Mourinho',
    description: 'Football expert with a specialization in forward techniques.',
    image: coachImage,
  },
  {
    id: 6,
    name: 'José Mourinho',
    description: 'Specializes in Tennis and long-term athlete development.',
    image: coachImage,
  },
  {
    id: 7,
    name: 'José Mourinho',
    description: 'Expert in physical conditioning and Basketball coaching.',
    image: coachImage,
  },
  {
    id: 8,
    name: 'José Mourinho',
    description: 'Rugby coach with a focus on strategic team building.',
    image: coachImage,
  },
  {
    id: 9,
    name: 'José Mourinho',
    description: 'Highly skilled in athletics and fitness training.',
    image: coachImage,
  },
  {
    id: 10,
    name: 'José Mourinho',
    description: 'Volleyball coach with over 15 years of experience.',
    image: coachImage,
  },
  {
    id: 11,
    name: 'José Mourinho',
    description: 'Cricket coach with a focus on all-rounder development.',
    image: coachImage,
  },
  {
    id: 12,
    name: 'José Mourinho',
    description: 'Professional athlete turned coach, specializing in Hockey.',
    image: coachImage,
  },
];

const ProfilesHome = () => {
  const containerRef = useRef(null); // Use a reference for the container
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setZoom(true); // Set zoom to true when the component is in view
          } else {
            setZoom(false); // Set zoom to false when the component is out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the container is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 relative overflow-hidden" ref={containerRef}>
      <div className="w-[90%] z-10 relative">
        {/* Top right circle that scales */}
        <div
          className={`absolute w-[400px] h-[400px] bg-[#ed8b8e] rounded-full top-[-200px] right-[-200px] transform transition-transform duration-500 ${
            zoom ? 'scale-100' : 'scale-50'
          }`}
        ></div>

        {/* Heading and Description */}
        <div className="text-center">
          <h1 className="font-montserrat font-black text-4xl text-left">
            MEET YOUR <span className="text-[#ca2d2e]">TRAINERS</span>
          </h1>
          <p className="font-montserrat mt-4 text-left w-[85%]">
            Unleash Your Potential with Our Coaching Champions. Our expert coaches are more than instructors - they are passionate mentors. Explore their profiles, discover their unique coaching styles, and connect with the perfect trainer to ignite your athletic journey.
          </p>
        </div>

        {/* Swiper Section for Coaches */}
        <div className="w-[112%] ml-[-6%] mt-10">
          <Marquee pauseOnHover={true}>
            {coaches.map((coach) => (
              <div key={coach.id} className="flex flex-col items-center hover:cursor-pointer mx-8">
                <div className="flex flex-col items-center group">
                  <div className="w-[200px] h-[200px] bg-[#1c1b1f] rounded-full p-2 mb-4">
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-contain rounded-full" />
                  </div>
                  <p className="text-lg font-semibold font-montserrat mt-2 text-center">{coach.name}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* View All Button */}
        {/* <Link to="/trainers">
          <button className="mt-8 px-6 py-2 font-montserrat font-semibold text-black bg-white border border-[#1c1b1f] hover:border-[#ca2d2e] hover:text-[#ca2d2e] rounded-lg transition-all duration-200">
            View All
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default ProfilesHome;
