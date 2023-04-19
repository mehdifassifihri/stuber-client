import { marker } from "leaflet";
import React from "react";
import { useMapEvents,Marker,Popup } from "react-leaflet";

export default function Setlocation({position,setPosition}){
    useMapEvents({
        click(e) {
          // setState your coords here
          // coords exist in "e.latlng.lat" and "e.latlng.lng"
          
          setPosition([e.latlng.lat,e.latlng.lng])
        },
      });
      
       
      
}
