import React, { useEffect, useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom';
import backArrow from '../public/left-arrow.png';

function SubjectCard(props) {

  const [clicked, setClicked] = useState(false);
  const linkString = `/practice/${props.x}`

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
          font-mono flex flex-col justify-evenly border border-orange-600'>
            <div className='flex border-b pb-3'>
              <img src={backArrow} className='h-9 grayscale hover:filter-none cursor-pointer ml-3 my-auto'
                onClick={() => setClicked(!clicked)}>
              </img>
              <p className='mx-auto'>{props.x}</p>
            </div>
            <Link to={linkString}><p className='text-white hover:text-orange-600'>Practise</p></Link>
            <p className='text-white hover:text-orange-600'>Quiz</p>
        </div>
    }
    </>
  )
}

export default SubjectCard