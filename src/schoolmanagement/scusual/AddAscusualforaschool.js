import React, { useState } from "react";
import DonthaveAscusual from "../scusual/DonthaveAscusual";
import Scusualitem from "../scusual/Scusualitem";

import {TbSunset2,TbSunHigh} from "react-icons/tb";
import { Button } from "antd";
export default function AddAscusualforaschool(){
    const [times,setimes]=useState([{'jour':'monday','morning':{'depart':'152365','retour':'125365'},'soir':{'depart':'152365','retour':'125365'}}])

    return ( <div style={{width:60+"%",margin:"0 auto",height:100+"vh",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <h2 style={{marginLeft:0}}>Set Standard Hours</h2>
        <p style={{marginLeft:0,color:"gray"}}>please configure the standard hours for transportation</p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}> 
     <div style={{display:"flex",gap:10}}><div style={{width:"200px"}}></div><div style={{width:"400px",justifyContent:"center",display:"flex"}}><TbSunHigh/></div><div style={{width:"400px"}}><TbSunset2/></div></div>
   
    <Scusualitem day={"monday"}/>
    <Scusualitem day={"Tuesday"}/>
    <Scusualitem day={"Tuesday"}/>
    <Scusualitem day={"Wednesday"}/>
    <Scusualitem day={"Thursday"}/>
    <Scusualitem day={"Friday"}/>
    </div>
        <div style={{width:100+"%",padding:2+"rem"}}><Button type="primary" style={{float:"right"}}>Finish</Button></div>
        </div>)
   
}