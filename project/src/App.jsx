import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ContactMe from './components/ContactMe'


function App() {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactme' element={<ContactMe />} />
      </Routes>
    </div>
  )
}

export default App