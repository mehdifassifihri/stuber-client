import React from "react";
import  { useState } from 'react';
import { TimePicker } from 'antd';
import { Switch } from 'antd';
import { CiIconName } from 'react-icons/ci';
const { RangePicker } = TimePicker;



export default function Scusualitem({day}){

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [date,setdate]=useState({'jour':'monday','morning':{'depart':'152365','retour':'125365'},'soir':{'depart':'152365','retour':'125365'}})

    const onChange1 = (checked) => {
        setOpen(!open);
      };
      const onChange2 = (checked) => {
        setOpen1(!open1);
      };

      const onChangedate1 = (date,datestring) => {
        console.log(date);
        console.log(datestring);
      };
      const onchangedate2 = (date,datestring) => {
        console.log(date);
        console.log(datestring);
      };

    return (
<div style={{display:"flex",justifyContent:"space-around",padding:"1rem",alignItems:"center",gap:20}}>


<div style={{width:"100px",color:(open==true && open1==true)?"gray":"black"}}><b>{day}</b></div>
<div style={{width:"400px",display:"flex",alignItems:"center",gap:5}}><div><Switch defaultChecked onChange={onChange1} size={"small"} /></div><RangePicker bordered={true} disabled={open} onChange={onchangedate2}/><div style={{color:open?"gray":"black"}}><b>AM</b></div></div>


<div style={{width:"400px",display:"flex",alignItems:"center",gap:5}}><div><Switch defaultChecked onChange={onChange2} size={"small"} /></div><RangePicker bordered={true} disabled={open1}  /><div style={{color:open1?"gray":"black"}}><b>PM</b></div></div>

</div>
    )
    
}