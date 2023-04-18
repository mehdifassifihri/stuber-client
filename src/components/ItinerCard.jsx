import React from 'react'
import Bluebus from '../assets/bluebus.png'
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
                <p className='text-gray-400 text-xs'>Driver : </p><span className='text-black text-xs'>{props.drivername}</span>
            </div>
            <div className='flex items-center'>
                <div className='h-5 w-5 bg-green-500 rounded-full'></div>
                <p className='text-xs text-green-500 ml-1'>Arrived</p>
            </div>
            </div>
            <div className='h-8 w-8 rounded-full bg-cyan-400'>

            </div>
        </div>
        
        
        
        </div>
  )
}

export default ItinerCard