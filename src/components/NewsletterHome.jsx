import React from 'react';
import bg from '../assets/newsletterbg.png';

const NewsletterHome = () => {
  return (
    <div 
      className='px-[5%] bg-[#1c1b1f] py-10 bg-cover bg-center' 
      style={{ backgroundImage: `url(${bg})` }} // Set background image
    >
      <h1 className='font-montserrat font-black text-white text-3xl'>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <h1 className='font-montserrat text-white'>Sign up for our newsletter and exclusive promotions</h1>
      <div className='flex justify-center gap-4 mt-6'>
        <input 
          type="text" 
          className='bg-white font-montserrat w-[60%] px-4 py-2 rounded-md' 
          placeholder='Enter your email' 
        />
        <button className='font-montserrat font-semibold text-white bg-[#ca2d2e] px-4 py-2 rounded-md'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterHome;
