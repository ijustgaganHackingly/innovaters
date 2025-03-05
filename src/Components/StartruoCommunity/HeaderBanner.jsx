import React from 'react'

const HeaderBanner = () => {
  return (
    <div className="w-full bg-gray-100">
    <div className="relative w-full h-[534px]">
     
      <div className="absolute inset-0 w-full h-full">
      <img src='/1440x605 (2).jpg' className="w-full object-cover h-full bg-gray-100" />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-start justify-center text-center px-4 md:px-20 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#ffffff] ">
        one idea can change the world
        </h1>
        <h6 className="text-2xl md:text-1xl lg:text-2xl text-[#ffffff]  ">
        a platform where both large-scale and early staged startups connect,
       
        </h6>
        <h6 className="text-2xl md:text-1xl lg:text-2xl  text-[#ffffff] mb-8 "> collaborate and explore exciting networking opportunities.</h6>
        <button className="bg-[#8b71fe] hover:bg-[#7b59ff] text-white font-medium py-3 px-6 w-[196px] rounded-md transition-colors duration-300">
          Join Us
        </button>
      </div>
    </div>
  </div>
  )
}

export default HeaderBanner
