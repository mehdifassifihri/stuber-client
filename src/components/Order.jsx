import React,{useState,useEffect} from 'react'
import Ordercart from './Ordercart'
import Notification from '../assets/notification.png'
import '../css/order.css'
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/Order')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className='order h-full'>
        <div className='flex justify-between  bg-white sticky top-0'>
            <p className='text-black text-2xl'>Hello, Mehdi</p>
            <div className='p-3 shadow-lg flex justify-center items-center rounded-full relative'>
            <img className='w-5 h-5' src={Notification} alt="Bus"/>
            <div className='bg-red-500 rounded-full absolute top-1 right-1  w-4 h-4 flex justify-center items-center'>
                <p className='text-white text-xs'>12</p>
            </div>
            </div>
            
        </div>
        <div className=''>
        
        {orders.map((e)=>(
                <Ordercart key={e.id} parent={e.parent.name} child={e.student.name}/>
            ))}
        
            
        </div>
    </div>
  )
}

export default Order