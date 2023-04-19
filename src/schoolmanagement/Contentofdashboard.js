import React from "react";
import StudentForm from "./student/StudentForm";
import AddAscusualforaschool from "./scusual/AddAscusualforaschool";
import DonthaveAscusual from "./scusual/DonthaveAscusual";
import Mapstudent from "./student/Mapstudent";
import Menu from "./student/menuofstudent/Menu";
import DashboardStudent from "../mapdashboard/DashboardStudent";

import { useState } from "react";
export default function Contentofdashboard(){

var table=[<DonthaveAscusual/>,<AddAscusualforaschool/>]
    return (<div style={{width:100+"%",height:100+"vh"}}>
  <DashboardStudent/>
    </div>)
}