import { Space, Table } from "antd";
import { message, Popconfirm, Modal } from "antd";
import "../css/drivers.css";
import React, { useEffect, useState } from "react";
import Driver from "../assets/driverr.png";
import axios from "axios";
const { Column } = Table;

const confirm = (e) => {
  console.log(e);
  message.success("Bus deleted");
};
const cancel = (e) => {
  console.log(e);
  message.error("Click on No");
};

const Buses = () => {
  //Fetch buses
  const [Buses, setBuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Bus")
      .then((response) => response.json())
      .then((data) => setBuses(data))
      .catch((error) => console.error(error));
  }, []);

  //Add Bus
  const [reference, setReference] = useState("");
  const [capacite, setCapacite] = useState("");

  const handleReferenceChange = (event) => {
    setReference(event.target.value);
  };

  const handleCapaciteChange = (event) => {
    setCapacite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      reference,
      capacite,
    };

    axios
      .post("http://localhost:8080/Bus", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //

  //Search bus
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(Buses);

  useEffect(() => {
    setFilteredData(Buses);
  }, [Buses]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredData(
      Buses.filter((bus) =>
        bus.reference.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  //
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/Bus/${id}`)
      .then((response) => {
        window.location.reload();
        confirm();
      })
      .catch((error) => {
        // Handle error case
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="m-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-7" src={Driver} />
          <div className="text-black ml-2">
            <span className="font-bold">Buses Management</span>
          </div>
        </div>
        <input
          placeholder="Search"
          className="bg-zinc-100 rounded-3xl placeholder:px-3 focus:outline-none focus:placeholder-transparent text-black text-xs px-4 py-3"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchTerm}
        />
      </div>
      <form className="flex justify-center gap-2 mt-4">
        <input
          placeholder="Reference"
          onChange={handleReferenceChange}
          className="bg-zinc-100 rounded-3xl placeholder:px-3 focus:outline-none focus:placeholder-transparent text-black"
          type="text"
        />
        <input
          placeholder="Capacite"
          onChange={handleCapaciteChange}
          className="bg-zinc-100 rounded-3xl placeholder:px-3 focus:outline-none focus:placeholder-transparent text-black"
          type="text"
        />
        <button onClick={handleSubmit} className="w-24 rounded-full h-full">
          ADD BUS
        </button>
      </form>
      <Table
        className="mt-6"
        dataSource={filteredData}
        pagination={{ pageSize: 8 }}
      >
        <Column title="Id" dataIndex="id" key="firstName" />

        <Column title="Reference" dataIndex="reference" key="age" />
        <Column title="Capacite" dataIndex="capacite" key="address" />

        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a onClick={showModal}>Invite {record.lastName}</a>
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={() => handleDelete(record.id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <a>Delete</a>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
      <Modal
        title="Edit Driver"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <input placeholder="Name" type="text" id="fname" name="fname" />
          <input placeholder="Username" type="text" id="fname" name="fname" />
          <input placeholder="Password" type="text" id="fname" name="fname" />
          <input placeholder="License" type="text" id="fname" name="fname" />
        </form>
      </Modal>
    </div>
  );
};
export default Buses;
