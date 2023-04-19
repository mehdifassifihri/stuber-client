import React from "react";
import { MapContainer, TileLayer,Marker} from "react-leaflet";
import Setlocation from "./Setalocation";
import LocationMarker from "./LocationMarker ";
import {BiCurrentLocation} from "react-icons/bi";
import Image from "../../signup/Image";
import {IoLocationSharp} from "react-icons/io5";
import { useState } from "react";
import { useRef } from "react";
import Input from "antd/es/input/Input";

export default function Mapstudent(){

 
  //<LocationMarker position={position} setPosition={setPosition} />
  const zoomLevel = 13;
  const status=useState([false])
  const [position, setPosition] = useState([8.1386, 5.1026])
  
    return (      

        <div style={{width:50+"%",height:70+"%",borderRadius:5+"px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:10}}>
         
<h2 style={{  width: '100%'}}>Location Information</h2>
           <MapContainer     
        center={position} 
        zoom={zoomLevel} 
        scrollWheelZoom={false}
    >
  
      <TileLayer

        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      
      <Setlocation position={position} setPosition={setPosition}/>
<Marker position={position}></Marker>
    
    </MapContainer>

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