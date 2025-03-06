import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-white py-10 px-4 max-w-screen-xl mx-auto h-screen mt-20'>
    <div className='flex flex-col items-center'>
        <h2 className='font-semibold text-4xl'>About us </h2>
        <h3 className='text-gray-500 pt-2 font-medium'>Connecting Faculty Advisors With Students For Brighter Future</h3>
    </div>
    <div className='flex flex-col pt-12 w-full items-center md:flex-row justify-between'>
        <div className='py-6  w-1/2 flex justify-center '>
            <div className='h-96 w-[500px] relative bg-gray-400 '>
                <div className=' h-96 w-[500px] absolute top-[-15px] right-[-15px] bg-gray-300 '>
                  <img src='/550x368.jpg' className=' object-cover ' />
                </div>
            </div>
        </div>
        <div className='text-lg text-center  w-1/2 md:text-left text-gray-500'>
            <p>
At Hackingly, we connect dedicated faculty advisors with enthusiastic students to create a supportive mentorship environment. Our advisors inspire the next generation of innovators by sharing their knowledge and experience
</p><br/>
            <p> We believe in the power of collaboration and sharing ideas to achieve success. Faculty advisors serve as mentors, helping students succeed while connecting them with top professionals in the field. This program is a chance to share your expertise and help students build a brighter future.
</p>
        </div>
    </div>
</div>
  )
}

export default AboutUs
