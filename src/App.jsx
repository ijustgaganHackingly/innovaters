// import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
// import Navbar from './Components/Navbar/Navbar'
// import PixelatedImage from './Components/Pixalate/PixalatedImage'
import Login from './Components/Login/Login'
import PinAnimation from './Components/Pixalate/PinAnimation'
import Signup from './Components/Register/Signup'
// import Chapters from './Components/Chapters/Chapters'
import CampusLeader from './Components/Campus leader/CampusLeader'
import ChaptersMain from './Components/Chapters/ChaptersMain'
import Startup from './Components/StartruoCommunity/Startup'
import Professionals from './Components/Professional/Professionals'
import FacultyAdvisors from './Components/Faculty/FacultyAdvisors'
import CampusLeaderForm from './Components/Forms/CampusLeaderForm'
// import Chapter from './Components/Chapter_main/Chapter/Chapter'
// import ImageGallery from './Components/Pixalate/ImageGallery'
// import SwordAnimation from './Components/Pixalate/SwordAnimation'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/campusLeader' element={<CampusLeader/>}/>
        <Route path='/startup' element={<Startup/>}/>
        <Route path='/professionals' element={<Professionals/>}/>
        <Route path='/faculty' element={<FacultyAdvisors/>}/>
        <Route path='/chapter' element={<ChaptersMain/>}/>
        <Route path='/campusForm' element={<CampusLeaderForm/>}/>

        {/* <Route path='/animation' element={<PinAnimation/>}/> */}
        {/* <Route path='/pixel' element={<PixelatedImage/>}/> */}
        {/* <Route path='/sw' element={<SwordAnimation/>}/> */}
        {/* <Route path='/image' element={<ImageGallery/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
