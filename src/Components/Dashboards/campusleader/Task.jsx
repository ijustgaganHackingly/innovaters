import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../constants.js';
import axiosInstance from '../../helper/axiosinstace.js';
import TaskList from './TaskList.jsx';

const Tasks = () => {
  const [userName, setUserName] = useState()
  const [userId, setUserId] = useState()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setUserName(localStorage.getItem('name'))
    const storedUserId = localStorage.getItem('userId')
    setUserId(storedUserId)
    console.log("localstorage userid -> ", localStorage.getItem('userId'), "Stored userId", storedUserId, "userId", userId)
  },[])

  useEffect(() => {
    console.log("userId updated", userId)
    if (userId) {
      fetchTasks()
      // const mockTasks = [
      //   {
      //     "_id": "1",
      //     "title": "Organize a Tech Workshop",
      //     "description": "Plan and conduct a workshop on web development for students, covering HTML, CSS, and JavaScript.",
      //     "dueDate": "2025-03-25",
      //     "status": "Pending"
      //   },
      //   {
      //     "_id": "2",
      //     "title": "Promote Internship Opportunities",
      //     "description": "Spread awareness about available internship programs by sharing details with students and arranging an info session.",
      //     "dueDate": "2025-03-28",
      //     "status": "Pending"
      //   },
      //   {
      //     "_id": "3",
      //     "title": "Coordinate a Hackathon",
      //     "description": "Work with the college administration to set up a coding hackathon and encourage students to participate.",
      //     "dueDate": "2025-04-05",
      //     "status": "Completed"
      //   },
      //   {
      //     "_id": "4",
      //     "title": "Collect Student Feedback",
      //     "description": "Gather feedback from students about their learning experience and report insights to the partnership team.",
      //     "dueDate": "2025-03-30",
      //     "status": "Pending"
      //   },
      //   {
      //     "_id": "5",
      //     "title": "Manage Social Media Campaign",
      //     "description": "Create and post engaging content on social media to increase student participation in upcoming events.",
      //     "dueDate": "2025-04-02",
      //     "status": "Completed"
      //   }
      // ]
      // setTasks(mockTasks)
    }
  }, [userId])

  const fetchTasks = async()=>{
    try{
      const response = await axiosInstance.get(`${BASE_URL}/task/usertask/${userId}`)
      console.log("response",response)

      setTasks(response.data)
    }
    catch(error){
      console.log('Error fetching data',error)
    }  
  }

  return (
    <div className='w-[98%] rounded-md h-[calc(95vh-85px)] bg-white py-5'>
        {/* <div className='p-5'> */}
          {/* <h1 className='text-3xl p-3'>Hi, <span className='text-violet-800 ml-1'>{userName ? userName : 'User'}</span>!</h1> */}
          {/* <span className=''>You have been assigned with the below tasks</span> */}
          {/* <h1 className='text-2xl p-3'>Task</h1> */}
          {/* {tasks.map((task) => {
              return (<div className='border-2'>
                <div className='w-3/4'>{task.title}</div>
                <div className='w-3/4'>{task.description}</div>
              </div>)
            })} */}
          {/* <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-8 flex'>
              <div className='w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatum, doloribus numquam ad dolorem accusamus. Ipsum placeat qui quidem minima sapiente eos. Pariatur nam quas nesciunt nobis ratione alias, magni minima sit, doloribus officia adipisci doloremque, tempore molestiae accusantium hic sapiente qui eveniet! Ea, minus dolorum laboriosam id nulla recusandae.</div>
                <select className='w-2/12 text-black p-2 h-10'>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
          </div> */}
          {/* <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-8'>task 2</div> */}
          {/* <div className='pt-8'>
            <h1 className='text-2xl p-3'>Task Description</h1>
            <div className='bg-slate-300 text-lg mt-5 mx-5 py-5 rounded-md pl-8'>Description</div>
          </div> */}
          {/* <button className='text-sm p-2 rounded-md bg-indigo-400 text-white ml-5'>Submit/Upload Task</button> */}
        {/* </div> */}
        
        <div className="">
          <div className="px-5 font-semibold text-2xl">Hi <span className="text-violet-800 ml-1 capitalize">{userName ? userName : "User"}!</span></div>
          <div className="px-5 pb-5 pt-3">{tasks.length > 0 ? "You have been assigned with the below tasks" : "You have no tasks assigned."}</div>
          {tasks?.length > 0 && <TaskList tasks={tasks}></TaskList> }
        </div>
    </div>
  )
}

export default Tasks