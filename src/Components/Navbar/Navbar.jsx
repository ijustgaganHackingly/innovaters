// // import React from 'react';
// // import { use } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {

//   const navigate = useNavigate()

//   const handleLoginClick = () => {
//     navigate('/login');
//   };
//   return (
//     <nav className="bg-transparent h-16 flex items-center px-4 sm:px-8  ">
//       <div className="flex items-center w-full">
//         {/* Logo */}
//         <div className="text-black bg-white font-bold text-sm py-1 px-3">LOGO</div>

//         {/* Navigation Links */}
//         <div className='flex items-center justify-center ml-auto  '>
//         <ul className="flex gap-4 ml-auto text-sm text-white font-medium">
//           <li>Page-1</li>
//           <li>&bull;</li>
//           <li> Page-2</li>
//             <li>&bull;</li>
//           <li>Page-3</li>
//         </ul>
//         </div>

//         {/* Login Button */}
//         <button className="ml-auto bg-[#8162ff]  text-white py-2 px-12  rounded-[6px] hover:opacity-80" onClick={handleLoginClick } >
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { MenuOutlined } from '@mui/icons-material'

import { CiMenuBurger } from "react-icons/ci"
import { IoCloseCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent h-16 px-4 sm:px-6 lg:px-8">
      <div className="h-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-black bg-white font-bold text-sm py-1 px-3">
          LOGO 
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden ml-auto mr-4 text-white"
          onClick={toggleMenu}
        >
          {/* Simple text instead of icons */}
          {isMenuOpen ? <IoCloseCircleSharp/> : <CiMenuBurger/>}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center end flex-1 space-x-4">
          <ul className="flex items-center space-x-4 text-sm text-white font-medium">
            <li className="hover:text-gray-300 cursor-pointer">Page-1</li>
            <li className="text-white">&bull;</li>
            <li className="hover:text-gray-300 cursor-pointer">Page-2</li>
            <li className="text-white">&bull;</li>
            <li className="hover:text-gray-300 cursor-pointer">Page-3</li>
          </ul>
          
        </div>
        <div>
        <button
            className="bg-[#8162ff] hidden lg:flex text-white py-2 px-8 xl:px-12 rounded-[6px] hover:opacity-80 text-sm"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#1d1441] z-50 shadow-lg lg:hidden">
            <ul className="flex flex-col py-4 space-y-2">
              <li className="px-4 py-2 text-white hover:bg-gray-400 cursor-pointer">
                Page-1
              </li>
              <li className="px-4 py-2 text-white hover:bg-gray-400 cursor-pointer">
                Page-2
              </li>
              <li className="px-4 py-2 text-white hover:bg-gray-400 cursor-pointer">
                Page-3
              </li>
              <li className="px-4 py-2">
                <button
                  className="w-full bg-[#8162ff] text-white py-2 px-4 rounded-[6px] hover:opacity-80 text-sm"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;