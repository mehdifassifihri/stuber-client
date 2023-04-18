import React from 'react'
import '../css/login.css';
import Bus from '../assets/school-bus.png'

const Login = () => {
  return (
    <div className='Loginpage'>
        <div className='Loginbox'>
            <img className='Bus' src={Bus} alt="Bus"/>
            <p>StubeR</p>
            <div className='inputs'>
            <input placeholder='Username' type="text" id="fname" name="fname"/>
            <input placeholder='Password' type="text" id="fname" name="fname"/>
            <button>Log In</button>
            <a><p>New user? Sign up</p></a>
            </div>
            
            
        </div>
    </div>
  )
}

export default Login