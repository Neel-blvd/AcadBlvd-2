import React, { useState } from 'react'
import logo from '../public/AcadBlvd.png'
import bgimg from '../public/darkNightSky.jpg'

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
    const setIsLoggedIn = props.setIsLoggedIn;
    const setUsername = props.setUsername;

    function handleSignUp()
    {
        const username = signUpFormData.username;
        fetch('http://localhost:5000/users',{
            method: 'POST',
            body: JSON.stringify(signUpFormData),
            headers: {"Content-Type": 'application/json'}
        })
        .then(res => res.json())        //Kind of optional lol, important if you need the response tho
        .then(res => console.log(res))  //Kind of optional lol
        .catch(err => console.error(err));      //Mandatory, as the error should be caught, not let loose!

        setUsername(username);
        setIsLoggedIn(true);
        
    }

    async function handleLogIn()
    {
        const username = logInFormData.username;
        const password = logInFormData.password;
        try
        {
            const x = await fetch(`http://localhost:5000/users/${username}`)
            if(!x.ok)
                throw new Error();
            
            const fetchedPassword = await x.json();
            if(fetchedPassword === password)
            {
                setUsername(username);
                setIsLoggedIn(true);
            }
            else
                setWrongPasswordText(true);
        }
        catch(e){
            alert('Server failed or is inactive');
        }
    }



  return (
    logIn
    ?
        <div className='bg-zinc-900 h-screen text-orange-600 overflow-x-hidden'>
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
                <div className='w-1/3 h-96 mx-auto mt-2 border-orange-600 shadow-md shadow-orange-600
                    flex flex-col items-center'>
                    <input type='text' className='bg-black rounded-lg mt-14 p-2 w-80 focus:outline-none'
                        placeholder='Username:'
                        value={logInFormData.username}
                        onChange={(e) => setLogInFormData({...logInFormData, username: e.target.value})}>
                    </input>
                    <input type='password' className='bg-black rounded-lg mt-14 p-2 w-80 focus:outline-none'
                        placeholder='Password:'
                        value={logInFormData.password}
                        onChange={(e) => setLogInFormData({...logInFormData, password: e.target.value})}>
                    </input>
                    { wrongPasswordText && <p>Wrong Username or Password, try again!</p> }
                    <button className='bg-orange-600 hover:scale-105 p-2 px-4 rounded-xl
                        mt-12 text-black font-bold'
                        onClick={() => handleLogIn()}>
                        Log In
                    </button>
                    <div className='flex'>
                        <p className='text-white mt-10'>New here?</p>
                        <a className='mt-10 ml-2 text-orange-600 cursor-pointer hover:underline font-bold'
                            onClick={() => {setLogIn(!logIn); }}>
                            Join Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    :
        <div className='bg-zinc-900 h-screen text-orange-600 overflow-x-hidden'>
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
                <div className='w-1/3 h-96 mx-auto mt-8 border-orange-600 shadow-md shadow-orange-600
                    flex flex-col items-center'>
                    <input type='text' className='rounded-lg mt-6 p-2 w-80 focus:outline-none bg-black'
                        placeholder='First Name:'
                        value={signUpFormData.firstName}
                        onChange={(e) => setSignUpFormData({...signUpFormData, firstName: e.target.value})}>
                    </input>
                    <input type='text' className='rounded-lg mt-6 p-2 w-80 focus:outline-none bg-black'
                        placeholder='Set up a username:'
                        value={signUpFormData.username}
                        onChange={(e) => setSignUpFormData({...signUpFormData, username: e.target.value})}>
                    </input>
                    <input type='password' className='rounded-lg mt-8 p-2 w-80 focus:outline-none bg-black'
                        placeholder='Set up a password:'
                        value={signUpFormData.password}
                        onChange={(e) => setSignUpFormData({...signUpFormData, password: e.target.value})}>
                    </input>
                    <button className='bg-orange-600 hover:scale-105 p-2 px-4 rounded-xl
                        mt-12 text-black font-bold'
                        onClick={() => handleSignUp()}>
                        Sign Up
                    </button>
                    <div className='flex'>
                        <p className='text-white mt-10'>Already a member?</p>
                        <a className='mt-10 ml-2 text-orange-600 cursor-pointer hover:underline font-bold'
                            onClick={() => setLogIn(!logIn)}>
                            Log In
                        </a>
                    </div>
                </div>
            </div> 
        </div>
  )
}

export default LoggedOutPage