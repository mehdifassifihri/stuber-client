import { MapConsumer } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

const RoutingMachine = ({ map, itinerary }) => {
  useEffect(() => {
    if (!map || !itinerary) return;

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