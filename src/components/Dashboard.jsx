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
        <div className='bg-gray-200 h-full'>
          <div className='flex'>
          <div className='bg-red-500 h-32 w-56 rounded-lg'>
            <p>dwj</p>
          </div>
          <div className='bg-red-500 h-32 w-56 rounded-lg'>
            <p>dwj</p>
          </div>
          <div className='bg-green-500 h-32 w-full rounded-lg'>
            <p>dwj</p>
          </div>
        </div>
        <div className='bg-red-500'>
          <p className=''>jwid</p>
        </div>
          </div>
          
        
    </div>   
  )
}

export default Dashboard