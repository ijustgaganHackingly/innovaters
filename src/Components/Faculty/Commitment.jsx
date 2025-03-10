import React from 'react';

const Commitment = () => {
  return (
    <div className="w-full py-10 sm:py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1d1d3d] mb-2 relative">
            Commitment to{" "}
            <span className="relative inline-block">
              Excellence!
              <div className="absolute -bottom-2 left-0 right-0 transform w-full">
                <img
                  src='/brush stroke.svg'
                  alt="brush stroke"
                  className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[220px] mx-auto"
                />
              </div>
            </span>
          </h1>
        </div>
        
        <h2 className="text-lg sm:text-xl text-gray-600 mt-6 sm:mt-8 mb-4 sm:mb-6 md:mb-8">
          Become A Member Of The ISO & GDPR Certified Committee
        </h2>
        
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
          As an ISO & GDPR- certified organization, we prioritise data security and privacy. Join our esteemed committee and be a part of an initiative that shapes the program's future and upholds high standards.
        </p>
      </div>
    </div>
  );
};

export default Commitment;