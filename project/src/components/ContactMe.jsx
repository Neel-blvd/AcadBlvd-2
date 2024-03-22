import React, { useEffect } from 'react'
import gmail from '../public/Gmail.png'
import linkedin from '../public/Linkedin2.png'
import github from '../public/Github2.png'
import leetcode from '../public/Leetcode.png'
import discord from '../public/Discord2.png'
import instagram from '../public/Instagram2.png'
import { useState } from 'react'

function ContactMe() {
  const [scWidth, setScWidth] = useState(window.innerWidth);
  useEffect(
    () => {
      window.addEventListener("resize", () => setScWidth(window.innerWidth))
    }
    ,
    []
  );


  const a =
  <div className='h-screen bg-zinc-900'>
    <div className='pt-24 flex justify-center space-x-10'>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=neelphadke13579@gmail.com" target="_blank">
        <img src={gmail} className='w-10 grayscale hover:filter-none'></img>
      </a>
      <a href="https://www.linkedin.com/in/neel-phadke-b83638201/" target='blank'>
        <img src={linkedin} className='w-10 grayscale hover:filter-none'></img>
      </a>
      <a href="https://github.com/Neel-blvd" target='blank'>
        <img src={github} className='w-10 grayscale hover:filter-none'></img>
      </a>
      <a href="https://leetcode.com/Neel-blvd/" target='blank'>
        <img src={leetcode} className='w-10 grayscale hover:filter-none'></img>
      </a>
      <a href="https://discord.com/" target='blank'>
        <img src={discord} className='w-10 grayscale hover:filter-none'></img>
      </a>
      <a href="https://www.instagram.com/neel__phadke/" target='blank'>
        <img src={instagram} className='w-10 grayscale hover:filter-none'></img>
      </a>
    </div>
  </div>

  const b =
  <div className='h-screen bg-zinc-900'>
    <div className='h-screen flex flex-col justify-center items-center space-y-10 pb-12'>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=neelphadke13579@gmail.com" target="_blank">
        <img src={gmail} className='w-14'></img>
      </a>
      <a href="https://www.linkedin.com/in/neel-phadke-b83638201/" target='blank'>
        <img src={linkedin} className='w-14'></img>
      </a>
      <a href="https://github.com/Neel-blvd" target='blank'>
        <img src={github} className='w-14'></img>
      </a>
      <a href="https://leetcode.com/Neel-blvd/" target='blank'>
        <img src={leetcode} className='w-14'></img>
      </a>
      <a href="https://discord.com/" target='blank'>
        <img src={discord} className='w-14'></img>
      </a>
      <a href="https://www.instagram.com/neel__phadke/" target='blank'>
        <img src={instagram} className='w-14'></img>
      </a>
    </div>
  </div>

  
  return(
    <>      
      {scWidth > 768 ?
        a
      :
        b
      }
    </>
  )
}

export default ContactMe