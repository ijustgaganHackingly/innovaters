// import React from 'react'

// const Perks = () => {
//   return (
//     <div>
//       <div>
//         <h1>Perks of Joining us</h1>
//         <img src='../../../public/brush stroke.svg'/>
//       </div>
//       <div>

//       </div>
//     </div>
//   )
// }

// export default Perks
import React from 'react';

const Perks = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1d1d3d] mb-2">
              Perks of Joining Us
            </h1>
            <div className="absolute bottom-0 left-0 transform translate-y-1 w-32">
              <img 
                src='../../../public/brush stroke.svg' 
                alt="brush stroke" 
                className="w-full"
              />
            </div>
          </div>
        </div>
        
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-6">
          {/* Mentorship Programs */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 mb-4">
              <img src="../../../public/icon1.svg" alt="Mentorship" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d3d] mb-2">MENTORSHIP PROGRAMS</h3>
            <p className="text-gray-600">
              Connect with experienced professionals for personalized guidance and career support.
            </p>
          </div>
          
          {/* Speaker Sessions */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 mb-4">
              <img src="../../../public/icon1.svg" alt="Speaker" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d3d] mb-2">SPEAKER SESSIONS</h3>
            <p className="text-gray-600">
              Learn from industry leaders through engaging talks & inspiring success stories.
            </p>
          </div>
          
          {/* Networking Opportunities */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 mb-4">
              <img src="../../../public/icon1.svg" alt="Networking" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d3d] mb-2">NETWORKING OPPORTUNITIES</h3>
            <p className="text-gray-600">
              Build meaningful relationships with like minded professionals and industry experts at events.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 mb-4">
              <img src="../../../public/icon1.svg" alt="Resources" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d3d] mb-2">EXCLUSIVE RESOURCES</h3>
            <p className="text-gray-600">
              Access valuable articles, webinars and toolkits designed for your professional growth.
            </p>
          </div>
          
          {/* Community Support */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 mb-4">
              <img src="../../../public/icon1.svg" alt="Community" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d3d] mb-2">COMMUNITY SUPPORT</h3>
            <p className="text-gray-600">
              Join a supportive network that encourages collaboration & share experiences and advice.
            </p>
          </div>
          
          {/* Access to Industry Insights */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 mb-4">
              <img src="../../../public/icon1.svg" alt="Insights" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d3d] mb-2">ACCESS TO INDUSTRY INSIGHTS</h3>
            <p className="text-gray-600">
              Stay updated on trends and best practices from leading experts in your field.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Perks;