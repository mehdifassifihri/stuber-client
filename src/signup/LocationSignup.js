import React from "react";
import { useState } from "react";
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import Input from "antd/es/input/Input";
import Setlocation from "../schoolmanagement/student/Setalocation";
import Getcurrentposition from "./Getcurrentposition";
import {MdOutlineMyLocation} from "react-icons/md";


export default function LocationSignup(){
const zoomLevel = 15;

  const status=useState([false])
  const [position, setPosition] = useState([8.1386, 5.1026]);
  const [autolocation,setautolocation]=useState(false);
    return (
        <div style={{width:100+"%",height:100+"%",borderRadius:5+"px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5,padding:2+"rem"}}>
         
<h2 style={{  width: '100%'}}>Location Information</h2>

          <div style={{width:"100%",height:"40%",position:"relative"}}>
           
                <div onClick={()=>{setautolocation(true)}} style={{zIndex:10,border:"solid gainsboro 1px",borderRadius:"5px",width:"30px",height:"30px",position:"absolute",bottom:10,backgroundColor:"white",right:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
<MdOutlineMyLocation size={20}/>
            </div>
            
          <MapContainer     
        center={position} 
        zoom={zoomLevel} 
        scrollWheelZoom={false}
    >
  
      <TileLayer

        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
    {autolocation && <Getcurrentposition setPosition={setPosition} setautolocation={setautolocation}/>}
    <Setlocation position={position} setPosition={setPosition}/>
       <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>

      
    </MapContainer>



          </div>
          

    <div style={{  width: '100%'}}>
          N immeuble
          <Input/>
         </div>


         <div style={{  width: '100%'}}>
          N de porte
          <Input/>
         </div>


        </div>
         
    )
}
