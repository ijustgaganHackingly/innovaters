import React from 'react'

const UploadTask = () => {
  return (
        <div className='text-5xl font-semibold w-[98%] rounded-md h-[calc(95vh-85px)] bg-white'>
            <div className='p-5'>
                <div>
                    <h1 className='text-3xl'>Title</h1>
                    <div className='pt-5'>
                        <p className='text-lg bg-slate-300 rounded-md p-2'>fghggjk</p>
                    </div>
                </div>

                <button className='text-sm border-2 p-3 rounded-md mt-8'>Upload task</button>
                <div className='border-2 mt-5 p-2 bg-slate-300 h-40 w-40'>
                    <img src="" alt="" className='h-40 w-40'/>
                </div>
                <div className='flex'>
                <label className='text-lg flex justify-center items-center mt-3'>Status: </label>
                <div className='pl-5'>
                <select className='text-sm p-2 border-2 rounded-md'>
                    <option value="">Completed</option>
                    <option value="">Pending</option>
                </select>
                </div>
                </div>
          </div>
        </div>
  )
}

export default UploadTask