import React from 'react';
import aboutUs from '../assets/Group 30.png';
import { FaArrowRight } from 'react-icons/fa';
import horizontalImg from '../assets/aboutHorizontal.png'
import { Link } from 'react-router-dom';

const AboutUsHome = () => {
  return (
    <div className='overflow-hidden relative'>
    <img src={horizontalImg} alt="" className='scale-x-110 absolute left-[-17px]'/>
    <div className='w-full flex justify-center mt-[500px]'>
      {/* <div className='flex justify-between w-[60%] '>
        <img src={aboutUs} alt="about us" className='w-[45%] rounded-xl' />
        <div className='w-[55%] h-[90%] flex flex-col justify-between items-center'>
          <div className='w-full flex flex-col items-center'>
            <h1 className='bg-[#de1f26] w-[80%] text-[1.5rem] p-2 rounded-full px-4 font-montserrat text-white font-bold'>
              About Allez Sportz
            </h1>
            <h1 className='font-montserrat mt-2 text-[1.1rem] font-bold'>Sports is for everyone!</h1>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <p className='font-montserrat'>Our experienced coaches help individuals of all ages and skill levels unlock their athletic potential through comprehensive training in various sports, fostering confidence, teamwork, and a healthy lifestyle.</p> */}
            {/* <div className='group p-2 px-4 rounded-lg border-[1px] hover:bg-[#de1f26] hover:cursor-pointer transition-all duration-300'>
              <h1 className='text-left font-montserrat font-bold group-hover:text-white transition-colors duration-300'>
                Discover your perfect sport.
              </h1>
              <p className='text-justify hidden group-hover:block text-[#f1ecec] font-light transition-opacity duration-300'>
                Uncover your hidden talent! Explore a diverse range of sports and ignite your passion for sports. We offer training programs and coaching abilities for Badminton, Cricket, Football, and more!
              </p>
            </div>
            <div className='group p-2 px-4 rounded-lg border-[1px] hover:bg-[#de1f26] hover:cursor-pointer transition-all duration-300'>
              <h1 className='text-left font-montserrat font-bold group-hover:text-white transition-colors duration-300'>
                Expert coaching for all levels.
              </h1>
              <p className='text-justify hidden group-hover:block text-[#f1ecec] font-light transition-opacity duration-300'>
                Our experienced coaches will guide you, from mastering the fundamentals to refining your technique, and will help you reach your full potential.
              </p>
            </div>
            <div className='group p-2 px-4 rounded-lg border-[1px] hover:bg-[#de1f26] hover:cursor-pointer transition-all duration-300'>
              <h1 className='text-left font-montserrat font-bold group-hover:text-white transition-colors duration-300'>
                Compete with confidence.
              </h1>
              <p className='text-justify hidden group-hover:block text-[#f1ecec] font-light transition-opacity duration-300'>
                Compete in our exciting tournaments and apply your learnt skills. We offer a range of tournaments to match any athlete's level.
              </p>
            </div>
            <div className='group p-2 px-4 rounded-lg border-[1px] hover:bg-[#de1f26] hover:cursor-pointer transition-all duration-300'>
              <h1 className='text-left font-montserrat font-bold group-hover:text-white transition-colors duration-300'>
                Become part of the team.
              </h1>
              <p className='text-justify hidden group-hover:block text-[#f1ecec] font-light transition-opacity duration-300'>
                More than just training, we offer a welcoming sports community where you can develop teamwork, and sportsmanship, and forge lasting friendships. Join us now!
              </p>
            </div> */}
          {/* </div>
          <h1 className='font-bold font-montserrat p-2 px-4 underline rounded-full border-[1px] border-black flex items-center justify-center gap-2 w-[80%] hover:no-underline hover:bg-[#de1f26] hover:border-0 hover:text-white transition-all duration-300 cursor-pointer'>
            Learn More <FaArrowRight />
          </h1>
        </div>
      </div> */}
      <div className='w-[70%] flex flex-col items-start mb-[50px]'>
        <div className='flex flex-col w-full items-start'>
            <h1 className='font-montserrat font-extrabold text-[3rem] h-[48px]'>KNOW ABOUT <span className='text-[#ca1d2e]'>ALLEZ</span></h1>
            <p className='font-montserrat w-[50%] font-medium text-start mt-6 text-gray-700'>We at Allez Sportz believe sports is for everyone. We believe in identifying and nurturing talents and help you unlock your athletic potential.</p>
        </div>
        <div className='flex flex-col w-full items-start mt-[50px]'>
            <h1 className='font-montserrat font-medium text-[2rem] h-[32px]'>WHAT'S IN IT FOR YOU<span className='text-[#ca1d2e]'>?</span></h1>
            <p className='font-montserrat font-medium text-start mt-6 text-gray-700'>Discover a wide range of sports, including Badminton, Cricket, and Football, to uncover your hidden talent and ignite your passion. We offer expert coaching for all skill levels, helping you master fundamentals and refine your technique. Compete with confidence in tournaments designed for every level and become part of a supportive sports community focused on teamwork, sportsmanship, and lasting friendships. Join us today!</p>
        </div>
        <Link to="/aboutus">
            <h1 className='font-montserrat font-semibold underline mt-8 hover:cursor-pointer border p-2 px-4 rounded-lg border-[#1c1b1f] hover:border-[#ca1d2e] hover:text-[#ca1d2e] duration-200'>LEARN MORE</h1>
        </Link>
      </div>
      
    </div>
    </div>
  );
};

export default AboutUsHome;
