import React from 'react'
import { Link } from 'react-router-dom'

const CommonSection = () => {
  return (
    <div>
       <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center h-[40vh] w-full'> 
        <div className='flex flex-col items-center justify-between'>
       <div className=' w-full h-20'>
       <h2 className=' text-4xl'>Your campus needs a leader, and it could be you!</h2>
       </div>
        <div className=' flex  mt-2' >
         <Link to="/startupForm">   <button className='mr-[24px] w-[220px] rounded-[6px] border-[1px] py-[12px] px-[24px] bg-gradient-to-r from-[#8b71fe] to-[#7b59ff] text-white '>Join now </button></Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CommonSection
