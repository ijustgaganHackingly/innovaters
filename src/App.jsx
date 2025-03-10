import './index.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Register/Signup'
import CampusLeader from './Components/Campus leader/CampusLeader'
import ChaptersMain from './Components/Chapters/ChaptersMain'
import Startup from './Components/StartruoCommunity/Startup'
import Professionals from './Components/Professional/Professionals'
import FacultyAdvisors from './Components/Faculty/FacultyAdvisors'
import CampusLeaderForm from './Components/Forms/CampusLeaderForm'
import FacultyForm from './Components/Forms/FaciltyForm'
import ProfessionalForm from './Components/Forms/ProfessionalsForm'
import StartupForm from './Components/Forms/Startuoform'
import ChaptersForm from './Components/Forms/ChaptersForm'
import HomeForm from './Components/Forms/HomeForm'
import NotFound from './Components/NotFound/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/campusLeader' element={<CampusLeader/>}/>
        <Route path='/startup' element={<Startup/>}/>
        <Route path='/professionals' element={<Professionals/>}/>
        <Route path='/faculty' element={<FacultyAdvisors/>}/>
        <Route path='/chapter' element={<ChaptersMain/>}/>
        <Route path='/campusForm' element={<CampusLeaderForm/>}/>
        <Route path='/chapterForm' element={<ChaptersForm/>}/>
        <Route path='/facultyForm' element={<FacultyForm/>}/>
        <Route path='/professionalform' element={<ProfessionalForm/>}/>
        <Route path='/startupForm' element={<StartupForm/>}/>
        <Route path='/contactForm' element={<HomeForm/>}/>

      </Routes>
    </Router>
  )
}

export default App
