import React, { useRef, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

import { Space, Table, Tag, message, Popconfirm, Modal } from "antd";

const { Column, ColumnGroup } = Table;
const Parentsmanagement = () => {
  const usernameRef = useRef();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cin, setCin] = useState("");
  const [address, setAddressdesc] = useState("");
  const [position, setPosition] = useState([31.636521, -7.955325]);
  const [parents, setParents] = useState([]);

  const handleUsername = () => {
    const email = (usernameRef.current.value = name + cin + "@stuber.com");
    setUsername(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/User/Parent", {
        name: name,
        username: username,
        password: password,
        role: "PARENT",
        cin: cin,
        adress: {
          description: address,
          latitude: position[0],
          longitude: position[1],
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        console.log(position);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        {/* Additional marker customization, if needed */}
      </Marker>
    );
  };

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/User/Parent");
        setParents(response.data);
      } catch (error) {
        console.error("Error fetching parents:", error);
      }
    };

    fetchParents();
    handleUsername();
  });

  return (
    <div className="m-10">
      <h1 className="text-black">Parent Management</h1>
      <div className="flex justify-center items-center gap-10 mt-5">
        <form className="flex flex-col gap-2">
          <div className="flex">
            <input
              placeholder="Name"
              className="bg-zinc-100 rounded-xl text-black outline-none"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              ref={usernameRef}
              placeholder="Username"
              className="bg-zinc-100 rounded-xl text-black outline-none"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              disabled
            />
          </div>
          <div className="flex">
            <input
              placeholder="Password"
              className="bg-zinc-100 rounded-xl text-black outline-none"
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              placeholder="CIN"
              className="bg-zinc-100 rounded-xl text-black outline-none"
              type="text"
              onChange={(e) => {
                setCin(e.target.value);
              }}
            />
          </div>

          <button onClick={handleSubmit}>ADD</button>
        </form>
        <div className="flex flex-col items-center">
          <p className="text-black font-semibold">SPECIFY THE PARENT ADDRESS</p>
          <input
            onChange={(e) => {
              setAddressdesc(e.target.value);
            }}
            placeholder="Address description"
            type="text"
            className="bg-zinc-100 outline-none text-black my-1"
          />
          <div className="w-96 h-44">
            <MapContainer center={position} zoom={15}>
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker />
              <Marker position={position}></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Table className="mt-6" dataSource={parents} pagination={{ pageSize: 4 }}>
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Username" dataIndex="username" key="username" />
        <Column title="CIN" dataIndex="cin" key="license" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                okText="Yes"
                cancelText="No"
              >
                <a>Delete</a>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Parentsmanagement;
