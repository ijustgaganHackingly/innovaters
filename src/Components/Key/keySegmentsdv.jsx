import React from 'react'

const keySegmentsdv = () => {
  return (
    <div className="relative h-auto w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#44376f]  flex flex-col items-center justify-center   pt-24 " >
    <h2 className=" text-white text-4xl mt-12 mb-2" > <SplitTextOnScroll
      text="Key Segments Of Innovaters"
      textClassName="text-center text-4xl text-white"
    /></h2>
    <div >
    <div className="flex justify-center space-x-6 mt-16">
    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[500px] p-6 border border-[#372b59]">
      <div className="mb-6">
      <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
    <div className="p-4">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Campus meeting"
        className="w-[80%] ml-8 h-48 object-cover  rounded-lg flex justify-center"
      />
    </div>
  </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, 
          Lorem ipsum.
        </p>
      </div>
    </div>

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[500px] p-6 border border-[#372b59]">
      <div className="mb-6">
      <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
    <div className="p-4">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Campus meeting"
        className="w-[80%] ml-8 h-48 object-cover  rounded-lg flex justify-center"
      />
    </div>
  </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, 
          Lorem ipsum.
        </p>
      </div>
    </div>
  </div>

    </div>
   
 

<div>
<div className="relative w-[100vw] h-auto  overflow-hidden">
    {/* Dotted pattern container */}
    <div className="absolute inset-0">
      {/* Generate a 10x10 grid of dots */}
      {[...Array(400)].map((_, index) => {
        const row = Math.floor(index / 20);
        const col = index % 20;
        return (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-600/10"
            style={{
              left: `${(col * 5) + 2.5}%`,
              top: `${(row * 5) + 2.5}%`,
            }}
          />
        )}
      )}
      
    </div>
    
    {/* Content container */}
    <div className="relative z-10 p-6">
      {/* Your content goes here */}
      <div >

      <div className="p-6 space-y-6">

{/* Bottom horizontal section */}
<div className="flex justify-center">
<div className="flex bg-[#1a1528]/95 backdrop-blur-sm rounded-3xl overflow-hidden w-full max-w-[1024px]">
  {/* Left content */}
  <div className="flex-1 p-12">
    <h2 className="text-blue-500 text-lg font-semibold mb-4">
      STUDENT COMMUNITY
    </h2>
    <p className="text-white/80 text-sm leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
      Lorem ipsum.
    </p>
  </div>
  
  {/* Right section with gradient */}
  <div className="relative w-2/5 bg-purple-900/50">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/30" />
    <div className="p-8 relative z-10">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Student community"
        className="w-full h-64 object-cover rounded-2xl"
      />
    </div>
  </div>
</div>
</div>
</div>


      <div className="p-6 space-y-6">

{/* Bottom horizontal section */}
<div className="flex justify-center">
<div className="flex bg-[#1a1528]/95 backdrop-blur-sm rounded-3xl overflow-hidden w-full max-w-[1024px]">
  {/* Left content */}
 
  
  {/* Right section with gradient */}
  <div className="relative w-2/5 bg-purple-900/50">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/30" />
    <div className="p-8 relative z-10">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Student community"
        className="w-full h-64 object-cover rounded-2xl"
      />
    </div>
  </div>

  <div className="flex-1 p-12">
    <h2 className="text-blue-500 text-lg font-semibold mb-4">
      STARTUP COMMUNITY
    </h2>
    <p className="text-white/80 text-sm leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
      Lorem ipsum.
    </p>
  </div>
</div>
</div>
</div>
      </div>
    </div>
  </div>
</div>

<div>
    <div className="flex justify-center space-x-6 mt-6 ">
    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[500px] p-6 border border-[#372b59]">
      <div className="mb-6">
      <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
    <div className="p-4">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Campus meeting"
        className="w-[80%] ml-8 h-48 object-cover  rounded-lg flex justify-center"
      />
    </div>
  </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, 
          Lorem ipsum.
        </p>
      </div>
    </div>

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[500px] p-6 border border-[#372b59]">
      <div className="mb-6">
      <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
    <div className="p-4">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Campus meeting"
        className="w-[80%] ml-8 h-48 object-cover  rounded-lg flex justify-center"
      />
    </div>
  </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, 
          Lorem ipsum .
        </p>
      </div>
    </div>
  </div>

    </div>

    </div>
  )
}

export default keySegmentsdv
