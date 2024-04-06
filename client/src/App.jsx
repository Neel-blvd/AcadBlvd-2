import React, { useEffect, useState, createContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ContactMe from './components/ContactMe'
import LoggedOutPage from './components/LoggedOutPage'
import ChangePasswordModal from './components/ChangePasswordModal'
import DeleteAccountModal from './components/DeleteAccountModal'

//User Context
export const UserContext = createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);  //Change back to false
  const [username, setUsername] = useState();
  const [showModal, setShowModal] = useState(0);
  
  if(!isLoggedIn)
  {
    return(
      <LoggedOutPage setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}/>
    );
  }

  else
  { 
    if(showModal == 0)
    {
      return(
        <UserContext.Provider value = {username}>
            <div className='font-mono'>
              <NavBar setShowModal={setShowModal} />
              
              <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/contactme' element={<ContactMe />} />
              </Routes>
              <footer className='h-40 bg-zinc-900'>

              </footer>
            </div>
          </UserContext.Provider>
      );
    }
    else if(showModal == 1)
    {
      return (
        <ChangePasswordModal setShowModal={setShowModal} />
      );
    }
    else
    {
      return (
        <DeleteAccountModal setShowModal={setShowModal} />
      );
    }
  }
}

export default App