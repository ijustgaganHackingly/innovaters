import {useState, useEffect} from 'react'

const HomeCampusLeader = () => {
  const [user, setUser] = useState()
  
  useEffect(() => {
    const storedUser = localStorage.getItem('name');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  
  return (
    <div className='text-5xl font-semibold w-full rounded-md h-full bg-white overflow-hidden flex flex-col'>
      <h1 className='flex justify-center pt-5'>
        Welcome <span className='text-violet-800 ml-3'>{user ? user : 'User'}</span>!
      </h1>
      
      
      {/* <div className='flex justify-center w-full'> */}
        {/* <div className='mt-8 w-full px-5'>
          <h1 className='text-3xl text-center sm:text-left'>Notification</h1>
        </div>
      </div>
      
      <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-5 overflow-y-auto flex-grow'>
        task
      </div> */}
    </div>
  )
}

export default HomeCampusLeader

// import {useState, useEffect} from 'react'

// const HomeCampusLeader = () => {

//   const [user, setUser] = useState()

//   useEffect(() => {
//     const storedUser = localStorage.getItem('name');
//     if (storedUser) {
//       setUser(storedUser);
//     }

//   }, []); 
//   return (
//         <div className='text-5xl font-semibold w-[98%] rounded-md h-[calc(95vh-85px)] bg-white'>
//             <h1 className='flex justify-center pt-5'>
//                 Welcome <span className='text-violet-800 ml-3'>{user ? user : 'User'}</span>!
//             </h1>
//             <div className='flex justify-center'>
//               <div className=' mt-8 w-[95%]'>
//                 <h1 className='text-3xl text-center sm:text-left'>Notification </h1>
//               </div>
//             </div>
//             <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-5'>task</div>
//         </div>
//   )
// }

// export default HomeCampusLeader