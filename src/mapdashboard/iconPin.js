import L from 'leaflet';

const iconPin = new L.Icon({
    iconUrl: require('./pin.png'),
    iconRetinaUrl: require('./pin.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon',
});

export { iconPin };