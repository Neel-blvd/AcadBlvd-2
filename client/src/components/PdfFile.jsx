import React, { useState } from 'react'

function PdfFile( {link, year, type} ) {

    const [clicked, setClicked] = useState(false);


  return (
    <div className=''>
        {clicked
        ?
            <div className='flex justify-center space-x-5'>
                <p className='text-orange-600 hover:cursor-pointer
                bg-zinc-900 text-xl'
                onClick={() => setClicked(!clicked)}>
                {type} {year}
                </p>
                <iframe src={link} className='w-3/5 h-screen border border-orange-600 mb-10'></iframe>
            </div>
        :
            <p className='h-24 w-fit mx-auto hover:text-orange-600 hover:cursor-pointer
                bg-zinc-900 text-xl'
                onClick={() => setClicked(!clicked)}>
                {type} {year}
            </p>
        }
    </div>
  )
}

export default PdfFile