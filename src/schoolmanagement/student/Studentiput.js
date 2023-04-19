import React from "react";
import Mapstudent from "./Mapstudent";
import { Button, Space,DatePicker } from 'antd';
import {BsFillPersonFill} from 'react-icons/bs';
import { Input } from 'antd';
import Image from "../../signup/Image";
export default function Studentinput(){
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return (
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",flexBasis:500+"px",gap:5}}>
            
             <h2 style={{  width: '100%'}}>Personal Information</h2>
            <div style={{  width: '100%'}}>name</div>
            <Input placeholder="entrer name of student" />
            <div style={{  width: '100%'}}>prename</div>
            <Input placeholder="entrer prename of student" />
            <div style={{  width: '100%'}}>date of birth</div>
            <DatePicker style={{width: '100%'}} onChange={onChange} />
            <div style={{  width: '100%'}}>phone number (parent)</div>
            <Space.Compact style={{width: '100%'}}>
            <Input style={{  width: '20%'}} defaultValue="212"/><Input style={{ width: '80%'}} defaultValue="26888888"/>
            </Space.Compact>
            <div style={{width: '100%'}}>email(parent)</div>
            <Input placeholder="Basic usage" />
        </div>
        
    )
}