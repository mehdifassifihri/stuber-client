import React from "react";
import Image from "./Image";
import { Button } from 'antd';
import { Input } from 'antd';
import {BsPerson} from 'react-icons/bs';
import Imageupload from "./Imageupload";


export default function ResponsableInfo({index,changestep}){
    return (
        <div style={{padding:5+"rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:100+"%",width:60+"%",margin:'0 auto'}} className="animate">
            <div> <Image icon={<BsPerson size={20}/>}/></div>
            <h2 style={{margin:0.2+"rem"}}>Responsable Information:</h2>
            <div style={{color:"gray",margin:0.5+"rem"}}>All field are necessary</div>
            <div style={{width:80+"%"}}>Image*</div>
            <div style={{margin:0.5+"rem"}}> <Imageupload/></div>   
            
            <div style={{margin:0.5+"rem",width:80+"%"}}> <div >Name*</div><Input placeholder="Enter your First Name"/></div>
           
            <div style={{margin:0.5+"rem",width:80+"%"}}> <div >LastName*</div><Input placeholder="Enter your Last Last Name" /></div>
            
          
           
            <div style={{margin:0.5+"rem",width:80+"%"}}> <div >CIN*</div><Input style={{width:100+"%"}} placeholder="Enter your Last Last Name" /></div>
           
            <Button type="primary"  style={{width:80+"%"}} onClick={()=>changestep(index+1)} > Continue </Button>
            

    
          
        </div>
    )
}