import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PdfFile from './PdfFile';
import Filter from './Filter';
import ScaleLoader from 'react-spinners/ScaleLoader'
const VITE_BACKEND_API = import.meta.env.VITE_BACKEND_API;

function Practice() {

    const {subjectTitle} = useParams();
    const [entities, setLinks] = useState(null);  //entities === question papers
    const [filter, setFilter] = useState({
        year: "",
        type: ""
    })
    
    useEffect(() => {
        const getPdfFiles = async() => {
            setLinks(null)
            
            setTimeout(async() => {
                const x = await fetch(`${VITE_BACKEND_API}/qpapers`, {
                    method: 'PUT',
                    body:JSON.stringify({subject: subjectTitle, year: filter.year, type: filter.type}),
                    headers: {"Content-Type": 'application/json'}
                });
                const entities = await x.json();
                setLinks(entities);
            }, 1000)
        }
        getPdfFiles();
    }, [filter]);
    

  return (
    <div className='bg-zinc-900 min-h-screen text-white'>
        <p className='text-orange-600 text-3xl w-fit mx-auto border-b mb-5 border-orange-600 pb-1'>
            Practice
        </p>
        
        <Filter setFilter={setFilter} /> 
             
        <p className='text-white text-2xl w-fit mx-auto border-b mb-20 pb-1'>
            {subjectTitle}
        </p>
       
        {!entities
        ?
            <div className='w-fit mt-32 mx-auto'><ScaleLoader
                color="rgba(284, 100, 29, 1)"
                height={60}
                radius={80}
                speedMultiplier={1}
                width={10}
            /></div>
        :
            <div>
                {entities.length == 0 ?
                    <p className='text-orange-600 text-center text-xl'>
                        Aw, Snap! No question papers available!
                    </p>
                :
                    entities.map((entity, index) => <PdfFile key={index} link={entity.link}
                        year={entity.year} type={entity.type} />)
                }
            </div>
        }
    </div>
  )
}

export default Practice