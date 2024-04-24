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
import Practice from './components/Practice'
import Quiz from './components/Quiz'
import ProfilePage from './components/ProfilePage'

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
              <NavBar setShowModal={setShowModal} setIsLoggedIn={setIsLoggedIn} />
              
              <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/contactme' element={<ContactMe />} />
                <Route path='/practice/:subjectTitle' element={<Practice />} />
                <Route path='/quiz/:subjectTitle' element={<Quiz />} />
                <Route path='/profile/:username' element={<ProfilePage />} />
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
        <UserContext.Provider value = {username}>
          <ChangePasswordModal setShowModal={setShowModal} />
        </UserContext.Provider>
      );
    }
    else if(showModal == 2)
    {
      return (
        <UserContext.Provider value = {username}>
          <DeleteAccountModal setShowModal={setShowModal} setIsLoggedIn={setIsLoggedIn} />
        </UserContext.Provider>
      );
    }
  }
}

export default App