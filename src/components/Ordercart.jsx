import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer ,Marker,Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import locationicon from '../assets/location-pin.png'

const Ordercart = (props) => {
  const [drivers, setDrivers] = useState([]);
  const [buses, setBuses] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/User/Driver")
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8080/Bus")
      .then((response) => {
        setBuses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDriverChange = (event) => {
    setSelectedDriver(JSON.parse(event.target.value));
    console.log(selectedDriver);
  };

  const handleBusChange = (event) => {
    setSelectedBus(JSON.parse(event.target.value));
    console.log(selectedBus);
  };

  const location = L.icon({
    iconUrl: locationicon,
  
    iconSize: [25, 25],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  const handlePress = () => {
    const body = {
      order: {
        id: props.orderid,
      },
      driver: {
        id: selectedDriver.id,
      },
      bus: {
        id: selectedBus.id,
      },
      school:{
        id: props.stschoolid
      }
      
      
    };
    axios.post("http://localhost:8080/Indrive", body);
  };
  const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const position = [57.74, 11.94];
  return (
    <div className="w-full bg-white flex justify-between items-center p-6 rounded-lg mt-4 shadow-md">
      <div className="flex flex-col gap-3">
        <div className="text-black">
          <p>
            Parent Name :<span className="text-gray">{props.parent}</span>
          </p>
          <p>
            Child Name :<span className="text-gray">{props.child}</span>
          </p>
        </div>
        <div className="text-black">
          <label className="w-10 mr-5">Driver</label>
          <select
            onChange={handleDriverChange}
            className="bg-gray-200 w-40 rounded-lg px-3 py-2"
          >
            {drivers.map((driver) => (
              <option value={JSON.stringify(driver)} key={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>
        <div className="text-black">
          <label className="mr-9">Bus</label>
          <select
            onChange={handleBusChange}
            className="bg-gray-200 w-40 rounded-lg px-3 py-2"
          >
            {buses.map((bus) => (
              <option value={JSON.stringify(bus)} key={bus.id}>
                {bus.reference}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-96 h-44">
        <MapContainer center={[props.latitude, props.longitude]} zoom={15}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={location}  position={[props.latitude, props.longitude]} >
     
         </Marker>
        </MapContainer>
      </div>

      <div className="text-black">
        <div className="flex items-center">
          <button
            onClick={handlePress}
            className="h-5 w-5 bg-green-600 rounded-full mr-2"
          ></button>
          <span className="text-green-600">Accept</span>
        </div>
        <div className="flex items-center">
          <button className="h-5 w-5 bg-red-600 rounded-full mr-2"></button>
          <span className="text-red-600">Decline</span>
        </div>
      </div>
    </div>
  );
};

export default Ordercart;
