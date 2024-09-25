import React from 'react';
import bat from '../assets/bat.png';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const EcomHome = () => {
  const ecomlist = [
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799"
    },
  ];

  return (
    <div className="bg-[#1c1b1f] px-[5%] py-8">
      <div className="flex flex-col items-start mb-8">
        <h1 className="font-montserrat font-black text-4xl text-white">
          CHECK OUR LATEST <span className="text-[#ca2d2e]">PRODUCTS</span>
        </h1>
        <p className="font-montserrat text-white text-left">
          Elevate your game with our fully-stocked online sports store! Find the perfect equipment and apparel for badminton, cricket, football, and more. Top brands, high quality, all in one place - shop now and dominate your sport!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}  // This ensures slides adjust to the size of their content
        // spaceBetween={30}       // Adjusts space between slides
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        navigation={{clickable: true}}
        onSwiper={(swiper) => {
          // Automatically move to the 5th slide (index 4)
          setTimeout(() => {
            swiper.slideTo(ecomlist.length/2);
          }, 0); // Set a timeout to ensure Swiper is fully initialized
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {ecomlist.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '250px',
              height: '500px',
            }} // Applies the custom styles
          >
            <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden flex flex-col bg-white">
              <img src={bat} alt={item.name} className="w-full object-contain" />
              <div className="flex flex-col p-4">
                <h1 className="font-bold text-lg font-montserrat">{item.name}</h1>
                <h1 className="text-gray-600 font-montserrat">{item.company}</h1>
                <div className="flex justify-between mt-2">
                  <h1 className="line-through text-gray-400 font-montserrat">₹{item.mrp}</h1>
                  <h1 className="text-[#ca2d2e] font-bold font-montserrat">₹{item.discPrice}</h1>
                </div>
                <div className='mt-2'>
                    <button className='font-montserrat text-sm font-semibold bg-[#ca2d2e] text-white px-4 py-2 rounded-xl'>Grab Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EcomHome;
