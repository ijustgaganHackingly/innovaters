import React from 'react';
import { Link } from 'react-router-dom';

const HeadingBanner = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[605px]">
       
        <div className="absolute inset-0 w-full h-full">
        <img src='/1440x605 (3).jpg' className="w-full object-cover h-full bg-gray-100" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-start justify-center text-center px-4 md:px-20 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] ">
            Shaping tomorrow by connecting 
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] mb-8 ">
          today's brightest minds!
          </h1>
         <Link to='/professionalform'> <button className="bg-[#8b71fe] hover:bg-[#7b59ff] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
            Become a Member
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;