import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import PixelatedImage from './Components/Pixalate/PixalatedImage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path='/pixel' element={<PixelatedImage/>}/>
      </Routes>
    </Router>
  )
}

export default App
