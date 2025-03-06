import React from 'react';

const OurStory = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1d1d3d] mb-2">
            Our Story!
          </h1>
          <div className="absolute bottom-0 right-0 transform translate-y-1 w-24">
            <img 
              src='/brush stroke.svg' 
              alt="brush stroke" 
              className="w-full"
            />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mt-6 mb-12">
          Creating Opportunities For Networking
        </p>
        
        <p className="text-gray-600 leading-relaxed max-w-5xl mx-auto ">
          Our professional community brings together industry experts and top heads of different companies to encourage growth, innovation and collaboration. Our network includes leading executives and specialists who act as juries and mentors at our events, sharing valuable insights and guidance with aspiring professionals and entrepreneurs.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
