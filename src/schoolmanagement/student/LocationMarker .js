import React from "react";
import { Marker,Popup,useMapEvents} from "react-leaflet";
import { useState } from "react";

export default function LocationMarker({position,setPosition}){


    
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return (position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    ))
}