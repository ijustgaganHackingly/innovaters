import React from 'react';

const Benefits = () => {
  return (
    <div className="w-full py-10 sm:py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl  text-[#1d1d3d] mb-2">
            Exclusive Benefits for Faculty Advisors
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-32 sm:w-40">
            <img 
              src='/brush stroke.svg' 
              alt="brush stroke" 
              className="w-full"
            />
          </div>
        </div>
        
        <h3 className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 mb-8 sm:mb-10 md:mb-12">
          Unlock Unique Benefits & Opportunities As A Faculty Advisor
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Make a Lasting Impact */}
          <div className="flex items-start p-3 sm:p-4">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img src="/megaphone.svg" alt="Impact" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-md font-bold text-[#1d1d3d] uppercase mb-1">MAKE A LASTING IMPACT</h4>
              <p className="text-sm sm:text-base text-gray-600">Mentor future tech innovators.</p>
            </div>
          </div>
          
          {/* Thought Leadership */}
          <div className="flex items-start p-3 sm:p-4">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img src="/megaphone.svg" alt="Leadership" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-md font-bold text-[#1d1d3d] uppercase mb-1">THOUGHT LEADERSHIP</h4>
              <p className="text-sm sm:text-base text-gray-600">Share your expertise at hackathons & events.</p>
            </div>
          </div>
          
          {/* Travel Opportunities */}
          <div className="flex items-start p-3 sm:p-4">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img src="/megaphone.svg" alt="Travel" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-md font-bold text-[#1d1d3d] uppercase mb-1">TRAVEL OPPORTUNITIES</h4>
              <p className="text-sm sm:text-base text-gray-600">Represent hackingly at key events.</p>
            </div>
          </div>
          
          {/* Exclusive Networking */}
          <div className="flex items-start p-3 sm:p-4">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img src="/megaphone.svg" alt="Networking" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-md font-bold text-[#1d1d3d] uppercase mb-1">EXCLUSIVE NETWORKING</h4>
              <p className="text-sm sm:text-base text-gray-600">Connect with founders & industry leaders.</p>
            </div>
          </div>
          
          {/* Recognition */}
          <div className="flex items-start p-3 sm:p-4">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img src="/megaphone.svg" alt="Recognition" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-md font-bold text-[#1d1d3d] uppercase mb-1">RECOGNITION</h4>
              <p className="text-sm sm:text-base text-gray-600">Receive rewards for your contributions.</p>
            </div>
          </div>
          
          {/* Shape The Future */}
          <div className="flex items-start p-3 sm:p-4">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img src="/megaphone.svg" alt="Future" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-md font-bold text-[#1d1d3d] uppercase mb-1">SHAPE THE FUTURE</h4>
              <p className="text-sm sm:text-base text-gray-600">Contribute to a thriving tech community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

// import React from 'react'

// const Benefits = () => {
//   return (
//     <div>
//       <div>
//         <h1>Exclusive Benefits For Faculty Advisors</h1>
//         <img src='../../../public/brush stroke.svg' />
//       </div>
//       <div>
//         <h3>Unlock Unique benefits & opportunities as a Faculty Advisor</h3>
//       </div>
//       <div>

//       </div>
//     </div>
//   )
// }

// export default Benefits