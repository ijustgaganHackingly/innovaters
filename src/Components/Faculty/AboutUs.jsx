import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-white py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto min-h-screen mt-16 sm:mt-20'>
      <div className='flex flex-col items-center'>
        <h2 className=' text-3xl sm:text-4xl text-center'>About us</h2>
        <h3 className='text-gray-500 pt-2 font-medium text-center text-sm sm:text-base'>Connecting Faculty Advisors With Students For Brighter Future</h3>
      </div>
      
      <div className='flex flex-col pt-8 sm:pt-12 w-full items-center lg:flex-row lg:justify-between'>
        <div className='py-6 w-full lg:w-1/2 flex justify-center'>
          <div className='h-64 sm:h-80 md:h-96 w-full sm:w-[400px] md:w-[500px] relative bg-gray-400 max-w-full'>
            <div className='h-64 sm:h-80 md:h-96 w-full sm:w-[400px] md:w-[500px] absolute top-[-10px] sm:top-[-15px] right-[-10px] sm:right-[-15px] bg-gray-300 max-w-full'>
              <img src='/550x368.jpg' className='w-full h-full object-cover' alt="About Hackingly" />
            </div>
          </div>
        </div>
        
        <div className='text-base sm:text-lg text-center w-full lg:w-1/2 lg:text-left text-gray-500 mt-6 lg:mt-0 lg:pl-8'>
          <p>At Hackingly, we connect dedicated faculty advisors with enthusiastic students to create a supportive mentorship environment. Our advisors inspire the next generation of innovators by sharing their knowledge and experience.</p>
          <p className='mt-4'>We believe in the power of collaboration and sharing ideas to achieve success. Faculty advisors serve as mentors, helping students succeed while connecting them with top professionals in the field. This program is a chance to share your expertise and help students build a brighter future.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs