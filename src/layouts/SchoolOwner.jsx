import React from 'react'
import '../App.css'
import { NavLink,Outlet } from 'react-router-dom'
import BusDriver from '../assets/school-bus.png';
import Logout from '../assets/logout.png';
import Family from '../assets/family.png';
import Dashboard from '../assets/dash.png';
import Student from '../assets/student.png';
import Categorie from '../components/Categorie';

const SchoolOwner = () => {
   
   const choices = [{
    name : "Dashboard",
    image : Dashboard,
    isActivated : false,
    link : "/school"
  },
  {
    name : "Manage Parents",
    image : Family,
    isActivated : false,
    link : "/school/parents"
  },
  {
    name : "Manage Students",
    image : Student,
    isActivated : false,
    link : "/school/students"
  },
]
  return (
    <div className="App">
        
    <div className='Mainbox'>
      <header className='Sidebar'>
          <div className='top'>
          <img className='Bus' src={BusDriver} alt="Bus"/>
          <p>Stuber</p>
          </div>
          <div className='middle'>
            {choices.map((e)=>(
                <Categorie name={e.name} image={e.image} link={e.link}/>
            ))}
          </div>
          <div className='bottom flex flex-col items-center'>
          <img className='w-5' src={Logout} alt="Bus"/>
          <p className='text-xs log'>Log out</p>
          </div>
        
        
        </header>
        <main className='Rightside'>
      
        <Outlet/>
      
        </main>
    </div>
</div>
  )
}

export default SchoolOwner