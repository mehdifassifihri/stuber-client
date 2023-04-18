import React from 'react'
import BusDriver from '../assets/school-bus.png';
import Logout from '../assets/logout.png';

import Order from '../components/Order';
import Categorie from '../components/Categorie';
import Dashboard from '../components/Dashboard';
import Itinearar from '../components/Itinearar';

const Driverdashboard = () => {
const buttons = ["Dashboard","User Management","Drivers Management","Manage buses"]
  return (
    <div className="App">
        <div className='Mainbox'>
          <div className='Sidebar'>
            
              <div className='top'>
              <img className='Bus' src={BusDriver} alt="Bus"/>
              <p>PickMeUp</p>
              </div>
              <div className='middle'>
                {buttons.map((e)=>(
                    <Categorie name={e} image={Logout}/>
                ))}
              </div>
              <div className='bottom flex flex-col items-center'>
              <img className='w-5' src={Logout} alt="Bus"/>
              <p className='text-xs'>Log out</p>
              </div>
            
            </div>
          <div className='Rightside'>
            <Itinearar/>
          </div>
        </div>
    </div>
    
  )
}

export default Driverdashboard