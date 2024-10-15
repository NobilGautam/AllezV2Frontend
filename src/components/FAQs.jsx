import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showFAQs, setShowFAQs] = useState(false); // To toggle the FAQ list visibility

  const faqs = [
    {
      question: 'What are the sports training programs offered by Allez Sportz?',
      answer: 'We offer a variety of sports training programs, including football, basketball, tennis, and more. Each program is designed to cater to different skill levels, from beginners to professionals.',
    },
    {
      question: 'What makes your coaches different from others?',
      answer: 'Our coaches are certified professionals with years of experience. They not only focus on skill development but also on mental toughness and holistic development.',
    },
    {
      question: 'Do you offer opportunities to participate in tournaments?',
      answer: 'Yes, we have collaborations with multiple leagues and tournaments. Our athletes regularly participate in regional and national tournaments to showcase their skills.',
    },
    {
      question: 'How are your training programs structured?',
      answer: 'Our training programs are structured to provide a balanced mix of physical conditioning, skill development, and tactical training. Each program is customized based on the athlete’s current skill level.',
    },
    {
      question: 'How do tournaments fit into your training programs?',
      answer: 'Tournaments are an integral part of our training. They provide athletes with real-game experience and help assess their progress. We prepare athletes specifically for tournament-level competition.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFAQList = () => {
    setShowFAQs(!showFAQs); // Toggles the FAQ list
  };

  return (
    <div className="bg-[#1c1b1f] text-white">
      <h2 className="text-[2rem] font-semibold font-montserrat py-10 text-center border-t-[1px] border-b-[1px] border-white flex justify-center items-center gap-6 cursor-pointer" onClick={toggleFAQList}>
        F A Q s <span className='text-[1rem]'>{showFAQs ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h2>

      {/* FAQ List with Fade-in animation */}
      <div
        className={`max-w-3xl mx-auto transition-all duration-500 ease-in-out ${
          showFAQs ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold font-montserrat">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-xl" />
              ) : (
                <FaChevronDown className="text-xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-sm text-gray-400 font-montserrat pb-4 text-left">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
