import  { useState } from 'react'
// import AboutSection from './AboutSection'
// import { Navbar } from 'react-bootstrap'
import Events from './Events'
import OurChapters from './OurChapters'
import FooterChapters from './FooterChapters'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const ChaptersMain = () => {
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
     {/* <AboutSection/> */}
     <div className='hidden md:flex items-center justify-between py-6 z-10'>
                     <div className='px-16'>
                       <Link to='/'>
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
              About Us
            </a>
            <a 
              href='#events' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}
            >
              Events
            </a>
            <a 
              href='#Chapter' 
              className='hover:text-gray-900 cursor-pointer'
              onClick={(e) => { e.preventDefault(); scrollToSection('Chapter'); }}
            >
              Our Chapters
            </a>
          
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
                     <a 
              href='#about' 
              className='py-2 text-gray-700 hover:text-gray-900 text-xl'
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About Us
            </a>
            <a 
              href='#events' 
              className='py-2 text-gray-700 hover:text-gray-900 text-xl'
              onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}
            >
              Events
            </a>
            <a 
              href='#Chapter' 
              className='py-2 text-gray-700 hover:text-gray-900 text-xl'
              onClick={(e) => { e.preventDefault(); scrollToSection('Chapter'); }}
            >
              Our Chapters
            </a>
          
                     </nav>
                   </div>

      <div className="relative py-24 z-10" id='about'>
        <div className='flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4'>
          <h1 className="text-5xl font-normal text-gray-900 mb-6">Bring Tech Innovation to Your Campus!</h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Ready to spark excitement at your campus? Establish a college chapter to create a central hub for tech, innovation and community. Get the chance to enhance the student experience, skill development and collaboration opportunities.
          </p>
          <Link to='/chapterForm'><button className='px-[24px] py-[12px] bg-gradient-to-r from-[#8b41fe] to-[#7b59ff] text-white rounded-[6px] w-[196px] border-[1px]'>
            Sign Up
          </button></Link>
        </div>
      </div>

      <div className="py-6 z-10" id='about'>
        <div className='flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 mb-16 z-10'>
          <h2 className="text-4xl font-normal text-gray-900 mb-4 z-10">Who are We?</h2>
          <p className="text-gray-600 text-lg mb-6 z-10">
            Kickstart your journey in tech with a strong community
          </p>
          <p className="text-gray-700 leading-relaxed z-10">
            The Hackingly College Chapter is dedicated to technology and innovation, providing a platform for students to learn and collaborate. When you establish a Hackingly chapter, you open the door to a world of opportunities for tech enthusiasts. With access to masterclasses, mentorship, and exclusive events, you'll gain essential skills to kickstart your career in technology.
          </p>
        </div>
      </div>

      <div className=' lg:flex overflow-hidden hidden md:hidden' id='about'>
        <div className=' w-[883px] h-[883px] shadow-[#7151FF1F] rounded-full absolute -top-[447px] left-[819px] bg-[#f4f1ff]'/>
        <div className='w-[1162px] h-[1162px] rounded-full absolute -top-[575px] left-[679px] bg-[#f4f1ff] opacity-[50%] shadow-[#7151FF14]'  />
        <div className=' w-[1440px] h-[1440px] shadow-[#7151FF1A] absolute rounded-full -top-[696px] left-[504px] bg-[#f4f1ff] opacity-[45%]'/>
      </div>

     <div id='events'>
     <Events/>
     </div>
   <div id='Chapter'>
   <OurChapters/>
   </div>
   <div id='footer'>
   <FooterChapters/>  
   </div>
    </div>
  )
}

export default ChaptersMain
