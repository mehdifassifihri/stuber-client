import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/Itinerar.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
//import L from 'leaflet';
import Studentmarker from "../assets/child.png";
import Parkingmarker from "../assets/parking.png";
import Schoolmarker from "../assets/schoolbuild.png";

import Students from "../assets/students.png";
import Marqueur from "../assets/marqueur.png";
import Etudiant from "../assets/etudiant.png";

import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

const Itinearar = () => {
  const position = [57.74, 11.94];

  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch(`http://localhost:8080/Itinerary/${id}`); // replace with your API endpoint
        const data = await response.json();
        setItinerary(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItinerary();
  }, [id]);

  if (!itinerary) {
    return <div className="text-black">Loading itinerary...</div>;
  }

  const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const slides = Math.ceil(itinerary.students.length / 6);

  return (
    <div className="main h-screen text-black">
      <MapContainer
        className="map"
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url={tileLayerUrl} />
        <LeafletRoutingMachine itinerary={itinerary} />
      </MapContainer>
      <div className="boxw flex p-5">
        <div className="left">
          <div className="flex flex-col items-center">
            <p className="text-black">Driver</p>
            <p className="text-black">{itinerary.driver.name}</p>
          </div>
          <div className="flex">
            <p className="text-black">License</p>
            <p className="text-gray-500 ml-3">{itinerary.driver.license}</p>
          </div>
        </div>

        <div className="middle flex flex-col">
          <div className="flex justify-center items-center">
            <img className="w-7" src={Students} alt="Bus" />
            <p className="text-black ml-4">Students</p>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <Carousel>
              {[...Array(slides)].map((_, index) => (
                <div key={index}>
                  {itinerary.students
                    .slice(index * 6, index * 6 + 6)
                    .map((student) => (
                      <div className="flex flex-col items-center">
                        <img className="w-7" src={Etudiant} alt="Bus" />
                        <div key={student.id}>{student.name}</div>
                      </div>
                    ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="right flex flex-col  ">
          <div>
            <p className="text-black bg-zinc-100 inline-block rounded-full text-sm px-4 py-2">
              Start time : 12:09:10
            </p>
            <div className="flex justify-between py-4">
              <p className="text-black bg-zinc-200 text-xs rounded-3xl flex justify-center items-center px-3 font-semibold">
                {itinerary.bus.reference}
              </p>
              <span className="text-black text-xs bg-zinc-100 rounded-2xl px-3 py-1">
                {itinerary.students.length}/20
              </span>
            </div>
          </div>

          <div className="end flex items-center">
            <img className="w-5 h-5" src={Marqueur} alt="Bus" />
            <p className="text-black text-xs ml-1">
              {itinerary.end.description}
            </p>
          </div>
          <div className="w-1 h-24 bg-gray-300 rounded-md ml-2 my-1"></div>
          <div className="start flex items-center">
            <div className="h-4 w-4 bg-blue-900 rounded-full"></div>
            <p className="text-black text-xs ml-2">
              {itinerary.start.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const DefaultIcon = L.icon({
  iconUrl: Studentmarker,

  iconSize: [25, 25],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default Itinearar;
