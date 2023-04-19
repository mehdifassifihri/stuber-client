import React, { useState } from "react";
import {VscDebugBreakpointData} from "react-icons/vsc";
import { MapContainer,TileLayer,LayersControl, Marker } from "react-leaflet";
import RoutingMachine from "./RoutineMachine";
import Addnewpoint from "./Addnewpoint";
import {iconPerson} from "./iconPerson";
import {iconPin} from "./iconPin";
export default function Mapdashboard(){
    const [homes,sethomes]=useState([[37.6000, -95.7129],[37.5000, -95.999],[37.7000, -95.1000],[37.89000, -95.3000],[37.0902, -95.97111]]);
    const [position,setPosition]=useState([37.0902, -95.7129]);
    const [positions,setpositions]=useState([[37.0902, -95.7129]]);
    const [on,seton]=useState(false)
    var zoomLevel=13;

    
    return (
        <div style={{width:70+"%",height:100+"vh",display:"flex",justifyContent:"center"}}>
 

<MapContainer  
        style={{borderRadius:0+"px"}}   
        center={position} 
        zoom={zoomLevel} 
        scrollWheelZoom={false}
    >
      
  
      <TileLayer

        url={true?'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png':'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'}
      />
   {!on && <Addnewpoint positions={positions} setpositions={setpositions}/>}
   {homes.map((el)=><Marker position={el} icon={iconPerson}> </Marker>)}
   {positions.map((el)=><Marker position={el} icon={iconPin}></Marker>)}
    {positions.length>=2 && <RoutingMachine positions={positions}/>}
    </MapContainer>


          </div>

        
    )
}