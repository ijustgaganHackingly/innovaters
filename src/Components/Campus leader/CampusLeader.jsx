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

  const handleForm = () => {
    console.log('Form Opened');
    navigate('/campusForm')
  }
  return (
    <div className=' w-full h-full bg-white' >
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
      {/* <div className=' w-full bg-white h-[534px] '>
        <div className=' w-full h-full ' >
            <img src='../../../public/banners/1440x605 (1).jpg'   alt='campus leader' className='w-full h-full object-cover' />
        </div>
      </div> */}

      <div className="w-full bg-gray-100">
      <div className="relative w-full h-[534px]">
       
        <div className="absolute inset-0 w-full h-full">
        <img src='/banners/1440x605 (1).jpg' className="w-full object-cover h-full bg-gray-100" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-center px-4 md:px-20 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] ">
          Be the Voice of  
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] mb-8 ">
          Our Campus Leader Program!
          </h1>
          <button className="bg-[#8b71fe] hover:bg-[#7b59ff] text-white font-medium py-3 px-6 w-[196px] rounded-md transition-colors duration-300" onClick={handleForm}>
            Join Us Today
          </button>
        </div>
      </div>
    </div>



      <SecondTestimonial/>

<ImpactSection/>
<WhoCanJoin/>
<FindEvent/>

<FooterCampus/>
      
    </div>
  )
}

export default CampusLeader
