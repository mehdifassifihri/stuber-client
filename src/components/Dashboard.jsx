import React, { useEffect ,useState} from 'react'
import BusDriver from '../assets/school-bus.png';
import Wave from '../assets/wave.png';
import Bus from '../assets/busgray.png';
import '../css/dashboard.css'
import ItineraryCard from './ItineraryCard';

const Dashboard = () => {
  const [driverCount, setDriverCount] = useState(0);
  const [busCount, setBusCount] = useState(0);
  const [itinearies, Setitineraries] = useState([]);

  const nonarrived = itinearies.filter((itinearie)=>itinearie.isArrived==true)

  useEffect(() => {
    fetch('http://localhost:8080/Bus/nbrbuses')
      .then(res => res.json())
      .then(data => setDriverCount(data));

    fetch('http://localhost:8080/User/Driver/nbrdrivers')
      .then(res => res.json())
      .then(data => setBusCount(data));

    fetch('http://localhost:8080/Itinerary')
      .then(res => res.json())
      .then(data => Setitineraries(data));
  }, []);
  return (
    <div className='dashflex'>
        
        <div className='flex justify-between'>
            <div className='flex justify-center items-center'>
                <p className='text-black text-lg'>Hello <span className='font-bold text-lg'>Mehdi</span></p>
                <img className='w-6 ml-2' src={Wave} alt="Bus"/>
            </div>
        </div>

        
        
        <p className='text-black font-extrabold text-lg py-5'>Dashboard</p>
        <div className='dashcontent grid grid-cols-2 gap-2'>
        <div className='bg-white grid grid-cols-2 gap-2'>
              <div className='text-black bg-zinc-100 h-28 rounded-2xl p-3 flex justify-between'>
              <p className='text-black h-32 font-semibold'>Drivers</p>
              <span className='text-black'>{driverCount}</span>
              </div>
              <div className='text-black bg-zinc-100 h-28 rounded-2xl p-3 flex justify-between'>
              <p className='text-black h-32 font-semibold'>Bus</p>
              <span className='text-black'>{busCount}</span>
              </div>
              
        </div>
        <div className='text-black bg-zinc-100 h-28 rounded-2xl p-3'>
              <p className='text-black h-32 font-semibold'>Reclamation</p>
        </div>
        
        <div>
          <p className='text-black'>Upcoming itinearies</p>
          {itinearies.map((itinerary)=>(
            <ItineraryCard id={itinerary.id} reference={itinerary.bus.reference} drivername={itinerary.driver.name} arrived={itinerary.arrived}/>
          ))}
        </div> 
        </div>
        
    </div>   
  )
}

export default Dashboard