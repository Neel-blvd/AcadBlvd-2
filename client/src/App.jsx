import React, { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ContactMe from './components/ContactMe'
import LoggedOutPage from './components/LoggedOutPage'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
      !isLoggedIn
      ?
        <LoggedOutPage setIsLoggedIn={setIsLoggedIn}/>
      :
        <div className='font-mono'>
          <NavBar />
          
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactme' element={<ContactMe />} />
          </Routes>
          <footer className='h-40 bg-zinc-900'>

          </footer>
        </div>
  )
}

export default App