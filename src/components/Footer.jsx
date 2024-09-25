import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from "../assets/allez assets/logo-icon.svg"

const Footer = () => {
  return (
    <footer className="bg-[#1C1B1F] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1: Logo and Short Description */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="" className='w-[150px]' />
          <p className="text-gray-400">Empowering athletes by connecting them with the right opportunities. We believe in every athlete's journey.</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/solutions" className="hover:underline">Solutions</a></li>
            <li><a href="/enterprise" className="hover:underline">Enterprise</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/contact" className="hover:underline">Contact Sales</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600">
              <FaFacebookF className="text-white" />
            </a>
            <a href="https://www.twitter.com" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400">
              <FaTwitter className="text-white" />
            </a>
            <a href="https://www.instagram.com" className="bg-gray-700 p-2 rounded-full hover:bg-pink-500">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://www.linkedin.com" className="bg-gray-700 p-2 rounded-full hover:bg-blue-700">
              <FaLinkedin className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © 2024 FIELD4ALL. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
