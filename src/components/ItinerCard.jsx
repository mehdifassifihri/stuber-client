import React from 'react'
import Bluebus from '../assets/bluebus.png'
import Eye from '../assets/eye.png'
import { Link , useNavigate } from 'react-router-dom'


const ItinerCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className='Card rounded-xl p-6 cursor-pointer'
    onClick={()=>navigate(`../Itinerar/${props.id}`)}
    >
        <div className='flex flex-col items-center -mt-7'>
        <img className='Bus' src={Bluebus} alt="Bus"/>
        <p className='text-black -mt-4 text-xs rounded-xl'>{props.reference}</p>
        </div>
        <div className='flex justify-between mt-12'>
            <div className='flex flex-col'>
            <div className='flex'>
                <p className='text-gray-400 text-xs'>Driver : </p><span className='text-black text-xs ml-1'>{props.drivername}</span>
            </div>
            <div className='flex items-center'>
                {props.arrived ? <div className='h-4 w-4 bg-green-500 rounded-full'></div> : <div className='h-4 w-4 bg-orange-500 rounded-full'></div>}
                {props.arrived ? <p className='text-xs text-green-500 ml-1'>Arrived</p> : <p className='text-xs text-orange-500 ml-1'>On Route</p>}
            </div>
            </div>
            <div className='h-8 w-8 rounded-full bg-blue-100 flex justify-center items-center'>
            <img className='w-4' src={Eye} alt="Bus"/>
            </div>
        </div>
        
        
        
        </div>
  )
}

export default ItinerCard