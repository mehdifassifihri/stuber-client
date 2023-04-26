import React, { useEffect } from "react";
import { useState } from "react";
import {SiQuantconnect} from 'react-icons/si';
import Direction from "./Directions";
import "./css.css"
export default function CurrentPickup({id,data,setid}){

const [border,setborder]=useState(false);
console.log(id,data.id)
useEffect(() => {
    id===data.id?setborder(true)
        :setborder(false)
       
    
   
  }, [id]);

console.log(border,data.id)
    return (
        <div style={{flexBasis:"49%",background:"white",height:"450px",borderRadius:"5px",border:border?"solid #22A7F0 1px":"",margin:"3px"}} className="animate" onClick={()=>setid(data.id)} onMouseEnter={()=>setborder(true) } onMouseLeave={()=>setborder(false)} >
            <div style={{display:"flex",justifyContent:"space-between",padding:"0.5rem"}}>
                <h2 style={{margin:0}}>ARETJVGHDKFLD</h2>
                <div style={{display:"flex",alignItems:"center",gap:5}}>
                <SiQuantconnect color="green"/>
                <div style={{color:"green"}}>On Route</div>
               
                    </div>
            </div>
            <div style={{padding:"1rem"}}>
            <Direction/></div>
            <div style={{width:100+"%",display:"flex",justifyContent:"center"}}> <img style={{width:80+"%",height:"50%",objectFit:"cover"}} src='/iris.jpeg' alt="not exist"/></div>
           
            </div>

    )
}