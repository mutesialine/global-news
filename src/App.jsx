import React from 'react'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import Hero from './components/section/Hero'
import News from './components/section/News'
const App = () => {
  return (
    <div className='w-full max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App
