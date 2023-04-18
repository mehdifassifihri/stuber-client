import React, { useEffect, useState } from 'react';
import '../css/Itinerarycard.css'
import Itinerary from '../assets/itinerar.png';
import { Space, Spin} from 'antd';
import ItinerCard from './ItinerCard';





const Allitineraries = () => {

    
  const [itineraries, setItineraries] = useState([]);
  const arrivedItineraries = itineraries.filter(itinerary => itinerary.arrived === true);

  
  
 

    useEffect(() => {
      fetch('http://localhost:8080/Itinerary')
        .then(response => response.json())
        .then(data => setItineraries(data))
        .catch(error => console.error(error));
    }, []);

    if (itineraries.length<=0) {
      return <div className='flex justify-center items-center h-full'>
          <Space size="middle"></Space>
          <Spin size="large" />
          
          </div>
      }
  return (
    <div className='m-8'>
        <div className='flex justify-between items-center'>
        <div className='flex'>
            <p className=' text-black font-normal'>Today's</p>
            <p className='text-black font-extrabold ml-2'>Itineraries</p>
        </div>
        <button className='w-32 flex justify-center items-center'>
        <img className='w-5 mr-2' src={Itinerary} alt="Bus"/>
            SET ITINERARY
        </button>
        </div>
        <div className='grid grid-cols-3 mt-5 gap-y-10'>
        {itineraries.map((e)=>(
            <ItinerCard drivername={e.driver.name} reference={e.bus.reference} id={e.id}/>
        ))}
        </div>
        <div>
        <h1 className='font-bold text-black'>Done Itineraries</h1>
        {arrivedItineraries.map((e)=>(
          <h1 className='text-black'>{e.id}</h1>

        ))}
        </div>
        
     
    </div>
    
  )
}

export default Allitineraries