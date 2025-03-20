import React from 'react';
import { Link } from 'react-router-dom';

const HeadingBanner = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[605px]">
        <div className="absolute inset-0 hidden md:flex w-full h-full">
          <img src='/Professionals.jpg' className="w-full object-cover h-full bg-gray-100" alt="Professionals banner" />
        </div>
        
        <div className="absolute inset-0 md:hidden flex w-full h-full">
          <img src='Professionals Mobile banner.jpg' className="w-full  object-cover h-full bg-gray-100" alt="Professionals mobile banner" />
        </div>
        
        <div className="absolute inset-0 flex flex-col pt-28 md:pt-0 items-center md:items-start md:justify-center text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-20">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[500] text-[#fff] leading-tight">
            Shaping tomorrow by connecting
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[500] text-[#fff] leading-tight mb-4 sm:mb-6 md:mb-8">
            today's brightest minds!
          </h1>
          
          <Link to='/professionalform'> 
            <button className="bg-[#8b71fe] hover:bg-[#7b59ff] text-white font-medium text-sm sm:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-md transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
              Become a Member
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;