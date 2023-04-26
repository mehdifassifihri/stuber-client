import React from "react";
import { Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
export default function Deaillesofpickup(){
    var table =[{name:"students"},{name:"Choffeur"},{name:"Bus"}]
    return (
        <div style={{height:"50%"}}>
 <Tabs
    defaultActiveKey="1"
    left
    items={table.map((el,index) => {
      return {
        label: el.name,
        key: index,
        children: `Content of Tab Pane ${index}`,
      };
    })}
  />

        </div>
    )
}