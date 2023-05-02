import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Ordercart = (props) => {
  const [drivers, setDrivers] = useState([]);
  const [buses, setBuses] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/User/Driver')
      .then(response => {
        setDrivers(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8080/Bus')
      .then(response => {
        setBuses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 

  const handleDriverChange = (event) => {
    setSelectedDriver(JSON.parse(event.target.value));
    console.log(selectedDriver)
  };

  const handleBusChange = (event) => {
    setSelectedBus(JSON.parse(event.target.value));
    console.log(selectedBus)
  };

  const handlePress = () =>{
    const body = {
      "order":{
        "id":props.orderid
      },
      "driver":{
        "id":selectedDriver.id
      },
      "bus":{
        "id":selectedBus.id
      },
      
    }
    axios.post('http://localhost:8080/Indrive',body)
  }
  return (
    <div className='w-full bg-white flex justify-between items-center p-6 rounded-lg mt-4 shadow-md'>
        <div className='text-black'>
            <p>Parent Name :<span className='text-gray'>{props.parent}</span></p>
            <p>Child Name :<span className='text-gray'>{props.child}</span></p>
        </div>
        <div className='text-black'>
            <label className='mr-3'>Driver</label>
            <select onChange={handleDriverChange} className='bg-gray-200 w-40 rounded-lg px-3 py-2'>
                {drivers.map((driver)=>(
                    <option value={JSON.stringify(driver)} key={driver.id}>{driver.name}</option>
                ))}
            </select>
        </div>
        <div className='text-black'>
            <label className='mr-3'>Bus</label>
            <select onChange={handleBusChange} className='bg-gray-200 w-40 rounded-lg px-3 py-2'>
                {buses.map((bus)=>(
                    <option value={JSON.stringify(bus)} key={bus.id}>{bus.reference}</option>
                ))}
            </select>
        </div>
        <div className='text-black'>
            <div className='flex items-center'>
                <button onClick={handlePress} className='h-5 w-5 bg-green-600 rounded-full mr-2'></button>
                <span className='text-green-600'>Accept</span>
            </div>
            <div className='flex items-center'>
                <button className='h-5 w-5 bg-red-600 rounded-full mr-2'></button>
                <span className='text-red-600'>Decline</span>
            </div>
        </div>
    </div>
  )
}

export default Ordercart