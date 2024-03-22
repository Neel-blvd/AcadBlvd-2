import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import logo from '../public/AcadBlvd.png'
import menu from '../public/menu.png'
import line from '../public/horzline.png'

function NavBar() {

    const [scWidth, setScWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);
    
    useEffect(
        () => 
        window.addEventListener("resize", () => setScWidth(window.innerWidth))
        ,
        []
    )

    const wideNavBar = () => {
        return(
            <div className='h-16 bg-black text-orange-600 flex border-b-2 border-orange-600'>
                <button>
                    <img src={logo} className='w-28'></img>
                </button>
                <Link to="/">
                    <button className='ml-2 text-lg hover:scale-105 hover:font-bold py-4 w-32'>
                        Home
                    </button>
                </Link>
                <Link to="/about">
                    <button className='ml-4 text-lg hover:scale-105 hover:font-bold py-4 w-24'>
                        About
                    </button>
                </Link>
                <Link to="/contactme">
                    <button className='ml-6 text-lg hover:scale-105 hover:font-bold py-4 w-32'>
                        Contact Me
                    </button>
                </Link>
            </div>
        );
    }

                
    const narrowNavBar = () => {
        return(
            <>
                {!showMenu ?
                    <div className='bg-black flex justify-between'>
                        <div>
                            <img src={logo} className='w-24 p-1'></img>
                        </div>
                        <div>
                            <button onClick={() => setShowMenu(true)} className='m-1'>
                                <img src={menu}></img>
                            </button>
                        </div>
                    </div>
                :
                    <div className='bg-black'>
                        <div className='flex justify-end'>
                            <button onClick={() => setShowMenu(false)}
                                className='m-1 mr-2'>
                                <img src={line}></img>
                            </button>
                        </div>
                        <div className='w-screen h-screen flex flex-col justify-center space-y-24'>
                            <button onClick={() => setShowMenu(false)} 
                                className='text-orange-600 text-3xl'>
                                <Link to="/">Home</Link>
                            </button>
                            <button onClick={() => setShowMenu(false)} 
                                className='text-orange-600 text-3xl'>
                                <Link to="/about">About</Link>
                            </button>
                            <button onClick={() => setShowMenu(false)} 
                                className='text-orange-600 text-3xl'>
                                <Link to="/contactme">Contact Me</Link>
                            </button>
                        </div>
                    </div>
                }
            </>
        )
    }


    return (
        <>
            {scWidth > 768 ?
                wideNavBar()
                :
                narrowNavBar()
            }
        </>
    )
}

export default NavBar