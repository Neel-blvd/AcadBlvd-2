import React, { useState, useContext } from 'react'
import profile from '../public/orangeProfile.png'
import {UserContext} from '../App'
import { useNavigate } from 'react-router-dom';


function Profile( {setShowModal, setIsLoggedIn} ) {

    const [clicked, setClicked] = useState(false);
    const username = useContext(UserContext);
    const profilePageUrl = `/profile/${username}`;
    const navigate = useNavigate();


  return (
    !clicked 
    ?
        <div onClick={() => setClicked(!clicked)} className='cursor-pointer grayscale hover:filter-none'>
            <img className='w-9' src={profile}></img>
        </div>
    :
        <div className='relative z-50'>
            <div onClick={() => setClicked(!clicked)} className='cursor-pointer w-48 flex justify-end '>
                <img className='w-9' src={profile}></img>
            </div>
            <div className='bg-black rounded-2xl w-48 text-center text-lg mt-4'>
                <div className='p-2 text-orange-600 border-b border-orange-600'>{username}</div>
                <div className='p-2 text-white hover:text-orange-600 cursor-pointer'
                    onClick={() => {setClicked(false); navigate(`profile/${username}`); 
                        document.title = 'AcadBlvd | Profile';}}>
                        Profile
                </div>
                <div className='p-2 text-white hover:text-orange-600 cursor-pointer'
                    onClick={() => {setShowModal(1); document.title = 'AcadBlvd | Change Password';}}>
                        Change Password 
                </div>
                <div className='p-3 text-white hover:text-orange-600 cursor-pointer'
                    onClick={() => {setIsLoggedIn(false); navigate('/'); document.title = 'AcadBlvd';}}>
                    Log Out
                </div>
                <div className='p-3 text-white hover:text-red-600 cursor-pointer' 
                    onClick={() => {setShowModal(2); document.title = 'AcadBlvd | Delete Account';}}>
                    Delete Account
                </div>
            </div>
        </div>
    )
}

export default Profile
