import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Menu from '../Components/Menu'
import SpreadJoy from '../Components/SpreadJoy'
import Reviews from '../Components/Reviews'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <SpreadJoy/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
