import React from 'react'

const JoinNow = () => {
  return (
    <div>
       <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center h-[40vh] w-full'> 
        <div className='flex flex-col items-center justify-between'>
       <div className=' w-full h-20'>
       <h2 className=' text-4xl'>Become part of a network and engage with experts who will </h2>
       <h2 className=' text-4xl flex items-center justify-center'>inspire & guide you on your professional journey</h2>
       </div>
        <div className=' flex  mt-6' >
            <button className='mr-[24px] rounded-[6px] border-[1px] py-[12px] px-[24px] bg-gradient-to-r from-[#8b71fe] to-[#7b59ff] text-white '>Join Us Today!</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default JoinNow
