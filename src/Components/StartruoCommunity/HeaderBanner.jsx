import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBanner = () => {
  return (
    <div className="w-full bg-gray-100">
    <div className="relative w-full h-[605px]">
        <div>
          <div className="absolute inset-0 w-full md:flex hidden h-full">
          <img src='/Startups.jpg' className="w-full object-cover   h-full bg-gray-100" />
          </div>

          <div className="absolute inset-0 w-full flex md:hidden h-full">
          <img src='Startup Mobile banner.jpg ' className="w-full object-cover   h-full bg-gray-100" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-center px-4 md:px-20 ">
            <h1 className=" text-[35px] lg:text-[35px] font-bold  text-[#ffffff]  xl:text-[43px]">
            One idea can change the world
            </h1>
            <h6 className="xl:text-[21px] md:text-[12px] lg:text-[16px] text-[#ffffff]">
            A platform where both large-scale and early staged startups connect,
            </h6>
            <h6 className="xl:text-[21px] md:text-text-[12px] lg:text-[16px]  text-[#ffffff] mb-8"> collaborate and explore exciting networking opportunities.</h6>
           <Link to="/startupForm"> <button className="bg-[#8b71fe] transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all hover:bg-[#7b59ff] text-white font-medium py-3 px-6 w-[196px] rounded-md transition-colors duration-300">
              Join Us
            </button></Link>
          </div>
          
        </div>
    </div>
  </div>
  )
}

export default HeaderBanner
