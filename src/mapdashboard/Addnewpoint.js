import React from "react";
import { useMapEvents } from "react-leaflet";
export default function Addnewpoint({setpositions,positions}){
    useMapEvents({
        click(e) {
          // setState your coords here
          // coords exist in "e.latlng.lat" and "e.latlng.lng"
          
          setpositions([...positions,[e.latlng.lat,e.latlng.lng]])
         
         
        },
      });
      
}