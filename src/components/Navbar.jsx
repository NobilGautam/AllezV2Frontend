import React from 'react';
import logo from "../assets/allez assets/logo-icon.svg"; // Correct import
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="bg-[#1C1B1F] text-white py-4 font-montserrat sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex flex-row items-center gap-8'>
            <Link to="/">
              <div className="text-xl font-bold flex gap-4">
                <img src={logo} alt="navbar logo" className='w-[80px]' />
              </div>
            </Link>
          </div>
          <div className="gap-8 flex items-center">
            <a href="#" className="hover:underline">Learn & Compete</a>
            <a href="#" className="hover:underline">Know Your Game</a>
            <a href="#" className="hover:underline">Get Your Gear</a>
            <button className="bg-white text-[#1C1B1F] px-4 py-2 rounded-full hover:text-white font-bold hover:bg-black hover:border-[1px] hover:border-white duration-200">Login/Register</button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
