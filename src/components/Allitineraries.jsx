import React, { useEffect, useState } from "react";
import "../css/Itinerarycard.css";
import Itinerary from "../assets/itinerar.png";
import { Space, Spin } from "antd";
import ItinerCard from "./ItinerCard";
import Modalr from "react-modal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Allitineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [buses, setBuses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const arrivedItineraries = itineraries.filter(
    (itinerary) => itinerary.arrived === true
  );
  const nonarrived = itineraries.filter(
    (itinerary) => itinerary.arrived === false
  );

  useEffect(() => {
    fetch("http://localhost:8080/Itinerary")
      .then((response) => response.json())
      .then((data) => setItineraries(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:8080/Bus")
      .then((response) => response.json())
      .then((data) => setBuses(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:8080/User/Driver")
      .then((response) => response.json())
      .then((data) => setDrivers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  if (itineraries.length <= 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <Space size="middle"></Space>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="m-6">
      <div className="flex items-center justify-between px-44 py-4 ">
        <Modalr
          className="fixed z-100 inset-0 overflow-y-auto"
          isOpen={isModalOpen}
          onRequestClose={handleModalToggle}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg w-1/2 p-5 border-2">
              <p className="text-gray-500 font-semibold">ADD ITINERAY</p>
              <div className="w-full h-56 rounded-xl bg-red-300">
                <MapContainer center={[100, 100]} zoom={15}>
                  <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[100, 100]}></Marker>
                </MapContainer>
              </div>
              <div>
              <select className="bg-zinc-100 text-sm px-4 py-2 rounded-xl">
                {drivers.map((e) => (
                  <option>{e.name}</option>
                ))}
              </select>
              <select className="bg-zinc-100 text-sm px-4 py-2 rounded-xl">
                {buses.map((e) => (
                  <option>{e.reference}</option>
                ))}
              </select>
              <div>
                <p className="text-black">STUDENTS</p>
              </div>
              </div>
              
            </div>
          </div>
        </Modalr>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <p className=" text-black font-normal">Today's</p>
          <p className="text-black font-extrabold ml-2">Itineraries</p>
        </div>
        <button
          onClick={handleModalToggle}
          className="w-32 flex justify-center items-center"
        >
          <img className="w-5 mr-2" src={Itinerary} alt="Bus" />
          SET ITINERARY
        </button>
      </div>
      <div className="grid grid-cols-3 gap-y-10">
        {nonarrived.map((e) => (
          <ItinerCard
            arrived={e.arrived}
            drivername={e.driver.name}
            reference={e.bus.reference}
            id={e.id}
          />
        ))}
      </div>
      <div>
        <h1 className="font-bold text-black py-5">Done Itineraries</h1>
        <div className="grid grid-cols-3 gap-y-6">
          {arrivedItineraries.map((e) => (
            <ItinerCard
              arrived={e.arrived}
              drivername={e.driver.name}
              reference={e.bus.reference}
              id={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allitineraries;
