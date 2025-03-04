import React from 'react'
import AboutSection from './AboutSection'
import { Navbar } from 'react-bootstrap'
import Events from './Events'
import OurChapters from './OurChapters'
import FooterChapters from './FooterChapters'

const ChaptersMain = () => {
  return (
    <div className='bg-white'>
     <AboutSection/>
      <Events/>
      <OurChapters/>
    <FooterChapters/>  
    </div>
  )
}

export default ChaptersMain
