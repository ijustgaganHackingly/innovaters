import React from 'react'
// import { class } from '../../../../../innovaters-backend/node_modules/sift/src/operations';

const ViewTask = () => {
  // TODO: Make API call to get user tasks
  // and loop over them in the jsx

  return (
    <div className='text-5xl font-semibold w-[98%] rounded-md h-[calc(95vh-85px)] bg-white'>
        <div className='p-5'>
          <h1 className='text-3xl p-3'>Hi, <span className='text-violet-800 ml-1'>User</span>!</h1>
          <h1 className='text-lg p-3'>You have been assigned with the below mentioned tasks</h1>
          <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-8 flex'>
              <div className='w-3/4'>task1</div>
              
                <select className='w-1/4 text-black'>
                    <options>Pending</options>
                    <options>Completed</options>
                </select>

          </div>
          <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-8'>task 2</div>
          <div className='pt-8'>
            <h1 className='text-3xl p-3'>Task Description</h1>
            <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-8'>Description</div>
          </div>
          <button className='text-sm p-2 rounded-md bg-indigo-400 text-white ml-5'>Submit/Upload Task</button>
        </div>
        
    </div>
  )
}

export default ViewTask