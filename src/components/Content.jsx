
import { Select, Space,Modal,Button, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from "axios";


const Content = () => {

  const [selectedStudents, setSelectedStudents] = useState([]);
  // Add to selected students array with avoiding duplication
  const handleStudentClick = (student) => {
    if (selectedStudents.length < 15) {
      if (!selectedStudents.some(s => s.id === student.id)) {
        setSelectedStudents([...selectedStudents, student]);
      } else {
        alert("This student is already selected.");
      }
    } else {
      alert("Insufficient Places");
    }
  };
  //fetch students
  const [students, setStudents] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch(`http://localhost:8080/Student`); // replace with your API endpoint
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };
  fetchItinerary();
  axios.get("http://localhost:8080/User/Driver").then((response) => {
      setDrivers(response.data);
    });

    axios.get("http://localhost:8080/Bus").then((response) => {
      setBuses(response.data);
    });
  }, []);


  

  

  const driverOptions = drivers.map((driver) => ({
    value: driver.id,
    label: driver.name,
  }));
  //

  //add itnerary
  const [selectedBus, setSelectedBus] = useState(null);

  const handleChangeBus = (value) => {
    setSelectedBus(value);
    console.log(selectedBus)
  };

  function createNewTrip() {
    const requestBody = {
      "start": {
        "description": "Parc",
        "latitude": 31.634507,
        "longitude": -7.998871
      },
      "end": {
        "description": "El Eraki school",
        "latitude": 31.678314,
        "longitude": -7.999954
      },
      "students": selectedStudents.map(student => ({ id: student.id })),
      "driver": {"id":4},
      "bus": {"id":1}
    };
    console.log(selectedStudents)
    const apiUrl = 'http://localhost:8080/Itinerary';
    axios.post(apiUrl, requestBody)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  

  
  const busOptions = buses.map((bus) => ({
    value: bus.id,
    label: bus.reference,
  }));
  //


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearSelected = () => {
    setSelectedStudents([]);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='flex grid grid-cols-2 mt-10'>
      <div className='flex flex-col '>
        <div className='inset-1'>
        <div className='flex items-center'>
        <p className='text-blue-800 w-20 text-sm'>Driver</p>
        <Select
      defaultValue="Select Driver"
      style={{
        width: 150,
      }}
      onChange={handleChange}
      options={driverOptions}
    />
        </div>
        <div className='flex items-center mt-3'>
        <p className='text-blue-800 w-20 text-sm'>Bus</p>
        <Select
      defaultValue="Select Bus"
      style={{
        width: 150,
      }}
      options={busOptions}
      onChange={handleChangeBus}
    />
        </div>

        <div className='flex items-center mt-3'>
        <p className='text-blue-800 w-20 text-sm'>Start Point</p>
        <Select
      defaultValue="Select Bus"
      style={{
        width: 150,
      }}
      onChange={handleChange}
      options={busOptions}
    />
        </div>

        <div className='flex items-center mt-3'>
        <p className='text-blue-800 w-20 text-sm'>End Point</p>
        <Select
      defaultValue="Select Bus"
      style={{
        width: 150,
      }}
      onChange={handleChange}
      options={busOptions}
    />
        </div>
        <button onClick={createNewTrip} className='w-32 mt-2'>Add Itineraty</button>
        </div>
        
      </div>
      

      
      <div className='flex flex-col items-center'>
        <p className='text-black'>Students</p>
        <div className='grid grid-cols-6 gap-4 mt-3'>
        {selectedStudents.map((e)=>(
          <div className='flex flex-col items-center'>
          <div className='bg-cyan-400 rounded-full h-8 w-8'></div>
          <p className='text-black text-sm mt-1'>{e.name}</p>
          </div>
        ))}
        <div onClick={showModal} className='rounded-full p-3 flex justify-center items-center w-2 h-2 border-2 border-black'><span className='text-black'>+</span></div>
        <div onClick={handleClearSelected} className='w-6 h-6 bg-red-600 flex justify-center items-center rounded-full'>C</div>
        </div>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <table>
  <tr>
    <th>id</th>
    <th>Name</th>
    
  </tr>
  {students.map((e)=>(
    <tr key={e.id} onClick={()=>handleStudentClick(e)}>
    <th>{e.id}</th>
    <th>{e.name}</th>
    </tr>
  ))}
</table>
      </Modal>
    </div>
  )
}

export default Content