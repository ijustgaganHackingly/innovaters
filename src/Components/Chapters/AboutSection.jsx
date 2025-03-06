import React from 'react';
import "./About.css"
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="bg-white">
     
      <div className='flex items-center justify-between py-6 z-10'>
        <div className='px-16'>
         <Link to='/'>
         <img src='/Logo 2.png' alt='Hackingly Logo' className='h-10'/></Link>
        </div>
        <div className='z-10'>
          <nav className='flex gap-8 text-gray-700 px-28'>
            <a href="#" className='hover:text-gray-900'>About Us</a>
            <a href="#" className='hover:text-gray-900'>Our Events</a>
            <a href="#" className='hover:text-gray-900'>Chapters</a>
          </nav>
        </div>
      </div>

      <div className="relative py-24 z-10">
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

      <div className="py-6 z-10">
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

      <div className=' lg:block overflow-hidden md:hidden'>
        <div className=' w-[883px] h-[883px] shadow-[#7151FF1F] rounded-full absolute -top-[447px] left-[819px] bg-[#f4f1ff]'/>
        <div className='w-[1162px] h-[1162px] rounded-full absolute -top-[575px] left-[679px] bg-[#f4f1ff] opacity-[50%] shadow-[#7151FF14]'  />
        <div className=' w-[1440px] h-[1440px] shadow-[#7151FF1A] absolute rounded-full -top-[696px] left-[504px] bg-[#f4f1ff] opacity-[45%]'/>
      </div>

      {/* <div className="outer_div overflow-hidden">
            <div className="middle_div">
                <div className="inner_div"></div>
            </div>
        </div> */}
    </div>
  );
};

export default AboutSection;
// import React from 'react'

// const AboutSection = () => {
//   return (
//     <div>
   
//     {/* navbar */}
//       <div className='flex items-center justify-between py-6'>
//         <div className='px-16' >
//         <img src='../../../public/Logo 2.png' alt='Hackingly Logo' className='h-10'/>
//         </div>
//         <div>
//             <nav className='flex gap-8 text-gray-700 px-28'>
//                 <a href="#" className='hover:text-gray-900'>About Us</a>
//                 <a href="#" className='hover:text-gray-900'>Our Events</a>
//                 <a href="#" className='hover:text-gray-900'>Explore Chapters</a>
//             </nav>
//         </div>
        
//       </div>
//       {/* about section */}
//       <div>
//        <div className='flex flex-col items-center justify-center'>
//        <h1>Bring tech Innovation to your Campus!</h1>
//         <h3>Ready to spark excitement at your campus? establish a college chapter to create a central hub for tech, innovation and community. get the change to enhance the students experience, skill development and collaboration opportunities</h3>
//         <button className=' px-[24px] py-[12px] bg-gradient-to-r from-[#8b41fe] to-[#7b59ff] text-white rounded-[6px] w-[196px]  border-[1px] '> signUp</button>
//        </div>
//        <div className='flex flex-col items-center justify-center'>
//         <h1>Who Are we ?</h1>
//         <h3>Kickstart your Journey in tech with a strong community</h3>
//         <p>The Hackingly College chapter is dedicated to technology and innovation , providing a platform for students to learn and collaborate . when you establish a hackingly chapter, you open the door to a world of opportunities for tech enthusiast. with access to masterclass , mentorship, and exclusive events, you'll gain essential skills to kickstart your career in technology</p>
//        </div>
//       </div>
//       {/* eclipse */}
//       <div></div>

//     </div>
//   )
// }

// export default AboutSection
