import React from 'react'
import '../App.css'
import { NavLink,Outlet } from 'react-router-dom'
import BusDriver from '../assets/school-bus.png';
import Logout from '../assets/logout.png';
import Categorie from '../components/Categorie';

const SchoolOwner = () => {
   const buttons = ["Dashboard","Manage Parents","Manage Students"]
  return (
    <div className="App">
        
    <div className='Mainbox'>
      <header className='Sidebar'>
          <div className='top'>
          <img className='Bus' src={BusDriver} alt="Bus"/>
          <p>Stuber</p>
          </div>
          <div className='middle'>
            {buttons.map((e)=>(
                <Categorie name={e} image={Logout} link="/Itinerar"/>
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