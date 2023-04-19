import React from "react";
import { useMap } from "react-leaflet";
export default function Getcurrentposition({setPosition,setautolocation}){
    const map = useMap();

    function getpos(){
        map.locate().on("locationfound", function (e) {
            map.flyTo(e.latlng, map.getZoom());
            setPosition([e.latlng.lat,e.latlng.lng]);
            setautolocation(false);
        })
    }

    getpos();
   
}