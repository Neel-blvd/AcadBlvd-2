import React, { useEffect, useState } from 'react'
import '../index.css'

function SubjectCard(props) {

  const [clicked, setClicked] = useState(false);

  return (
    <>
    { !clicked ?
        <div className='w-64 h-64 rounded-lg text-orange-600 text-center text-2xl 
          font-mono hover:scale-105 hover:cursor-pointer'
          onClick={() => setClicked(!clicked)}>
          <p className='pt-12'>{props.x}</p>
          <p className=' pt-10'>{props.y}</p>
        </div>
      :
        <div className='w-64 h-60 rounded-3xl bg-black text-orange-600 text-center text-2xl 
          font-mono hover:cursor-pointer'
          onClick={() => setClicked(!clicked)}>
          <p className='pt-12'>Hiiii</p>
          <p className=' pt-10'>Heyyyy</p>
        </div>
    }
    </>
  )
}

export default SubjectCard