import { MapConsumer } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

const RoutingMachine = ({ map, itinerary }) => {
  useEffect(() => {
    if (!map || !itinerary) return;
    
    const startIcon = L.icon({
      iconUrl: '/Users/mehdi/react-test/src/assets/school-bus.png', // Replace with the path to your start icon
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });

    const endIcon = L.icon({
      iconUrl: '/Users/mehdi/react-test/src/assets/schoolbuild.png', // Replace with the path to your end icon
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });

    const studentIcon = L.icon({
      iconUrl: '/Users/mehdi/react-test/src/assets/child.png', // Replace with the path to your student icon
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(itinerary.start.lat, itinerary.start.lng),
        ...itinerary.students.map(student => L.latLng(student.lat, student.lng)),
        L.latLng(itinerary.end.lat, itinerary.end.lng),
      ],
      router: new L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1', // replace with your own OSRM service if needed
      }),
      showAlternatives: false,
      lineOptions: {
        styles: [{ color: 'blue', opacity: 0.6, weight: 4 }],
      },
    }).addTo(map.leafletElement);

    return () => {
      map.leafletElement.removeControl(routingControl);
    };
  }, [map, itinerary]);

  return null;
};

const RoutingMachineWrapper = ({ itinerary }) => {
  return (
    <MapConsumer>
      {(map) => {
        return <RoutingMachine map={map} itinerary={itinerary} />;
      }}
    </MapConsumer>
  );
};

export default {RoutingMachine,RoutingMachineWrapper};