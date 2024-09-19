import React from 'react';
import logo from "../assets/allez assets/logo-icon.svg"; // Correct import

const Navbar = () => {
    return (
      <nav className="bg-[#1C1B1F] text-white py-4 font-montserrat sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex flex-row items-center gap-8'>
            <div className="text-xl font-bold">
              <img src={logo} alt="navbar logo" className='w-[80px]' />
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:underline">Products</a>
              <a href="#" className="hover:underline">Solutions</a>
              <a href="#" className="hover:underline">Enterprise</a>
              <a href="#" className="hover:underline">Pricing</a>
            </div>
          </div>
          <div className="gap-8 flex items-center">
            <a href="#" className="hover:underline">Contact Sales</a>
            <a href="#" className="hover:underline">Get app</a>
            <a href="#" className="hover:underline">Sign up</a>
            <a href="#" className="hover:underline">Log in</a>
            <button className="bg-white text-[#1C1B1F] px-4 py-2 rounded-full">Get started</button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
