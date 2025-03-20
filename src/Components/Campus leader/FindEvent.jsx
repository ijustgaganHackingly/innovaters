import { Link } from 'react-router-dom'
import './Find_Event.css'

const FindEvent = () => {
  return (
    <div className='find_event mt-8' id='grad1' >
        <h1 className=' text-3xl font-[500] hidden md:flex '>Your campus needs a leader, and it can be you! </h1>
        <h1 className=' text-2xl font-[500] md:hidden flex '>Your campus needs a  </h1>
        <h1 className=' text-2xl font-[500] md:hidden flex '> leader, and it can be you! </h1>
        <div className='  flex justify-center items-center mt-5'>
          <Link to="/campusForm"><button className='bg-[#7f5fff] transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all py-[12px] px-[20px] border rounded-[6px] h-[48px] w-[226px] text-white ' >Join Now</button></Link>
        </div>
        
    </div>
  )
}

export default FindEvent