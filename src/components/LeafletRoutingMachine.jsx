import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';

const LeafletRoutingMachine = ({itinerary}) => {
    const map = useMap();
    
    useEffect(() => {
        
        L.Routing.control({
            waypoints: [
              L.latLng(itinerary.start.latitude, itinerary.start.longitude),
              ...itinerary.students.map(student => L.latLng(student.parent.adress.latitude, student.parent.adress.longitude)),
              L.latLng(itinerary.end.latitude, itinerary.end.longitude),
              
            ],
            optimizeWaypoints: true,
          }).addTo(map);
    }, [[itinerary, map]])
    
    
  return null;
}

export default LeafletRoutingMachine