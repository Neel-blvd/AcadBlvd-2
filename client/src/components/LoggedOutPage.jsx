import React, { useState } from 'react'
import logo from '../public/AcadBlvd.png'
import bgimg from '../public/darkNightSky.jpg'
import ScaleLoader from 'react-spinners/ScaleLoader'
import spaceTravelShorter from '../public/spaceTravel-2Shorter.mp4'

function LoggedOutPage(props) {

    const [logIn, setLogIn] = useState(false);
    const [signUpFormData, setSignUpFormData] = useState({
        firstName: '',
        username: '',
        password: ''
    })
    const [logInFormData, setLogInFormData] = useState({
        username: '',
        password: ''
    })
    const [wrongPasswordText, setWrongPasswordText] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const setIsLoggedIn = props.setIsLoggedIn;
    const setUsername = props.setUsername;

    async function handleSignUp(e)
    {
        e.preventDefault();
        try{
            const x = await fetch('http://localhost:5000/users', {
                method: 'POST',
                body: JSON.stringify(signUpFormData),
                headers: {'Content-Type': 'application/json'}
            })
            if(!x.ok)
                throw new Error();

            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false);
                setUsername(signUpFormData.username);
                setIsLoggedIn(true);
            }, 5000)
        }
        catch(e)
        {
            alert('Server failed or is inactive');
        }
    }

    async function handleLogIn(e)
    {
        e.preventDefault();
        let username = logInFormData.username;
        const password = logInFormData.password;
        try
        {
            const x = await fetch(`http://localhost:5000/users/${username}`)
            if(!x.ok)
                throw new Error();
            
            const fetchedPassword = await x.json();
            if(fetchedPassword === password)
            {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false);
                    setUsername(username);
                    setIsLoggedIn(true);
                }, 3000)
            }
            else
                setWrongPasswordText(true);
        }
        catch(e){
            setWrongPasswordText(false);
            alert('Server failed or is inactive');
        }
    }



  return (
    logIn
    ?
        <div>
            {
            isLoading
            ?
                <div className='bg-zinc-900 h-screen font-mono'>
                    <video autoPlay className='absolute w-full'>
                        <source src={spaceTravelShorter} type='video/mp4'></source>
                    </video>
                    <div className='absolute w-full'>   
                        <button>
                            <img src={logo} className='w-28'></img>
                        </button>
                        <p className='text-orange-600 text-3xl mx-auto w-fit mt-16 font-bold'>
                            Welcome back {logInFormData.username}!
                        </p>
                        <div className='w-fit mx-auto mt-16'>
                            <ScaleLoader
                                color="rgba(284, 100, 29, 1)"
                                height={60}
                                radius={80}
                                speedMultiplier={1}
                                width={10}
                            />
                        </div>
                        <p className='text-orange-600 text-xl mx-auto w-fit font-bold'>
                            Logging you in...
                        </p>
                    </div>
                </div>
            :
                <div className='bg-zinc-900 h-screen text-orange-600 overflow-x-hidden font-mono'>
                    <img className='absolute' src={bgimg}></img>
                    <div className='absolute w-full'>
                        <button>
                            <img src={logo} className='w-28'></img>
                        </button>
                        <div className='flex justify-center'>
                            <p className='pt-4 text-3xl'>
                                Log In
                            </p>
                        </div>
                        <form className='w-1/3 h-96 mx-auto mt-2 border-orange-600 shadow-md shadow-orange-600 bg-neutral-900 bg-opacity-40
                            flex flex-col items-center'
                            onSubmit={(e) => handleLogIn(e)}>
                            <input required type='text' className='bg-black rounded-lg mt-14 p-2 w-80 focus:outline-none'
                                placeholder='Username:'
                                value={logInFormData.username}
                                onChange={(e) => setLogInFormData({...logInFormData, username: e.target.value})}>
                            </input>
                            <input required type='password' className='bg-black rounded-lg mt-14 p-2 w-80 focus:outline-none'
                                placeholder='Password:'
                                value={logInFormData.password}
                                onChange={(e) => setLogInFormData({...logInFormData, password: e.target.value})}>
                            </input>
                            { wrongPasswordText && <p>Wrong Username or Password, try again!</p> }
                            <button className='bg-orange-600 hover:scale-105 p-2 px-4 rounded-xl
                                mt-12 text-black font-black text-lg'>
                                Log In
                            </button>
                            <div className='flex'>
                                <p className='text-white mt-10'>New here?</p>
                                <a className='mt-10 ml-2 text-orange-600 cursor-pointer hover:underline font-bold'
                                    onClick={() => {setLogIn(!logIn); }}>
                                    Join Now
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    :
        <div>
            {isLoading
            ?
                <div className='bg-zinc-900 h-screen font-mono'>
                    <video autoPlay className='absolute w-full'>
                        <source src={spaceTravelShorter} type='video/mp4'></source>
                    </video>
                    <div className='absolute w-full'>   
                        <button>
                            <img src={logo} className='w-28'></img>
                        </button>
                        <p className='text-orange-600 text-3xl mx-auto w-fit mt-16 font-bold'>
                            Welcome aboard {signUpFormData.username}!
                        </p>
                        <div className='w-fit mx-auto mt-16'>
                            <ScaleLoader
                                color="rgba(284, 100, 29, 1)"
                                height={60}
                                radius={80}
                                speedMultiplier={1}
                                width={10}
                            />
                        </div>
                        <p className='text-orange-600 text-xl mx-auto w-fit font-bold'>
                            Logging you in...
                        </p>
                    </div>
                </div>
            :
                <div className='bg-zinc-900 h-screen text-orange-600 overflow-x-hidden font-mono'>
                    <img src={bgimg} className='absolute'></img>
                    <div className='absolute w-full'>   
                        <button>
                            <img src={logo} className='w-28'></img>
                        </button>
                        <div className='flex justify-center'>
                            <p className='pt-4 text-3xl'>
                                Sign Up
                            </p>
                        </div>
                        <form className='w-1/3 h-96 mx-auto mt-2 border-orange-600 shadow-md shadow-orange-600 bg-neutral-900 bg-opacity-40
                            flex flex-col items-center'
                            onSubmit={(e) => handleSignUp(e)}>
                            <input required type='text' className='rounded-lg mt-8 p-2 w-80 focus:outline-none bg-black'
                                placeholder='First Name:'
                                value={signUpFormData.firstName}
                                onChange={(e) => setSignUpFormData({...signUpFormData, firstName: e.target.value})}>
                            </input>
                            <input required type='text' className='rounded-lg mt-8 p-2 w-80 focus:outline-none bg-black'
                                placeholder='Set up a username:'
                                value={signUpFormData.username}
                                onChange={(e) => setSignUpFormData({...signUpFormData, username: e.target.value})}>
                            </input>
                            <input required type='password' className='rounded-lg mt-4 p-2 w-80 focus:outline-none bg-black'
                                placeholder='Set up a password:'
                                value={signUpFormData.password}
                                onChange={(e) => setSignUpFormData({...signUpFormData, password: e.target.value})}>
                            </input>
                            <button className='bg-orange-600 hover:scale-105 p-2 px-4 rounded-xl
                                mt-12 text-black font-black text-lg'>
                                Sign Up
                            </button>
                            <div className='flex'>
                                <p className='text-white mt-10 '>Already a member?</p>
                                <a className='mt-10 ml-2 text-orange-600 cursor-pointer hover:underline font-bold'
                                    onClick={() => setLogIn(!logIn)}>
                                    Log In
                                </a>
                            </div>
                        </form>
                    </div> 
                </div>
            }
        </div>
  )
}

export default LoggedOutPage