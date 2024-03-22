import React from 'react'
import '../index.css'

function About() {
  return (
    <div className='bg-zinc-900 h-screen text-center'>
        <p className='text-orange-600 text-lg font-mono pt-5'>
            This website was made with the sole purpose of helping the community in the best way I could.
        </p>
        <p className='text-orange-600 text-lg font-mono pt-5'>
            It hosts previous year subjective and features some minimalistic quiz functionality.
        </p>
        <br></br><br></br><br></br>
        <p className='text-orange-600 text-3xl font-bold font-mono'>
            Coming Soon!!!
        </p>
        <p className='text-orange-600 text-lg font-mono pt-5'>
            The integration of a database to it to store user data such as performance, time spent etc.
        </p>
    </div>
  )
}

export default About