import React from 'react'
import { SiCodeblocks } from "react-icons/si";
import { PiPlant } from "react-icons/pi";
import { GiMultipleTargets } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cricket from "../assets/cricket.jpeg";
import basketball from "../assets/basketball.jpeg";
import volleyball from "../assets/volleyball.jpeg";
import swimming from "../assets/swimming.jpeg";

const SportsHome = () => {
    const sportsData = [
        {
            img: basketball,
          sportName: "Basketball",
          desc: "A fast-paced team sport requiring skill, coordination, and precision to score points by shooting hoops.",
          athletes: 24,
          funding: 1500000
        },
        {
            img: volleyball,
          sportName: "Volleyball",
          desc: "A dynamic sport focused on teamwork, agility, and strategic play with intense rallies over a net.",
          athletes: 18,
          funding: 1000000
        },
        {
            img: cricket,
          sportName: "Cricket",
          desc: "A strategic game combining batting, bowling, and fielding with global appeal and competitive formats.",
          athletes: 30,
          funding: 2500000
        },
        {
            img: swimming,
          sportName: "Swimming",
          desc: "A global sport involving teams aiming to score goals by controlling a ball across a field.",
          athletes: 35,
          funding: 4000000
        },
      ];
      
  return (
    <div className='flex flex-col items-start justify-center py-8 w-[90%] ml-[5%]'>
      <div className='flex justify-between w-full'>
        <h1 className='p-2 font-semibold bg-gray-300 rounded-md font-montserrat '>Featured Sports Categories</h1>
        <h1 className='font-montserrat font-semibold hover:underline hover:cursor-pointer'>View All</h1>
      </div>

      <div className='flex mt-8 w-full justify-between'>
        <div className='flex flex-col items-start w-[35%]'>
          <h1 className='font-bold font-montserrat text-[4rem] w-[500px]'>Join us now<br/> for training.</h1>
          <p className='font-montserrat text-gray-700 font-semibold text-[1.2rem]'>Join our training programs to unlock your full athletic potential!</p>
        </div>
        <div className='flex justify-between w-[60%] gap-4'>
          <div className='flex flex-col items-center justify-center gap-8 w-[30%]'>
            <SiCodeblocks className='text-[5rem]'/>
            <h1 className='text-montserrat font-bold text-[1.2rem] text-center'>Unlock your potential.<br/> Own the game.</h1>
          </div>
          <div className='flex flex-col items-center justify-center gap-8 w-[30%]'>
            <PiPlant className='text-[5rem]'/>
            <h1 className='text-montserrat font-bold text-[1.2rem] text-center'>Your journey.<br/> Our coaching.</h1>
          </div>
          <div className='flex flex-col items-center justify-center gap-8 w-[30%]'>
            <GiMultipleTargets className='text-[5rem]'/>
            <h1 className='text-montserrat font-bold text-[1.2rem] text-center'>Chase greateness.<br/> Achieve victory.</h1>
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      <div className='relative w-full'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3.5}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
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
            }
          }}
          className='w-full relative'
        >
          {sportsData.map((data, index) => (
            <SwiperSlide key={index} className='flex justify-center hover:scale-105 duration-300 ease-in-out py-8'>
              <div className='flex flex-col p-8 gap-2 rounded-md bg-gray-100 shadow-lg hover:scale-105 duration-300 ease-in-out'>
                <div className='rounded-md overflow-hidden'>
                  <img src={data.img} alt={data.name} className='object-cover w-full h-[200px]' />
                </div>
                <div>
                  <h1 className='font-montserrat font-bold text-[1.2rem]'>{data.name}</h1>
                  <p className='font-montserrat font-semibold'>{data.sport}</p>
                  <p className='font-montserrat text-[0.9rem] mt-2'>{data.desc}</p>
                </div>
                <div className='w-full flex justify-end mt-8'>
                  <div className='py-2 px-4 rounded-md border bg-gray-200 hover:cursor-pointer hover:bg-[#1C1B1F] duration-300 ease-in-out w-fit hover:text-white'>
                    <h1 className='font-montserrat font-semibold'>View programs</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className='swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-[#1C1B1F] rounded-full cursor-pointer z-20 w-10 h-10 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className='swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-[#1C1B1F] rounded-full cursor-pointer z-20 w-10 h-10 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SportsHome