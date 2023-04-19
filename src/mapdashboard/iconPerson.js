import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('./position.png'),
    iconRetinaUrl: require('./position.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50),
    className: 'leaflet-div-icon',
});

export { iconPerson };