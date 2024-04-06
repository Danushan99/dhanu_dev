import React from 'react'
import NavBar from './NavBar'

import Top from './top'
import Slide from './Slide'
import AboutPage from './About'
import SliderView from './SliderView'

const HomePage = () => {
  return (
    <div className='bg-Home'>
{/* <Top/> */}
      <NavBar/>
      {/* <Slide/> */}
      <SliderView/>
      <AboutPage/>
    </div>
  )
}

export default HomePage
