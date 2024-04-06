import React, { useState, useContext } from 'react'
import profile from '../public/orangeProfile.png'
import {UserContext} from '../App'


function Profile( {setShowModal, setIsLoggedIn} ) {

    const [clicked, setClicked] = useState(false);
    const username = useContext(UserContext);


  return (
    !clicked 
    ?
        <div onClick={() => setClicked(!clicked)} className='cursor-pointer grayscale hover:filter-none'>
            <img className='w-9' src={profile}></img>
        </div>
    :
        <div>
            <div onClick={() => setClicked(!clicked)} className='cursor-pointer w-48 flex justify-end'>
                <img className='w-9' src={profile}></img>
            </div>
            <div className='bg-black rounded-2xl w-48 text-center text-lg mt-4'>
                <div className='p-2 text-orange-600 border-b border-orange-600'>{username}</div>
                <div className='p-2 text-white hover:text-orange-600 cursor-pointer'
                    onClick={() => setShowModal(1)}>
                        Change Password 
                </div>
                <div className='p-3 text-white hover:text-orange-600 cursor-pointer'
                    onClick={() => setIsLoggedIn(false)}>
                    Log Out
                </div>
                <div className='p-3 text-white hover:text-red-600 cursor-pointer' 
                    onClick={() => setShowModal(2)}>
                    Delete Account
                </div>
            </div>
        </div>
    )
}

export default Profile
