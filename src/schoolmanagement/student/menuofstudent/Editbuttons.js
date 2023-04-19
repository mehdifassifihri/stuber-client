import React from "react";
import { Button } from "antd";
import {MdPersonOutline} from "react-icons/md";
import {FiEdit} from "react-icons/fi";
import {MdDeleteOutline} from "react-icons/md";
export default function Editbutton(){
    var size=20
    return (<div style={{display:"flex",gap:10,width:100+"%",justifyContent:"center"}}>
        <Button  icon={<FiEdit color="blue" />} size={size}></Button>
        <Button  icon={<MdPersonOutline color="blue"/>} size={size}></Button>
        <Button  icon={<MdDeleteOutline color="red"/>} size={size}></Button>
    </div>)
}