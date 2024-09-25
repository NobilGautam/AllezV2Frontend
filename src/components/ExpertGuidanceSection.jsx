import React from 'react';
import phone from '../assets/phone.png';
import iosCTA from '../assets/allez assets/apple-store-white.png';
import googleCTA from '../assets/allez assets/google-store-white.png';

const ExpertGuidanceSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#144d6e] to-[#691115] via-[#851e23] flex justify-between items-center py-20 px-10">
      {/* Left Side: Text and CTA Buttons */}
      <div className="text-white w-1/2">
        <h2 className="text-[40px] font-bold mb-6 font-montserrat text-left">Expert Guidance in Your Pocket</h2>
        <p className="text-lg mb-8 font-montserrat text-left">
          Access expert advice and support anytime, anywhere. Our app connects you with coaches for personalized feedback and motivation.
        </p>
        <div className="flex gap-4">
          <a href="#" className="inline-block">
            <img src={iosCTA} alt="Download on the App Store" className="w-40" />
          </a>
          <a href="#" className="inline-block">
            <img src={googleCTA} alt="Get it on Google Play" className="w-40" />
          </a>
        </div>
      </div>

      {/* Right Side: Phone Image */}
      <div className="relative w-1/2 flex justify-center">
        <img src={phone} alt="Phone" className="w-[200px] h-auto shadow-lg hover:scale-105 duration-200 shadow-[#144d6e]" />
      </div>
    </div>
  );
};

export default ExpertGuidanceSection;
