import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeadingBanner = () => {

  const navigate = useNavigate()

  const handleForm = () => {
    console.log('Form Opened');
    navigate('/campusForm')
  }
  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[605px]">
       
        <div className="absolute inset-0 md:flex hidden w-full h-full">
        <img src='/Faculty Advisors.jpg' className="w-full object-cover h-full bg-gray-100" />
        </div>
        
        <div className="absolute inset-0 md:hidden flex w-full h-full">
        <img src='/Faculty Advisors Mobile banner.jpg' className="w-full object-cover h-full bg-gray-100" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-center px-4 md:px-20 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] ">
          Good Faculty Advisors and  
          </h1>
          <h1  className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] ">
          Good Education have 
          </h1>
          <h1  className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] mb-8 ">
          no substitute!
          </h1>
         <Link to='/facultyForm'> <button className="bg-[#8b71fe] transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all hover:bg-[#7b59ff] text-white font-medium py-3 px-6 w-[196px] rounded-md transition-colors duration-300"  >
            Join Us
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;