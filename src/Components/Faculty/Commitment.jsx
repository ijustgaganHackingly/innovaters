import React from 'react';

const Commitment = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-2">
          <h1 className="text-3xl md:text-5xl  text-[#1d1d3d] mb-2">
            Commitment to Excellence!
          </h1>
          <div className="absolute bottom-0 right-0 transform translate-y-1 w-56">
            <img 
              src='../../../public/brush stroke.svg' 
              alt="brush stroke" 
              className="w-full"
            />
          </div>
        </div>
        
        <h2 className="text-xl text-gray-600 mt-4 mb-8">
          Become A Member Of The ISO & GDPR Certified Committee
        </h2>
        
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          As an ISO & GDPR- certified organization, we prioritise data security and privacy. Join our esteemed committee and be a part of an initiative that shapes the program's future and upholds high standards.
        </p>
      </div>
    </div>
  );
};

export default Commitment;