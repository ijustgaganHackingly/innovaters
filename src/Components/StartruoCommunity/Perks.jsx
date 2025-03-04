import React from 'react'

const Perks = () => {
  return (
    <div className='bg-white max-w-screen-xl mx-auto h-screen'>
        <div className=' font-semibold text-4xl text-center'>Perks of Joining Us</div>

        <div className='flex justify-between w-full py-14'>
            <div className='w-1/2'>
                <div className='flex pb-5'>
                    <div className='flex items-center justify-center'>
                        <img src="../../../public/bullet icon.svg" alt="" className='h-7 w-7'/>
                    </div>
                    <div className='pl-5'>
                        <h2 className='font-bold text-xl'>Scale up your business.</h2>
                        <h5 className='text-gray-500 text-base'>Use our proven networking system to discover amazing business opportunities and grow.</h5>
                    </div>
                 </div>
                 <div className='flex pb-5'>
                    <div className='flex items-center justify-center'>
                        <img src="../../../public/bullet icon.svg" alt="" className='h-7 w-7'/>
                    </div>
                    <div className='pl-5'>
                    <h2 className='font-bold text-xl'>Access to lifelong learning</h2>
                    <h5 className='text-gray-500 text-base'>Learn new ideas, industry trends and best practice by connecting with other professionals.</h5>
                    </div>
                 </div>
                 <div className='flex pb-5'>
                    <div className='flex items-center justify-center'>   <img src="../../../public/bullet icon.svg" alt="" className='h-7 w-7'/>
                    </div>
                    <div className='pl-5'>
                    <h2 className='font-bold text-xl'>Build your professional network</h2>
                    <h5 className='text-gray-500 text-base'>We help you build a trusted network of professionals who share your goals and help you achieve them.</h5>
                    </div>
                 </div>
                 <div className='flex pb-5'>
                    <div className='flex items-center justify-center'>   <img src="../../../public/bullet icon.svg" alt="" className='h-7 w-7'/>
                    </div>
                    <div className='pl-5'>
                    <h2 className='font-bold text-xl'>Access new markets and insights</h2>
                    <h5 className='text-gray-500 text-base'>Gain insights into market and customers through connections within our community.</h5>
                    </div>
                 </div>
            </div>
            <div className='py-4 w-1/2 flex items-end justify-center'>
                <div className=' h-96 w-[500px] relative bg-gray-400'>
                <div className=' h-96 w-[500px] absolute top-[-15px] left-[-15px] bg-gray-300' ></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Perks