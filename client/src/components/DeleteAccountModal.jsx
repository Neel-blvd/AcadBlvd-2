import React, { useContext } from 'react'
import close from '../public/orangeClose.png'
import {UserContext} from '../App'

function DeleteAccountModal( {setShowModal, setIsLoggedIn} ) {

  const username = useContext(UserContext)

  function handleDelete()
  {
    fetch('http://localhost:5000/users',{
      method: 'DELETE',
      body:JSON.stringify({username: username}),
      headers: {"Content-Type": 'application/json'}
    })
    alert("Deleted successfully");
    setShowModal(0);
    setIsLoggedIn(false);
  }


  return (
    <div className='w-screen h-screen bg-zinc-900 flex flex-col justify-center items-center font-mono'>
      <div className='flex justify-between w-1/3'>
        <p className='text-orange-600 text-3xl'>
          Delete Account
        </p>
        <button className='text-white' onClick={() => {setShowModal(0); document.title = 'AcadBlvd | Profile';}}>
          <img src={close} className='w-10 grayscale hover:filter-none'></img>
        </button>
      </div>
      <div className='w-1/3 h-96 rounded-2xl bg-black mt-5'>
        <p className='text-orange-600 text-center text-2xl pt-20'>
          Are you sure you want to delete your account?
        </p>
        <div className='flex justify-evenly mt-20'>
          <button className='text-3xl text-orange-600 hover:scale-110 font-bold'
            onClick={() => setShowModal(0)}>
            No
          </button>
          <button className='text-3xl text-red-600 hover:scale-110 font-bold'
            onClick={handleDelete}>
            Yes
          </button>
        </div>
      </div>
        
    </div>
  )
}

export default DeleteAccountModal