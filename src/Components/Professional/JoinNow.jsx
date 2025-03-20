import React from 'react'
import { Link } from 'react-router-dom'

const JoinNow = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center py-12 md:py-16 px-4 min-h-[40vh] w-full'>
        <div className='flex flex-col items-center justify-between max-w-6xl mx-auto text-center'>
          <div className='w-full mb-6 md:mb-8'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-[500] leading-snug'>
              Become part of a network and engage with experts who will
            </h2>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-[500] leading-snug'>
              inspire & guide you on your professional journey
            </h2>
          </div>
          
          <div className='mt-4 md:mt-6'>
            <Link to='/professionalform'>
              <button className='rounded-[6px] border-[1px] py-[10px] px-[20px] md:py-[12px] md:px-[24px] bg-gradient-to-r from-[#8b71fe] to-[#7b59ff] text-white hover:opacity-90 transition-opacity text-sm md:text-base transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all'>
                Join Us Today!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinNow
