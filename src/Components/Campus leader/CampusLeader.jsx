import React, { useState } from 'react'
import FooterCampus from './FooterCampus'
import ImpactSection from './ImpactSection'
import SecondTestimonial from './SecondTestimonial'
import WhoCanJoin from './WhoCanJoin'
import FindEvent from './FindEvent'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const CampusLeader = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      const navigate = useNavigate()

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
        }
      };

  const handleForm = () => {
    console.log('Form Opened');
    navigate('/campusForm')
  }
  return (
    <div className=' w-full h-full bg-white' >
    <div className='hidden md:flex items-center justify-between py-6   bg-white z-10 shadow-sm'>
        <div className='px-16'>
          <Link to='/' >
            <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
          </Link>
        </div>
        <div className='z-10'>
          <nav className='flex gap-8 text-gray-700 px-28'>
            <a 
              href='#perks' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('perks'); }}
            >
              Perks
            </a>
            <a 
              href='#impact' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('impact'); }}
            >
            Impact
            </a>
            <a
            href='#whoCan' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('whoCan'); }}>
              Who can join
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
          <Link to='/' >
            <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
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
          <a href='#home' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10' />
          </a>
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>

        <nav className='flex flex-col items-center mt-16'>
         
          <a 
              href='#perks' 
              className='py-2 text-gray-700 hover:text-gray-900 text-xl'
              onClick={(e) => { e.preventDefault(); scrollToSection('perks'); }}
            >
              Perks
            </a>
            <a 
              href='#impact' 
              className='py-2 text-gray-700 hover:text-gray-900 text-xl'
              onClick={(e) => { e.preventDefault(); scrollToSection('impact'); }}
            >
            Impact
            </a>
            <a
            href='#whoCan' 
              className='py-2 text-gray-700 hover:text-gray-900 text-xl'
              onClick={(e) => { e.preventDefault(); scrollToSection('whoCan'); }}>
              Who can join
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
    

             <div className="w-full bg-gray-100">
  <div className="relative w-full h-[605px] sm:h-[605px] md:h-[605px] lg:h-[605px]">
    <div className="absolute inset-0 w-full h-full">
      <img 
        src='/Campus Leaders.jpg' 
        className="hidden md:block w-full h-full object-cover bg-gray-100" 
        alt="Campus Leader Program" 
      />
      <img 
        src='/Campus Leaders Mobile banner.jpg' 
        className=" block md:hidden w-full h-full object-cover bg-gray-100" 
        alt="Campus Leader Program" 
      />
    </div>
        
        <div className="absolute inset-0 flex flex-col pt-28 md:pt-0 items-center md:items-start md:justify-center text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-20 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-[#fff] ">
          Be the Voice of  
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-[#fff] mb-8 ">
          Our Campus Leader Program!
          </h1>
          <button className="bg-[#8b71fe] transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all hover:bg-[#7b59ff] text-white font-medium py-3 px-6 w-[196px] rounded-md" onClick={handleForm}>
            Join Us Today
          </button>
        </div>
      </div>
    </div>



      <div id='perks'>
      <SecondTestimonial/>
      </div>


<div id='impact'>
<ImpactSection/>
</div>
<div id='whoCan'>
<WhoCanJoin/>
</div>
<div id='join'>
<FindEvent />
</div>

<FooterCampus/>
      
    </div>
  )
}

export default CampusLeader
