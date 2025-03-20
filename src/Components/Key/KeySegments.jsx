
import React from 'react';
import SplitTextOnScroll from '../SplitText/SplitTextOnScroll';

const KeySegments = () => {
    return (
        <div className="relative h-auto w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#44376f] flex flex-col items-center justify-center pt-24">
  <h2 className="text-white font-[500] text-4xl mt-12 mb-2 text-center">
    <SplitTextOnScroll
      text="Key Segments Of Innovators"
      textClassName="text-center pb-4 text-4xl text-white"
    />
  </h2>

  <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-16 px-4">
    

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[500px] p-6 border border-[#372b59] md:mt-8 md:mb-6 ">
   
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 " />
          <div className="p-4 z-10">
            <img
              src="/c 1.png"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg z-10"
            />
          </div>
        </div>
        <h2 className="text-[#565ADD] text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
        As a campus leader, you have the power to inspire change, unite students, and create exciting experiences that make your campus a better place for all.
        </p>
      </div>
    </div>

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[500px] p-6 border border-[#372b59] md:mt-8 md:mb-6 ">
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
          <div className="p-4">
            <img
              src="/c 2.png"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-[#565ADD] text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
        Be a part of the driving force behind student life, sparking enthusiasm and teamwork while leading fun events and activities that bring the community together.
        </p>
      </div>
    </div>
  </div>


  <div className="relative w-full h-auto overflow-hidden">
  <div className="absolute inset-0">
    {[...Array(400)].map((_, index) => {
      const row = Math.floor(index / 20);
      const col = index % 20;
      return (
        <div
          key={index}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-600/10"
          style={{
            left: `${col * 5 + 2.5}%`,
            top: `${row * 5 + 2.5}%`,
          }}
        />
      );
    })}
  </div>

  <div className="relative z-10 p-2 space-y-8">
 
    <div className="flex flex-wrap justify-center gap-6">
      <div className="flex flex-col md:flex-row bg-[#1a1528]/95 backdrop-blur-sm rounded-3xl overflow-hidden w-full max-w-[1024px]">
    
        <div className="flex-1 p-4 sm:p-6 md:p-12">
          <h2 className="text-[#565ADD] text-lg font-semibold mb-4">
            STUDENT COMMUNITY
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
          Connect with fellow students, participate in engaging events, and collaborate on projects that enhance your learning experience and build lasting connections.
          </p>
        </div>

        <div className="relative w-full md:w-2/5 bg-purple-900/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/30" />
          <div className="p-4 sm:p-6 relative z-10">
            <img
              src="/300-208.png"
              alt="Student community"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      <div className="flex flex-col md:flex-row-reverse bg-[#1a1528]/95 backdrop-blur-sm rounded-3xl overflow-hidden w-full max-w-[1024px]">
        
        <div className="flex-1 p-4 sm:p-6 md:p-12">
          <h2 className="text-[#565ADD] text-lg font-semibold mb-4">
            STARTUP COMMUNITY
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
          Our startup community brings together large-scale and early-stage startups, providing a platform for collaboration, networking, and idea-sharing for new possibilities.
          </p>
        </div>

        <div className="relative w-full md:w-2/5 bg-purple-900/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/30" />
          <div className="p-4 sm:p-6 relative z-10">
            <img
              src="/300-208 2.png"
              alt="Startup community"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-6 px-4">
    

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[500px] p-6 border border-[#372b59] mb-6 sm:mb-0 ">
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
          <div className="p-4 z-50">
            <img
              src="/C 3.png"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-[#565ADD] text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
        Be among the passionate students who inspire their peers, organize engaging events, and promote initiatives that enhance campus life, creating an inclusive community for everyone.
        </p>
      </div>
    </div>

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[500px] p-6 border border-[#372b59]  ">
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10 " />
          <div className="p-4">
            <img
              src="/Students.png"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-[#565ADD] text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
        Step up as a campus leader! You have the unique opportunity to inspire others. By organizing events and initiatives, you can help shape a positive campus culture.
        </p>
      </div>
    </div>
  </div>
</div>

</div>

    );
};

export default KeySegments;
