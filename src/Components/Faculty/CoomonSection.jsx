import React from 'react'
import { Link } from 'react-router-dom'

const CommonSection = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 w-full px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col items-center justify-between max-w-6xl mx-auto text-center'>
          <div className='w-full mb-6 sm:mb-8'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-[#1d1d3d] mb-2 sm:mb-3'>
              Become a Faculty advisor and shape the next generation of
            </h2>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-[#1d1d3d]'>
              visionaries through your mentorship!
            </h2>
          </div>
          
          <div className='mt-4 sm:mt-6'>
            <Link to='/facultyForm'>
              <button className='rounded-[6px] border-[1px] py-2 sm:py-3 px-4 sm:px-6 md:px-[24px] bg-gradient-to-r from-[#8b71fe] to-[#7b59ff] text-white font-medium hover:shadow-lg transition-shadow duration-300'>
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonSection