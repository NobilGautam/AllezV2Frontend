import React from 'react';
import rating from '../assets/rating.png';
import AnimatedUnderline from './AnimatedUnderline';

const testimonials = [
  {
    id: 1,
    text: "I joined the 'Neon Net Nights' fitness challenge organized by this website, and it was a fantastic experience.",
    initial: 'D',
  },
  {
    id: 2,
    text: "I joined the 'Neon Net Nights' fitness challenge organized by this website, and it was a fantastic experience.",
    initial: 'N',
  },
  {
    id: 3,
    text: "I joined the 'Neon Net Nights' fitness challenge organized by this website, and it was a fantastic experience.",
    initial: 'N',
  },
];

const ratings = [
  {
    id: 1,
    value: 4.8,
    label: 'APP STORE',
  },
  {
    id: 2,
    value: 4.8,
    label: 'PLAY STORE',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#1c1b1f] text-white py-12 px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-left">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4">
            <AnimatedUnderline text={"PROOF IN EVERY WORD."} />
          </h2>
          <p className="text-white font-montserrat text-[1.2rem]">
            Don't just take our word for it!
          </p>
          <p className="text-white font-montserrat text-[1.2rem]">
            Hear from the inspiring athletes who have transformed their lives through training with Allez Sportz.
          </p>
        </div>
        {/* Ratings */}
        <img src={rating} alt="" className='w-[40%]'/>
      </div>

      {/* Testimonials */}
      <div className="flex justify-center gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white w-[20%] text-black p-6 rounded-lg flex flex-col items-center">
            <p className="text-center font-montserrat font-semibold mb-10">{testimonial.text}</p>
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
              {testimonial.initial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
