import React, { useState } from 'react'
import orangeFilter from '../public/orangeFilter.png'

function Filter( {setFilter} ) {

    const [clicked, setClicked] = useState(false);
    const [formData, setFormData] = useState({
        year: "",
        type: ""
    })
    

  return (
    <div className='absolute ml-72'>
        {!clicked
        ?
            <div>
                <img src={orangeFilter} className=' w-8 grayscale hover:filter-none hover:cursor-pointer'
                    onClick={() => setClicked(!clicked)}></img>
                {/* Add the filter tag UI here */}
            </div>
        :
            <div className='w-48 h-40 -ml-20'> 
                <img src={orangeFilter} className='w-8 hover:cursor-pointer mx-auto'
                    onClick={() => setClicked(!clicked)}></img>
                <div className='border border-orange-600 w-full h-full rounded-2xl'>
                    <div className='flex'>
                        <p className='w-fit p-2 text-orange-600 text-lg'>Year:</p>
                        <input type='text' className='w-full rounded-2xl bg-black
                            focus:outline-none text-orange-600 p-2'
                            onChange={(e) => setFormData({...formData, year: e.target.value})}
                            value={formData.year}>
                        </input>
                    </div>
                    <div className='flex'>
                        <p className='w-fit p-2 text-orange-600 text-lg'>Type:</p>
                        <input type='text' className='w-full rounded-2xl bg-black
                            focus:outline-none text-orange-600 p-2'
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                            value={formData.type}>
                        </input>
                    </div>
                    <div className='rounded-xl text-black font-bold bg-orange-600 mx-auto w-fit
                        mt-2 p-2 cursor-pointer hover:scale-105'
                        onClick={() => {setClicked(false);setFilter(formData)}}>
                        Apply
                    </div>
                </div>
            </div>
        }   
    </div>
  )
}

export default Filter