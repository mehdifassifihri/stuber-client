import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

import BusDriver from '../assets/school-bus.png';
import Logout from '../assets/logout.png';
import Bus from '../assets/bus.png';
import Driver from '../assets/driver.png';
import Dashlogo from '../assets/dash.png';
import User from '../assets/users.png';
import Paiement from '../assets/paiement.png';
import Itinerar from '../assets/itinerar.png';
import Order from '../assets/order.png';

import Categorie from '../components/Categorie';
import '../App.css'

const ParcOwner = () => {
  
  const choices = [{
    name : "Dashboard",
    image : Dashlogo,
    isActivated : false,
    link : "/parcowner"
  },
  {
    name : "Manage Itinerars",
    image : Itinerar,
    isActivated : false,
    link : "/parcowner/itineraries"
  },
  {
    name : "Manage Drivers",
    image : Driver,
    isActivated : false,
    link : "/parcowner/drivers"
  },
  {
    name : "Manage buses",
    image : Bus,
    isActivated : false,
    link : "/parcowner/buses"
  },
  {
    name : "Orders",
    image : Order,
    isActivated : false,
    link : "/parcowner/orders"
  },
  {
    name : "Manage Memberships",
    image : Paiement,
    isActivated : false,
    link : "/parcowner/Itinerar"
  },
]
  return (
    <div className="App">
        
    <div className='Mainbox'>
      <header className='Sidebar'>
          <div className='top'>
          <img className='Bus' src={BusDriver} alt="Bus"/>
          <p className='font-bold'>STUBER</p>
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

export default ParcOwner