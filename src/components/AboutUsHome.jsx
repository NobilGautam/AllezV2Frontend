import React from 'react';
import aboutUs from '../assets/Group 30.png';
import { FaArrowRight } from 'react-icons/fa';
import horizontalImg from '../assets/aboutHorizontal.png';
import { Link } from 'react-router-dom';

const AboutUsHome = () => {
  return (
    <div className="overflow-hidden relative">
      {/* Background Div */}
      <div className="bg-[#1c1b1f] w-full h-full absolute top-20 left-0 z-[-1]"></div>

      {/* Content */}
      <img src={horizontalImg} alt="" className="scale-x-110 absolute left-[-17px] z-0" />
      <div className="w-full flex justify-center mt-[500px] z-10">
        <div className="w-[70%] flex flex-col items-start mb-[50px]">
          <div className="flex flex-col w-full items-start">
            <h1 className="font-montserrat font-extrabold text-white text-[3rem] h-[48px]">
              KNOW ABOUT <span className="text-[#ca1d2e]">ALLEZ</span>
            </h1>
            <p className="font-montserrat w-[50%] font-medium text-start mt-6 text-gray-300">
              We at Allez Sportz believe sports is for everyone. We believe in identifying and nurturing talents and help you unlock your athletic potential.
            </p>
          </div>

          <div className="flex flex-col w-full items-start mt-[50px]">
            <h1 className="font-montserrat font-medium text-[2rem] h-[32px] text-white">
              WHAT'S IN IT FOR YOU<span className="text-[#ca1d2e]">?</span>
            </h1>
            <p className="font-montserrat font-medium text-start mt-6 text-gray-300">
              Discover a wide range of sports, including Badminton, Cricket, and Football, to uncover your hidden talent and ignite your passion. We offer expert coaching for all skill levels, helping you master fundamentals and refine your technique. Compete with confidence in tournaments designed for every level and become part of a supportive sports community focused on teamwork, sportsmanship, and lasting friendships. Join us today!
            </p>
          </div>

          <Link to="/aboutus">
            <h1 className="font-montserrat text-white font-semibold underline mt-8 hover:cursor-pointer border p-2 px-4 rounded-lg border-[#ffffff] hover:border-[#ca1d2e] hover:text-[#ca1d2e] duration-200">
              LEARN MORE
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
