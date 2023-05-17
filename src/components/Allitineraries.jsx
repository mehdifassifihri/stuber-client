import React, { useEffect, useState } from "react";
import "../css/Itinerarycard.css";
import Itinerary from "../assets/itinerar.png";
import { Space, Spin } from "antd";
import ItinerCard from "./ItinerCard";
import Modalr from "react-modal";
import axios from "axios";
import { Divider, Radio, Table } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      "selectedRowKeys:",
      selectedRowKeys,
      "selectedRows:",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
    // Use the id as the key dynamically
  }),
};
const Allitineraries = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [itineraries, setItineraries] = useState([]);

  const [drivers, setDrivers] = useState([]);
  const [buses, setBuses] = useState([]);
  const [students, setStudents] = useState([]);
  const [schools, setSchools] = useState([]);

  const [selectedDriver, setDriver] = useState(null);
  const [selectedBus, setBus] = useState(null);
  const [selectedSchool, setSchool] = useState(null);
  const [selectedStudents, setSelectstudents] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectionChange = (selectedRowKeys, selectedRows) => {
    setSelectstudents(selectedRows);
    console.log(selectedStudents);
  };

  const handleBus = (event) => {
    const selectedBus = JSON.parse(event.target.value);
    setBus(selectedBus);
    console.log(selectedBus);
  };

  const handleDriver = (event) => {
    const selectedDriver = JSON.parse(event.target.value);
    setDriver(selectedDriver);
    console.log(selectedDriver.id);
  };

  const handleSchool = (event) => {
    const selectedSchool = JSON.parse(event.target.value);
    setSchool(selectedSchool);
    console.log(selectedSchool);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const requestBody = {
      start: {
        description: "Parc",
        latitude: 31.634507,
        longitude: -7.998871,
      },
      end: {
        description: "EMSI",
        latitude: 31.631058,
        longitude: -8.012827,
      },
      students: selectedStudents.map((student) => ({ id: student.id })),
      driver: { id: selectedDriver.id },
      bus: { id: selectedBus.id },
    };
    
    axios
      .post("http://localhost:8080/Itinerary", requestBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(requestBody);
  };

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

    fetch("http://localhost:8080/Student")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:8080/School")
      .then((response) => response.json())
      .then((data) => setSchools(data))
      .catch((error) => console.error(error));
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div className="m-6">
      <div className="flex items-center justify-between px-44 py-4 ">
        <Modalr
          className="fixed z-100 inset-0 overflow-y-auto"
          isOpen={isModalOpen}
          onRequestClose={handleModalToggle}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-2xl w-1/2 p-5 border-2">
              <p className="text-gray-500 font-semibold">ADD ITINERAY</p>
              <div className="flex justify-between py-3">
                <div>
                  <p className="text-gray-300 text-sm">Select Driver</p>
                  <select
                  
                    onChange={handleDriver}
                    className="bg-zinc-100 text-sm px-4 py-2 rounded-lg mt-1 outline-none"
                  >
                    {drivers.map((e) => (
                      <option value={JSON.stringify(e)} key={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Select Bus</p>
                  <select
                  
                    onChange={handleBus}
                    className="bg-zinc-100 text-sm px-4 py-2 rounded-lg mt-1 outline-none"
                  >
                    {buses.map((e) => (
                      <option value={JSON.stringify(e)} key={e.id}>
                        {e.reference}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Select School</p>
                  <select
                  
                    onChange={handleSchool}
                    className="bg-zinc-100 text-sm px-4 py-2 rounded-lg mt-1 outline-none"
                  >
                    {schools.map((e) => (
                      <option value={JSON.stringify(e)} key={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-black">STUDENTS</p>
                <input
                  className="bg-zinc-100 rounded-full"
                  placeholder="Search for a student"
                />
              </div>
              <div>
                <Radio.Group
                  onChange={({ target: { value } }) => {
                    setSelectionType(value);
                    console.log(value);
                  }}
                  value={selectionType}
                >
                  <Radio value="checkbox">Checkbox</Radio>
                  <Radio value="radio">radio</Radio>
                </Radio.Group>

                <Divider />

                <Table
                  rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                    onChange: handleSelectionChange,
                  }}
                  columns={columns}
                  dataSource={students}
                  rowKey="id"
                  pagination={{ pageSize: 4 }}
                />
              </div>
              <button onClick={handleSubmit} className="w-56">
                ADD
              </button>
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
