// import React, { useState } from 'react';
// import FooterProfessionals from './FooterProfessionals';
// import JoinNow from './JoinNow';
// import HeadingBanner from './HeadingBanner';
// import Perks from './Perks';
// import OurStory from './OurStory';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

// const Professionals = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className='bg-white'>

//       <div className='hidden md:flex items-center justify-between py-6 z-10'>
//         <div className='px-16'>
//           <Link to='/'>
//             <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
//           </Link>
//         </div>
//         <div className='z-10'>
//           <nav className='flex gap-8 text-gray-700 px-28'>
//           <Link to="/" className='hover:text-gray-900'>Home</Link>
//             <a href="#about" className='hover:text-gray-900'>About Us</a>
//             <a href="#perks" className='hover:text-gray-900'>Perks</a>
//             <a href="#join" className='hover:text-gray-900'>Join now</a>
//           </nav>
//         </div>
//       </div>

//       <div className='md:hidden flex items-center justify-between py-6 z-10 px-4'>
//         <div>
//           <Link to='/'>
//             <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' onClick={toggleMobileMenu}/>
//           </Link>
//         </div>
//         <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       <div
//         className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-20 transform ${
//           isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <div className="flex items-center justify-between py-6 px-4">
//           <Link to='/'>
//             <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' onClick={toggleMobileMenu} />
//           </Link>
//           <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
//             <FaTimes size={24} />
//           </button>
//         </div>

//         <nav className='flex flex-col items-center mt-16'>
//         <Link to="/"  className='py-2 text-gray-700 hover:text-gray-900 text-xl' onClick={toggleMobileMenu}>Home</Link>
//           <a href="#about" className='py-2 text-gray-700 hover:text-gray-900 text-xl' onClick={toggleMobileMenu}>About Us</a>
//           <a href="#perks" className='py-2 text-gray-700 hover:text-gray-900 text-xl' onClick={toggleMobileMenu}>Perks</a>
//           <a href="#join" className='py-2 text-gray-700 hover:text-gray-900 text-xl' onClick={toggleMobileMenu}>Join Now</a>
//         </nav>
//       </div>

     
//       <HeadingBanner />
  
//       <div id='about'>
//       <OurStory />
//       </div>
//       <div id='perks'><Perks /></div>
//      <div id='join'> <JoinNow /></div>
//       <FooterProfessionals />
//     </div>
//   );
// };

// export default Professionals;

import  { useState } from 'react';
import FooterProfessionals from './FooterProfessionals';
import JoinNow from './JoinNow';
import HeadingBanner from './HeadingBanner';
import Perks from './Perks';
import OurStory from './OurStory';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Professionals = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className='bg-white'>
      <div className='hidden md:flex items-center justify-between py-6   bg-white z-10 shadow-sm'>
        <div className='px-16'>
          <Link to='/' >
            <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
          </Link>
        </div>
        <div className='z-10'>
          <nav className='flex gap-8 text-gray-700 px-28'>
            <a 
              href='#about' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              Our story
            </a>
            <a 
              href='#perks' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('perks'); }}
            >
              Perks
            </a>
            <a 
              href='#join' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('join'); }}
            >
              Join Now
            </a>
          </nav>
        </div>
      </div>

      <div className='md:hidden flex items-center justify-between py-6  bg-white z-10 px-4 shadow-sm'>
        <div>
          <a href='#home' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
          </a>
        </div>
        <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-20 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between py-6 px-4">
          <a href='#home' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
          </a>
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>

        <nav className='flex flex-col items-center mt-16'>
          <a 
            href='#about' 
            className='py-2 text-gray-700 hover:text-gray-900 text-xl' 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About Us
          </a>
          <a 
            href='#perks' 
            className='py-2 text-gray-700 hover:text-gray-900 text-xl' 
            onClick={(e) => { e.preventDefault(); scrollToSection('perks'); }}
          >
            Our Events
          </a>
          <a 
            href='#join' 
            className='py-2 text-gray-700 hover:text-gray-900 text-xl' 
            onClick={(e) => { e.preventDefault(); scrollToSection('join'); }}
          >
            Join Now
          </a>
        </nav>
      </div>

      <div > 
        <div id="home">
          <HeadingBanner />
        </div>
        <div id="about">
          <OurStory />
        </div>
        <div id="perks">
          <Perks />
        </div>
        <div id="join">
          <JoinNow />
        </div>
        <FooterProfessionals />
      </div>
    </div>
  );
};

export default Professionals;