import React from "react";
import Image from "./Image";
import { Button } from 'antd';
import { Input } from 'antd';
import {BsFlag} from 'react-icons/bs';

export default function StepInfoAcount({index,changestep}){
    return (
        <div style={{padding:3+"rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:100+"%",width:50+"%",margin:'0 auto',gap:10}} className="animate">
            <div style={{margin:0.5+"rem"}}> <Image icon={<BsFlag size={20}/>}/></div>
            <h2 style={{margin:0.5+"rem"}}>Your detailes</h2>
            
            <div style={{color:"gray"}}>Please provide your name and your Last Name</div>
           
            
            
            <div style={{margin:0.5+"rem",width:80+"%"}}>
            <div>First Name*</div>
                <Input style={{width:100+"%"}} placeholder="Enter your First Name"/></div>
                
            <div style={{margin:0.5+"rem",width:80+"%"}}>
                <div style={{width:60+"%"}}>Last Name*</div>
                <Input style={{width:100+"%"}} placeholder="Enter your Last Last Name" /></div>
            

            <div style={{margin:0.5+"rem",width:80+"%"}}>
            <div style={{width:60+"%"}}>Email*</div>
            <Input style={{width:100+"%"}} placeholder="Enter your Email " /></div>

            <Button style={{width:80+"%"}} onClick={()=>changestep(index+1)} type="primary" > Continue </Button>
                   
        </div>
    )
}