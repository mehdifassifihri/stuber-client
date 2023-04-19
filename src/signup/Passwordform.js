import React from "react";
import Image from "./Image";
import { Button } from 'antd';
import { Input } from 'antd';
import {IoMdLock} from 'react-icons/io';


export default function Passwordform({index,changestep}){
    return (
        <div style={{padding:3+"rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:100+"%",width:50+"%",margin:'0 auto',gap:10}} className="animate">
           
            <div style={{margin:0.5+"rem"}}> <Image icon={<IoMdLock size={20}/>}/></div>
            <h2 style={{margin:0.5+"rem"}}>Choose Your Password:</h2>
            <div style={{color:"gray",margin:0.5+"rem"}}>Must be at least 8 caracteres</div>     

            <div style={{margin:0.5+"rem",width:80+"%"}}>
                <div style={{width:60+"%"}}>Password*</div>
                <Input style={{width:100+"%"}} placeholder="Enter your First Name"/></div>
           
            <div style={{margin:0.5+"rem",width:80+"%"}}>
                <div style={{width:60+"%"}}>Confirm Password*</div>
                <Input style={{width:100+"%"}} placeholder="Enter your Last Last Name" />
                </div>


            <Button type="primary" style={{width:80+"%"}} onClick={()=>changestep(index+1)} > Continue </Button>
                   
        </div>
    )
}