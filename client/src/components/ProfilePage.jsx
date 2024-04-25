import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ScaleLoader from 'react-spinners/ScaleLoader'
import UserStatistic from './UserStatistic';

function ProfilePage() {

    const {username} = useParams();
    const [userStats, setUserStats] = useState(null);
    
    useEffect(() => {
        const loadState = () => {
            setTimeout(async() => {
                const x = await fetch(`http://localhost:5000/users/stats/${username}`);
                const userStats = await x.json();
                setUserStats(userStats);
            }, 1000)
        }
        loadState();
    }, [])



  return (
    <div>
    {!userStats 
    ?
        <div className='min-h-screen bg-zinc-900 pt-32 flex flex-col items-center'>
            <ScaleLoader
                color="rgba(284, 100, 29, 1)"
                height={60}
                radius={80}
                speedMultiplier={1}
                width={10}
            />
            <p className='text-orange-600 mt-5 font-bold text-xl'>
                Loading your Profile...
            </p>
        </div>
    :
        <div className='min-h-screen bg-zinc-900'>
            <p className='text-orange-600 text-3xl w-fit mx-auto border-b mb-5 border-orange-600 pb-1'>
                Profile
            </p>
            <p className='text-white text-2xl w-fit mx-auto border-b mb-10 pb-1'>
                {username}
            </p>

            <p className='text-orange-600 w-4/5 mx-auto text-xl mb-5'>
                Quizzes taken: {userStats.quizzestaken}
            </p>
            <div className='flex flex-col space-y-5'>
                {
                    userStats.quizzeshistory.map((history, index) =>
                        <UserStatistic key={index} history={history} index={index} />)
                }
            </div>
        </div>
    }
    </div>
  )
}

export default ProfilePage