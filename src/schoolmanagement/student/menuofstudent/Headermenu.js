import React from "react";
import Input from "antd/es/input/Input";
import {FiSearch} from "react-icons/fi";
import { Button, Select } from "antd";
export default function Headermenu(){
    const handleChange1 = (value) => {
        console.log(`selected ${value}`);
      };
      const handleChange2 = (value) => {
        console.log(`selected ${value}`);
      };
    return (
        <div style={{display:"flex",justifyContent:"space-around",gap:20,padding:"1.5rem"}}>
            <Input size="small" placeholder="Search by Name" prefix={<FiSearch />} />
             <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange1}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange2}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Button type="primary">New Student</Button>

        </div>
    )
}