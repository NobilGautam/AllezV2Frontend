import React, { useRef } from 'react';
import bat from '../assets/bat.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const EcomHome = () => {
  const swiperRef = useRef(null); // Use a ref to store the swiper instance

  const ecomlist = [
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    {
      name: "Cricket Bat",
      company: "TON",
      mrp: "1499",
      discPrice: "799",
    },
    // Add more items as needed...
  ];

  return (
    <div className="bg-[#1c1b1f] px-[5%] py-8 relative">
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
        slidesPerView={"auto"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the swiper instance
          setTimeout(() => {
            swiper.slideTo(ecomlist.length / 2);
          }, 0); // Set a timeout to ensure Swiper is fully initialized
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
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
            }}
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
                <div className="mt-2">
                  <button className="font-montserrat text-sm font-semibold bg-[#ca2d2e] text-white px-4 py-2 rounded-xl">Grab Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Arrows */}
      <FaChevronLeft className="absolute left-10 text-[#ca2d2e] text-[3rem] top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiperRef.current?.slidePrev()} />
      <FaChevronRight className="absolute right-10 text-[#ca2d2e] text-[3rem] top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => swiperRef.current?.slideNext()} />
    </div>
  );
};

export default EcomHome;
