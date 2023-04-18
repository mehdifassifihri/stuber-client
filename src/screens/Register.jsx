import React, { useState ,} from 'react'
import '../css/register.css';
import Bus from '../assets/school-bus.png'
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom'
const Register = () => {

const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [token, setToken] = useState();

const handleCreateAccount = () => {
  const data = { username, password };
  axios.post('http://localhost:8080/api/v1/auth/register', data)
  .then(response => {
  console.log(response.data);
  navigate("../parcowner")
  setToken(response.body)
  console.log(token);
  })
  .catch(error => {
  console.log(error);
  });
  };
  
  return (
    <div className='register'>
      <div className='registerbox bg-white'>
      
      <div className='part2 mt-5 text-center'>
      <img className='Bus' src={Bus} alt="Bus"/>
            <p className='font-bold'>School responsable account</p>
            <div className='inputs mt-5'>
            <input placeholder='Username' type="text" id="fname" name="username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder='Password' type="password" id="fname" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
      </div>
      <button className='mt-5' onClick={handleCreateAccount}>Create account</button>
      <a className='mt-1'><p>New user? Sign up</p></a>
      </div>
      </div>
    </div>
  )
}

export default Register