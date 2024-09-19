import React from 'react'
import { SiCodeblocks } from "react-icons/si";
import { PiPlant } from "react-icons/pi";
import { GiMultipleTargets } from "react-icons/gi";
import basketball from "../assets/ath_basketball.jpeg"
import volleyball from "../assets/ath_volleyball.jpeg"
import cricket from "../assets/ath_cricket.jpeg"
import cricket2 from "../assets/ath_cricket_2.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const ProfilesHome = () => {
  const athleteData = [
    {
      id: "1",
      name: "Nobil Gautam",
      sport: "Basketball",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet dolorem, quaerat iure ab cum repudiandae cupiditate soluta harum libero.",
      img: basketball,
    },
    {
      id: "2",
      name: "Dhruv Tanwar",
      sport: "Volleyball",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet dolorem, quaerat iure ab cum repudiandae cupiditate soluta harum libero.",
      img: cricket2,
    },
    {
      id: "3",
      name: "Yogen Udar",
      sport: "Cricket",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet dolorem, quaerat iure ab cum repudiandae cupiditate soluta harum libero.",
      img: cricket,
    },
    {
      id: "4",
      name: "Kanupriya",
      sport: "Volleyball",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus consectetur veritatis at, perspiciatis eligendi pariatur quisquam reprehenderit.",
      img: volleyball
    }
  ]

  return (
    <div className='flex flex-col items-start justify-center py-8 w-[90%] ml-[5%]'>
      <div className='flex justify-between w-full'>
        <h1 className='p-2 font-semibold bg-gray-300 rounded-md font-montserrat '>Featured Athletes</h1>
        <h1 className='font-montserrat font-semibold hover:underline hover:cursor-pointer'>View All</h1>
      </div>

      <div className='flex mt-8 w-full justify-between'>
        <div className='flex flex-col items-start w-[35%]'>
          <h1 className='font-bold font-montserrat text-[3.8rem] w-[500px]'>Find the<br/> right trainers.</h1>
          <p className='font-montserrat text-gray-700 font-semibold text-[1.2rem]'>Unleash your potential with passionate coaching mentors.</p>
        </div>
        <div className='flex justify-between w-[60%] gap-4'>
          <div className='flex flex-col items-center justify-center gap-8 w-[30%]'>
            <SiCodeblocks className='text-[5rem]'/>
            <h1 className='text-montserrat font-bold text-[1.2rem] text-center'>Make it difference.<br/> Make it big.</h1>
          </div>
          <div className='flex flex-col items-center justify-center gap-8 w-[30%]'>
            <PiPlant className='text-[5rem]'/>
            <h1 className='text-montserrat font-bold text-[1.2rem] text-center'>Support your athletes.<br/> They need you.</h1>
          </div>
          <div className='flex flex-col items-center justify-center gap-8 w-[30%]'>
            <GiMultipleTargets className='text-[5rem]'/>
            <h1 className='text-montserrat font-bold text-[1.2rem] text-center'>Celebrate their milestones.<br/> Track their progress.</h1>
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
          {athleteData.map((data, index) => (
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
                    <Link to={`/athlete/${data.id}`}><h1 className='font-montserrat font-semibold'>View Profile</h1></Link>
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

export default ProfilesHome;
