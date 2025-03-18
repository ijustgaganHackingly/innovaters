import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'

const CampusLeaderDash = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState('')
    
  useEffect(() => {
    const storedUser = localStorage.getItem('name');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('userId')
    localStorage.removeItem('role')
    navigate("/")
  }

  const getAvatarInitials = (name) => {
    if (!name) return '';

    const middleIndex = Math.floor(name.length / 2);

    const firstNameInitial = name[0] ? name[0].toUpperCase() : '';
    const lastNameInitial = name[middleIndex] ? name[middleIndex].toUpperCase() : '';

    return firstNameInitial + lastNameInitial;
  };

  return (
    <div className='bg-white flex flex-col h-screen sm:flex-row'>
    {/* Sidebar */}
        <div className='w-full min-w-[240px] h-screen bg-gradient-to-t from-[#52447ec3] via-[#2b1d5c] to-[#1d1441] text-white sm:w-1/5'>
            <div className='p-11'>
            <Link to='/'>
              <img src="/8.png" alt="" />
            </Link>
            </div>

            <Link to='tasks'>
              <div className=' p-2 flex hover:bg-indigo-400 text-lg'>
                <div className='w-3/12 flex justify-center items-center'>
                <FontAwesomeIcon icon={faListCheck} />
                </div>
                <div className='w-9/12 justify-start items-center cursor-pointer'>
                Tasks
                </div>
              </div>
            </Link>

        </div>


        <div className='flex flex-col w-full'>
        {/* header */}
          <div className='py-5 px-5 '>
            <div className='flex justify-between  w-full '>

              <div className='hidden w-2/6 bg-slate-200 rounded py-3 lg:block'>
                <FontAwesomeIcon icon={faMagnifyingGlass}  className='ml-3.5'/>
                <input type="text" placeholder='Search' className='ml-2.5 text-black bg-slate-200 outline-none'/>
              </div>

              <div className=' w-[30%] flex justify-evenly relative sm:w-[20%] lg:w-[15%] 2xl:w-[10%]'>
                <div className=' border-2 rounded-full w-10 h-10 flex justify-center items-center relative'>
                  <FontAwesomeIcon icon={faBell} />
                  <div className='h-2 w-2 bg-red-600 rounded-full absolute left-5 top-2 '></div>
                </div>
                <div className='border-2 rounded-full w-10 h-10' onClick={()=>setShow(!show)}>
                  <Avatar sx={{ width: 38, height: 38 }}>
                    {getAvatarInitials(user)}
                  </Avatar>
                  {
                   show && (                <div className='absolute border-2 p-6 rounded-md bg-gray-800 text-white right-1 mt-1 '>
                         <ul>
                           {/* <li className='hover:cursor-pointer'>Settings</li> */}
                          <li className=' hover:cursor-pointer' onClick={handleLogout}>Logout</li>
                       </ul>
                       </div>
                    )
                   } 
                  
                </div>
              </div>
            </div>
          </div>

          {/* main page */}
          <div className='border-2 flex flex-col flex-grow overflow-auto bg-slate-200'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default CampusLeaderDash
// import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import { faBell } from '@fortawesome/free-solid-svg-icons'
// import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
// import { faListCheck } from '@fortawesome/free-solid-svg-icons'
// import { faUpload } from '@fortawesome/free-solid-svg-icons'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Avatar } from '@mui/material'

// const CampusLeaderDash = () => {
//   const [show, setShow] = useState(false)
//   const navigate = useNavigate()
//   const [user, setUser] = useState()
    
//     useEffect(() => {
//       const storedUser = localStorage.getItem('name');
//       if (storedUser) {
//         setUser(storedUser);
//       }
//     }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('name')
//     localStorage.removeItem('userId')
//     localStorage.removeItem('role')
//     navigate("/")
//   }

//   const getAvatarInitials = (name) => {
//     if (!name) return '';

//     const middleIndex = Math.floor(name.length / 2);

//     const firstNameInitial = name[0] ? name[0].toUpperCase() : '';
//     const lastNameInitial = name[middleIndex] ? name[middleIndex].toUpperCase() : '';

//     return firstNameInitial + lastNameInitial;
// };


//   return (
//     <div className='bg-white flex flex-col h-screen sm:flex-row'>
//     {/* Sidebar */}
//         <div className='w-full min-w-[240px] h-screen bg-gradient-to-t from-[#52447ec3] via-[#2b1d5c] to-[#1d1441] text-white sm:w-1/5'>
//             <div className='p-11'>
//             <Link to='/'>
//               <img src="/8.png" alt="" />
//             </Link>
//             </div>

//             {/* <Link to=''>
//             <div className='p-2 flex hover:bg-indigo-400 text-lg mt-5'>
//               <div className='w-3/12 flex justify-center items-center'>
//                 <FontAwesomeIcon icon={faTableColumns} />
//               </div>
//               <div className='w-9/12 justify-start items-center cursor-pointer'>
//               Home
//               </div>
//             </div>
//             </Link> */}
            

//             <Link to='tasks'>
//               <div className=' p-2 flex hover:bg-indigo-400 text-lg'>
//                 <div className='w-3/12 flex justify-center items-center'>
//                 <FontAwesomeIcon icon={faListCheck} />
//                 </div>
//                 <div className='w-9/12 justify-start items-center cursor-pointer'>
//                 Tasks
//                 </div>
//               </div>
//             </Link>

//         </div>


//         <div className='flex flex-col w-full'>
//         {/* header */}
//           <div className='py-5 px-5 '>
//             <div className='flex justify-between  w-full '>

//               <div className='hidden w-2/6 bg-slate-200 rounded py-3 lg:block'>
//                 <FontAwesomeIcon icon={faMagnifyingGlass}  className='ml-3.5'/>
//                 <input type="text" placeholder='Search' className='ml-2.5 text-black bg-slate-200 outline-none'/>
//               </div>

//               <div className=' w-[30%] flex justify-evenly relative sm:w-[20%] lg:w-[15%] 2xl:w-[10%]'>
//                 <div className=' border-2 rounded-full w-10 h-10 flex justify-center items-center relative'>
//                   <FontAwesomeIcon icon={faBell} />
//                   <div className='h-2 w-2 bg-red-600 rounded-full absolute left-5 top-2 '></div>
//                 </div>
//                 <div className='border-2 rounded-full w-10 h-10' onClick={()=>setShow(!show)}>
//                   {/* <img src="/avatar.png" alt="" className='h-full w-full rounded-full hover:cursor-pointer'/>
//                    */}
//                    <Avatar sx={{ ml: 2, width: 40, height: 40 }} >
//                                                    {getAvatarInitials(user.name)}
//                                                </Avatar>
//                   {
//                     show && (
//                       <div className='absolute border-2 p-6 rounded-md bg-gray-800 text-white right-1 mt-1 '>
//                         <ul>
//                           {/* <li className='hover:cursor-pointer'>Settings</li> */}
//                           <li className=' hover:cursor-pointer' onClick={handleLogout}>Logout</li>
//                         </ul>
//                       </div>
//                     )
//                   }
                  
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* main page */}
//           <div className='border-2 flex flex-col flex-grow overflow-scroll bg-slate-200'>
//   <Outlet/>
// </div>
//         </div>
//     </div>
//   )
// }

// export default CampusLeaderDash