import React, { useEffect, useState } from "react";
import BusDriver from "../assets/school-bus.png";
import Wave from "../assets/wave.png";
import Parent from "../assets/parent.png";
import Bus from "../assets/busgray.png";
import "../css/dashboard.css";
import ItineraryCard from "./ItineraryCard";

const Dashboard = () => {
  const [driverCount, setDriverCount] = useState(0);
  const [busCount, setBusCount] = useState(0);
  const [itinearies, Setitineraries] = useState([]);
  const [reclamations, setReclamations] = useState([]);

  const nonarrived = itinearies.filter(
    (itinearie) => itinearie.isArrived == true
  );

  useEffect(() => {
    fetch("http://localhost:8080/Bus/nbrbuses")
      .then((res) => res.json())
      .then((data) => setDriverCount(data));

    fetch("http://localhost:8080/User/Driver/nbrdrivers")
      .then((res) => res.json())
      .then((data) => setBusCount(data));

    fetch("http://localhost:8080/Itinerary")
      .then((res) => res.json())
      .then((data) => Setitineraries(data));

    fetch("http://localhost:8080/reclamation")
      .then((res) => res.json())
      .then((data) => setReclamations(data));
  }, []);
  return (
    <div className="dashflex">
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <p className="text-black text-lg">
            Hello <span className="font-bold text-lg">Mehdi</span>
          </p>
          <img className="w-6 ml-2" src={Wave} alt="Bus" />
        </div>
      </div>

      <p className="text-black font-extrabold text-lg py-5">Dashboard</p>
      <div className="gap-6 grid grid-cols-12">
        <div className="col-span-7 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/3 h-32  rounded-xl shadow-lg p-4 relative">
                <p className="text-black text-base">Drivers</p>
                <span className="absolute bottom-4 right-4 text-black text-lg">
                  {driverCount}
                </span>
              </div>
              <div className="w-1/3 h-32  rounded-xl shadow-lg p-4 relative">
                <p className="text-black text-base">Buses</p>
                <span className="absolute bottom-4 right-4 text-black text-lg">
                  {busCount}
                </span>
              </div>
              <div className="w-1/3 h-32  rounded-xl shadow-lg p-4 relative">
                <p className="text-black text-base">Order in Process</p>
                <span className="absolute bottom-4 right-4 text-black text-lg">
                  {busCount}
                </span>
              </div>
            </div>
            <div className="h-56  rounded-xl shadow-lg p-4">
              <p className="text-black">mjec</p>
            </div>
          </div>
        </div>
        <div className="col-span-5  rounded-xl shadow-lg p-4">
          <p className="text-black mb-3">Reclamation</p>
          <div className="gap-2">
            {reclamations.map((e) => (
              <div className="flex items-center mb-3">
                <div className="h-11 w-11 bg-blue-200 flex items-center justify-center rounded-full">
                  <img className="w-5" src={Parent} alt="Bus" />
                </div>
                <div className="ml-3">
                  <h3 className="text-black">{e.parent.name}</h3>
                  <p className="text-gray-400 text-sm">{e.reclamation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-black">Bus Activities</p>
        {itinearies.map((e)=>(
          <ItineraryCard reference={e.bus.reference} drivername={e.driver.name} arrived={e.arrived}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
