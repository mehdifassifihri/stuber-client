import React from 'react'
import Bus from '../assets/busgray.png';
const ItineraryCard = (props) => {
  return (
    <div className='flex items-center gap-4 mt-2'>
            <img className='w-6 ml-2' src={Bus} alt="Bus"/>
            <p className='text-black text-sm'>{props.reference}</p>
            <p className='text-black text-sm'>{props.drivername}</p>
            <div className='flex items-center'>
            <div className={`${props.arrived ? 'h-4 w-4 rounded-full bg-green-500' : 'bg-orange-500 h-4 w-4 rounded-full'}`}></div>
            
            {props.arrived ? <p className='text-green-500 ml-2 text-sm'>Arrived</p> : <p className='text-orange-500 ml-2 text-sm'>Upcoming</p>}
            </div>
    </div>
  )
}

export default ItineraryCard