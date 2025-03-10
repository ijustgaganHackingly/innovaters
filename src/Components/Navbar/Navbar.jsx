import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollPosition = useRef(0);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      scrollPosition.current = window.pageYOffset;
      
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
      
      const handleTouchMove = (e) => {
        e.preventDefault();
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollPosition.current);
        
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="relative w-full bg-transparent h-16 px-4 sm:px-6 lg:px-8 z-50">
        <div className="h-full flex items-center justify-center">
          <div className="absolute left-2">
            <img
              src="/8.png"
              alt="Logo"
              className="hidden md:flex h-14 py-1 px-3"
            />
            <img src='/icon.png' alt="Logo" className="md:hidden h-14 py-1 px-3"/>
          </div>
          
          <button
            className="text-white w-12 h-12 flex items-center justify-center z-50"
            onClick={toggleMenu}
          >
            <svg
              viewBox="0 0 100 100"
              className={`w-30 h-30 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
            >
              {isMenuOpen ? (
                <path
                  d="M20 20 L80 80 M80 20 L20 80"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              ) : (
                <g fill="white">
                  <circle cx="50" cy="50" r="20" fill="white" />
                  <rect x="48" y="10" width="4" height="80" fill="white" />
                  <rect x="10" y="48" width="80" height="4" fill="white" />
                </g>
              )}
            </svg>
          </button>
          
          <div className="absolute right-2 md:right-4">
            <button
              className="bg-[#8162ff] text-white py-2 px-8 xl:px-12 rounded-[6px] hover:opacity-80 text-sm"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#1d1441] bg-opacity-95 flex flex-col justify-center items-center z-40"
          style={{ width: '100vw', height: '100vh', touchAction: 'none' }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-6 p-6 text-white text-3xl font-bold text-center">
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to='/campusLeader'>Campus leaders</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/chapter' >Chapters</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/professionals' >Professionals</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/startup' >Startup</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/faculty' >Faculty advisors</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;




// // // import React from 'react';
// // // import { use } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Navbar = () => {

// //   const navigate = useNavigate()

// //   const handleLoginClick = () => {
// //     navigate('/login');
// //   };
// //   return (
// //     <nav className="bg-transparent h-16 flex items-center px-4 sm:px-8  ">
// //       <div className="flex items-center w-full">
// //         {/* Logo */}
// //         <div className="text-black bg-white font-bold text-sm py-1 px-3">LOGO</div>

// //         {/* Navigation Links */}
// //         <div className='flex items-center justify-center ml-auto  '>
// //         <ul className="flex gap-4 ml-auto text-sm text-white font-medium">
// //           <li>Page-1</li>
// //           <li>&bull;</li>
// //           <li> Page-2</li>
// //             <li>&bull;</li>
// //           <li>Page-3</li>
// //         </ul>
// //         </div>

// //         {/* Login Button */}
// //         <button className="ml-auto bg-[#8162ff]  text-white py-2 px-12  rounded-[6px] hover:opacity-80" onClick={handleLoginClick } >
// //           Login
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { MenuOutlined } from '@mui/icons-material'

// import { CiMenuBurger } from "react-icons/ci"
// import { IoCloseCircleSharp } from "react-icons/io5";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-transparent h-16 px-4 sm:px-6 lg:px-8">
//       <div className="h-full flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-black bg-white font-bold text-sm py-1 px-3">
//           LOGO 
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden ml-auto mr-4 text-white"
//           onClick={toggleMenu}
//         >
//           {/* Simple text instead of icons */}
//           {isMenuOpen ? <IoCloseCircleSharp/> : <CiMenuBurger/>}
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center justify-center end flex-1 space-x-4">
//           <ul className="flex items-center space-x-4 text-sm text-white font-medium">
//             <li className="hover:text-gray-300 cursor-pointer">Page-1</li>
//             <li className="text-white">&bull;</li>
//             <li className="hover:text-gray-300 cursor-pointer">Page-2</li>
//             <li className="text-white">&bull;</li>
//             <li className="hover:text-gray-300 cursor-pointer">Page-3</li>
//           </ul>
          
//         </div>
//         <div>
//         <button
//             className="bg-[#8162ff] hidden lg:flex text-white py-2 px-8 xl:px-12 rounded-[6px] hover:opacity-80 text-sm"
//             onClick={handleLoginClick}
//           >
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-16 left-0 right-0 bg-[#1d1441] z-50 shadow-lg lg:hidden">
//             <ul className="flex flex-col py-4 space-y-2">
//               <li className="px-4 py-2 text-white hover:bg-gray-400 cursor-pointer">
//                 Page-1
//               </li>
//               <li className="px-4 py-2 text-white hover:bg-gray-400 cursor-pointer">
//                 Page-2
//               </li>
//               <li className="px-4 py-2 text-white hover:bg-gray-400 cursor-pointer">
//                 Page-3
//               </li>
//               <li className="px-4 py-2">
//                 <button
//                   className="w-full bg-[#8162ff] text-white py-2 px-4 rounded-[6px] hover:opacity-80 text-sm"
//                   onClick={handleLoginClick}
//                 >
//                   Login
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;