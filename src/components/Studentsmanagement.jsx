import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Modalr from "react-modal";
import {
  Space,
  Table,
  Tag,
  message,
  Popconfirm,
  Modal,
  Divider,
  Radio,
} from "antd";
import Parent from "../assets/parent.png";
import Done from "../assets/d.png";
const { Column, ColumnGroup } = Table;

const Studentsmanagement = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedParent, setParent] = useState(null);
  const [students, setStudents] = useState([]);
  const [parents, setParents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectionType, setSelectionType] = useState("checkbox");

  const handleSelectionChange = (selectedRowKeys, selectedRows) => {
    setParent(selectedRows);
    console.log(selectedParent);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleSubmit = () => {
    const parentid = selectedParent.id;
    const body = {
      name: name,
      age: age,
      parent: {
        id: selectedParent[0].id,
      },
    };

    const url = "http://localhost:8080/Student";
    axios.post(url,body)
    console.log(body);
    setAge("")
    setName("")
    
  };

  useEffect(() => {
    fetch("http://localhost:8080/Student")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:8080/User/Parent")
      .then((response) => response.json())
      .then((data) => setParents(data))
      .catch((error) => console.error(error));
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "CIN",
      dataIndex: "cin",
    },
  ];

  return (
    <div className="m-10">
      <p className="text-black">Students Management</p>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <div
            onClick={handleModalToggle}
            className="flex flex-col items-center justify-center bg-zinc-100 h-28 w-28 rounded-2xl cursor-pointer hover:shadow-md"
          >
            <p className="text-black text-sm font-bold text-blue-900">ADD</p>
            <span className="text-black text-sm font-bold text-blue-900">
              PARENT
            </span>
            <img className="w-8" src={Parent} />
          </div>
          <div className="flex flex-col gap-2">
            <input
              placeholder="Name"
              className="bg-zinc-100 rounded-xl text-black outline-none"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="Age"
              className="bg-zinc-100 rounded-xl text-black outline-none"
              type="text"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <button onClick={handleSubmit} className="rounded-xl">
              ADD
            </button>
          </div>
        </div>
      </div>

      <Table
        className="mt-6"
        dataSource={students}
        pagination={{ pageSize: 5 }}
      >
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="username" />
      </Table>

      <Modalr isOpen={isModalOpen} onRequestClose={handleModalToggle}>
        <div className="flex justify-between items-center">
          <h1>SELECT THE PARENT</h1>
          <input
            className="bg-zinc-100 rounded-full px-6 outline-none"
            placeholder="Search"
            type="text"
          />
        </div>

        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
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
          dataSource={parents}
          pagination={{ pageSize: 7 }}
          rowKey="id"
        />
      </Modalr>
    </div>
  );
};

export default Studentsmanagement;
