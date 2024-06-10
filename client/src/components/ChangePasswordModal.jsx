import React, { useState, useContext } from 'react'
import close from '../public/orangeClose.png'
import {UserContext} from '../App'
const VITE_BACKEND_API = import.meta.env.VITE_BACKEND_API;

function ChangePasswordModal( {setShowModal} ) {

  const [formData, setFormData] = useState({
    oldpw: "",
    newpw: "",
    cnewpw: ""
  })
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongMatchPassword, setWrongMatchPassword] = useState(false);
  const username = useContext(UserContext);

  async function handleChangePassword()
  {
    const enteredPassword = formData.oldpw;
    const fetchedPassword = await fetch(`${VITE_BACKEND_API}/users/${username}`)
    const fetchedPassword2 = await fetchedPassword.json();
    if(fetchedPassword2 != enteredPassword)
      {
        setWrongPassword(true);
        if(formData.newpw == formData.cnewpw)
          setWrongMatchPassword(false);
        else
          setWrongMatchPassword(true);
      }
    else
    {
      setWrongPassword(false);
      if(formData.newpw != formData.cnewpw)
        setWrongMatchPassword(true);
      else
      {
        setWrongMatchPassword(false);
        fetch(`${VITE_BACKEND_API}/users`, {
          method: 'PUT',
          body: JSON.stringify({username: username, password: formData.newpw}),
          headers: {"Content-Type": 'application/json'}
        })
        alert("Updated successfully");
        setShowModal(0);
      }
    }
  }


  return (
    <div className='w-screen h-screen bg-zinc-900 flex flex-col justify-center items-center font-mono'>
      <div className='flex justify-between w-1/3'>
        <p className='text-orange-600 text-3xl'>
          Change Password
        </p>
        <button className='' onClick={() => {setShowModal(0); document.title = 'AcadBlvd | Profile';}}>
          <img src={close} className='w-10 grayscale hover:filter-none'></img>
        </button>
      </div>
      <div className='w-1/3 h-96 rounded-2xl bg-black flex flex-col items-center mt-5'>
        
        <input type='text' className='bg-zinc-900 p-2 rounded-xl mt-10 w-80 text-orange-600 focus:outline-none' 
          placeholder='Enter your current password:'
          onChange={(e) => setFormData({...formData, oldpw: e.target.value})}>
        </input>
        {wrongPassword && <p className='text-orange-600'>Password entered doesn't match with the current password</p>}
        <input type='text' className='bg-zinc-900 p-2 rounded-xl mt-10 w-80 text-orange-600 focus:outline-none' 
          placeholder='Set up a new password:'
          onChange={(e) => setFormData({...formData, newpw: e.target.value})}>
         </input>
        <input type='text' className='bg-zinc-900 p-2 rounded-xl mt-4 w-80 text-orange-600 focus:outline-none' 
          placeholder='Confirm your new password:'
          onChange={(e) => setFormData({...formData, cnewpw: e.target.value})}>
        </input>
        {wrongMatchPassword && <p className='text-orange-600'>Passwords don't match</p>}
        <button className='text-white bg-orange-600 mt-14 p-3 rounded-xl hover:scale-105'
          onClick={() => handleChangePassword()}>
          Change Password
        </button>

      </div>


      
    </div>
    
  )
}

export default ChangePasswordModal