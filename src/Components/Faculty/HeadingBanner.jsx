import React from 'react';

const HeadingBanner = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[534px]">
       
        <div className="absolute inset-0 w-full h-full">
        <img src='../../../public/banners/1440x605 (4).jpg' className="w-full object-cover h-full bg-gray-100" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-center px-4 md:px-20 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] ">
          Good mentors and good 
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] mb-8 ">
          Education have no substitute!
          </h1>
          <button className="bg-[#8b71fe] hover:bg-[#7b59ff] text-white font-medium py-3 px-6 w-[196px] rounded-md transition-colors duration-300">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;