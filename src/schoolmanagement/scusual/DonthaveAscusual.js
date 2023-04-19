import { Button } from "antd";
import React from "react";
import {FcHighPriority} from "react-icons/fc";
export default function DonthaveAscusual(){
    
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:100+"%"}}>
        <FcHighPriority size={30}/>
        <h2>
            you dont have a scusual yet for your a school add one !!!
        </h2>
        <Button >Add New Scusual</Button>
    </div>
}