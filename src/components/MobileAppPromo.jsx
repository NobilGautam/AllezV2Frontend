import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import mobile from '../assets/allez assets/mobile.png';

const MobileAppPromo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className='w-[90%] ml-[5%] flex items-center justify-center gap-8'>
      <div className='flex flex-col w-[70%] gap-4'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-left font-bold font-montserrat text-[2.5rem]'
        >
          Access your training, whenever you want<br />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className='text-[1.2rem] text-left font-semibold font-montserrat text-gray-700'
        >
          Your Training Journey, Always with You. Access our entire library of badminton, cricket, football, and more programs directly on your mobile device. Download the app, unlock your personalized training plan, and get ready to dominate from anywhere!
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} // Initial scale should be a fraction, e.g., 0.5
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }} // Apply both opacity and scale animations
        transition={{ duration: 0.5, delay: 1.5 }} // Transition duration and delay
        className='w-[20%]'
      >
        <img src={mobile} className='w-full' alt="Mobile App Promo" />
      </motion.div>

    </div>
  );
};

export default MobileAppPromo;
