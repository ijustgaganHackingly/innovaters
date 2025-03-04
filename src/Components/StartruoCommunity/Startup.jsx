import React, { useState } from 'react'
import FooterStartup from './FooterStartup'
import HeaderBanner from './HeaderBanner'
import CommonSection from './CommonSection'
import { Link } from 'react-router-dom'
import AboutStartup from './AboutStartup'
import Perks from './Perks'
import { FaBars, FaTimes } from 'react-icons/fa'

const Startup = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <div className='bg-white'>
   <div className='hidden md:flex items-center justify-between py-6 z-10'>
            <div className='px-16'>
              <Link to='/'>
                <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
              </Link>
            </div>
            <div className='z-10'>
              <nav className='flex gap-8 text-gray-700 px-28'>
                <Link to="/about" className='hover:text-gray-900'>About Us</Link>
                <Link to="/events" className='hover:text-gray-900'>Our Events</Link>
                <Link to="/chapters" className='hover:text-gray-900'>Chapters</Link>
              </nav>
            </div>
          </div>
    
          <div className='md:hidden flex items-center justify-between py-6 z-10 px-4'>
            <div>
              <Link to='/'>
                <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' onClick={toggleMobileMenu}/>
              </Link>
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
              <Link to='/'>
                <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' onClick={toggleMobileMenu} />
              </Link>
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
                <FaTimes size={24} />
              </button>
            </div>
    
            <nav className='flex flex-col items-center mt-16'>
              <Link to="/about" className='py-2 text-gray-700 hover:text-gray-900 text-xl' onClick={toggleMobileMenu}>About Us</Link>
              <Link to="/events" className='py-2 text-gray-700 hover:text-gray-900 text-xl' onClick={toggleMobileMenu}>Our Events</Link>
              <Link to="/chapters" className='py-2 text-gray-700 hover:text-gray-900 text-xl' onClick={toggleMobileMenu}>Chapters</Link>
            </nav>
          </div>
      <HeaderBanner/>
      <AboutStartup/>
      <Perks/>
      <CommonSection/>
      <FooterStartup/>
    </div>
  )
}

export default Startup
