import React from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import 'leaflet-control-geocoder';

const GeocoderControl = () => {
  const map = useMap();

  React.useEffect(() => {
    const geocoderControl = L.Control.geocoder({
      defaultMarkGeocode: false,
    }).on('markgeocode', (e) => {
      const { center } = e.geocode;
      map.flyTo(center, 15);
      
    });

    geocoderControl.addTo(map);

    return () => {
      map.removeControl(geocoderControl);
    };
  }, [map]);

  React.useEffect(() => {
    const inputElement = document.querySelector('.leaflet-control-geocoder-form input');
    if (inputElement) {
      inputElement.style.color = 'black'; // Set the desired color for the input text
    }
  }, []);

  return null;
};

export default GeocoderControl;
