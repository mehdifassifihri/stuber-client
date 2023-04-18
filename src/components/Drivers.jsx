import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { message, Popconfirm,Modal  } from 'antd';
import '../css/drivers.css';
import Driver from '../assets/driverr.png';
import axios from 'axios';
const { Column, ColumnGroup } = Table;


   
const confirm = (e) => {
  console.log(e);
  
  message.success('Driver deleted successfully');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};



const Drivers = () => {
  //Buses and Drivers numver
  const [driverCount, setDriverCount] = useState(0);
  const [busCount, setBusCount] = useState(0);

  
 
//Fetch all drivers
const [Drivers, setDrivers] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080/User/Driver')
    .then(response => response.json())
    .then(data => setDrivers(data))
    .catch(error => console.error(error));

  
}, []);
 // 
 //Add Driver
 const [name, setname] = useState('');
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [license, setLicense] = useState('');

 const handleNameChange = (event) => {
  setname(event.target.value);
};

const handleUsername = (event) => {
  setUsername(event.target.value);
};

const handlePassword = (event) => {
  setPassword(event.target.value);
};

const handleLicense = (event) => {
  setLicense(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();


  axios.post('http://localhost:8080/User/Driver', {
    name: name,
    username: username,
    password: password,
    role: "DRIVER",
    license: license
  })
    .then(response => {
      console.log(response.data);
      
    })
    .catch(error => {
      console.error(error);
    });
};

//

//Search Driver
const [searchTerm, setSearchTerm] = useState('');
const [filteredData, setFilteredData] = useState(Drivers);

useEffect(() => {
  setFilteredData(Drivers);
}, [Drivers]);

const handleSearch = (value) => {
  setSearchTerm(value);
  setFilteredData(
    Drivers.filter((driver) =>
      driver.name.toLowerCase().includes(value.toLowerCase())
    )
  );
};
//

const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
  axios.delete(`http://localhost:8080/User/${id}`)
    .then((response) => {
      window.location.reload();
      confirm()
    })
    .catch((error) => {
      // Handle error case
    });
  };

  
  
  return(<div className='m-10'>
  <div className='flex items-center justify-between'>
  <div className='flex items-center'>
  <img className='w-7' src={Driver}/>
  <div className='text-black ml-2'><span className='font-bold'>Drivers Management</span></div>
  </div>
  <input onChange={(e) => handleSearch(e.target.value)} placeholder='Search' className='bg-zinc-100 rounded-3xl placeholder:px-3 text-black focus:placeholder-transparent focus:outline-none' type="text"/>
  </div>
  <form className='flex justify-center gap-2 mt-4'>
  <input onChange={handleNameChange} placeholder='Name' className='bg-zinc-100 rounded-3xl placeholder:px-3 text-black focus:placeholder-transparent focus:outline-none' type="text"/>
  <input onChange={handleUsername} placeholder='Username' className='bg-zinc-100 rounded-3xl placeholder:px-3 text-black focus:placeholder-transparent focus:outline-none' type="text"/>
  <input onChange={handlePassword} placeholder='Password' className='bg-zinc-100 rounded-3xl placeholder:px-3 text-black focus:placeholder-transparent focus:outline-none' type="password"/>
  <input onChange={handleLicense} placeholder='License' className='bg-zinc-100 rounded-3xl placeholder:px-3 text-black focus:placeholder-transparent focus:outline-none' type="text"/>
  <button onClick={handleSubmit} className='w-24 rounded-full h-full'>ADD DRIVER</button>
  </form>
  <div>
    
  </div>
  <Table className='mt-6' dataSource={filteredData} pagination={{ pageSize: 5,}}>
    <Column title="Id" dataIndex="id" key="id" />
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Username" dataIndex="username" key="username" />
    <Column title="License" dataIndex="license" key="license" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a onClick={showModal}>Invite {record.lastName}</a>
          <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={() => handleDelete(record.id)}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a>Delete</a>
  </Popconfirm>
          
        </Space>
      )}
    />
  </Table>

  <Modal width={800} // set the width to 800px
      height={600}  title="Edit Driver" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       
        
      
        
  </Modal>
  
  </div>
)};
export default Drivers;