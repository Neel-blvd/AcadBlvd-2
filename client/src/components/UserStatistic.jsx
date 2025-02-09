import React, { useState } from 'react'
import UserStatisticDetailed from './UserStatisticDetailed';

function UserStatistic( {history, index} ) {

    const [clicked, setClicked] = useState(false);


  return(
    <div>
        {!clicked
        ?
            <div className='w-4/5 mx-auto h-20 rounded-2xl bg-black text-orange-600 text-center cursor-pointer
                hover:opacity-75'
                onClick={() => setClicked(!clicked)}>
                <div className='flex group'>
                    <p className='text-green-600 pt-5 pl-5 text-2xl'>
                        {index+1}
                    </p>
                    <div className='mx-auto pl-5 pt-3 text-sm md:text-xl'>
                        <p>Subject</p>
                        <p className='text-green-600'>{history.subject}</p>
                    </div>
                    <div className='pt-3 pr-5 text-sm md:text-xl'>
                        <p>Submitted On</p>
                        <p className='text-green-600'>
                            {history.takenOn.toString().replace('T', ' ').replace('Z','').slice(0, -4)}
                        </p>
                    </div>
                </div>
            </div>
        :
            <div>
                <div className='w-4/5 mx-auto h-20 rounded-2xl bg-black text-orange-600 text-center cursor-pointer
                    hover:opacity-75'
                    onClick={() => setClicked(!clicked)}>
                    <div className='flex group'>
                        <p className='text-green-600 pt-5 pl-5 text-2xl'>
                            {index+1}
                        </p>
                        <div className='mx-auto pl-5 pt-3 text-sm md:text-xl'>
                            <p>Subject</p>
                            <p className='text-green-600'>{history.subject}</p>
                        </div>
                        <div className='pt-3 pr-5 text-sm md:text-xl'>
                            <p>Submitted On</p>
                            <p className='text-green-600'>
                                {history.takenOn.toString().replace('T', ' ').replace('Z','').slice(0, -4)}
                            </p>
                        </div>
                    </div>
                </div>
                
                <UserStatisticDetailed quizzescontent={history.quizzescontent} />
            </div>
        }
    </div>
  )
}

export default UserStatistic