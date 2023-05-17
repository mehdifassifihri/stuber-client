import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import startt from '../assets/parking.png'
import child from '../assets/child.png'
import endd from '../assets/schoolbuild.png'

const LeafletRoutingMachine = ({ itinerary }) => {
  const map = useMap();

  useEffect(() => {
    const startIcon = L.icon({
      iconUrl: startt,
    
      iconSize: [25, 25],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
    });

    const studentIcon = L.icon({
      iconUrl: child,
    
      iconSize: [25, 25],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
    });

    const endIcon = L.icon({
      iconUrl: endd,
    
      iconSize: [25, 25],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
    });
    
    L.Routing.control({
      waypoints: [
        L.latLng(itinerary.start.latitude, itinerary.start.longitude, {
          
        }),
        ...itinerary.students.map((student) =>
          L.latLng(
            student.parent.adress.latitude,
            student.parent.adress.longitude,
            
          )
        ),
        L.latLng(itinerary.end.latitude, itinerary.end.longitude),
      ],
      optimizeWaypoints: true,
      createMarker: (i, waypoint, n) => {
        let markerIcon;

        if (i === 0) {
          // Start point
          markerIcon = startIcon;
        } else if (i === n - 1) {
          // End point
          markerIcon = endIcon;
        } else {
          // Student marker
          markerIcon = studentIcon;
        }

        return L.marker(waypoint.latLng, { icon: markerIcon });
      },
    }).addTo(map);
  }, [[itinerary, map]]);

  return null;
};

export default LeafletRoutingMachine;
