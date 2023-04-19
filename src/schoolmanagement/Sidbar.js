import React from "react";
import Scusualitem from "./itemsofsidebar.js/Scusualitem";
import {RxDashboard} from "react-icons/rx";
import {CiCircleList} from "react-icons/ci";
import {BsCalendarDate} from "react-icons/bs";
import Avatar from "antd/es/avatar/avatar";
import {MdOutlinePersonAddAlt1} from "react-icons/md";
import {CiSettings} from "react-icons/ci";
import { Outlet,Link  } from "react-router";

export default function Sidbar(){

    

    return (<div style={{width:100+"%",height:"100vh",display:"flex"}}>
    <div style={{width:5+"%",height:100+"vh",backgroundColor:"#151653",display:"flex",flexDirection:"column",padding:"0.5rem",justifyContent:"space-between",borderRadius:"10px",margin:"5px"}}>
<div>
<Scusualitem  component={<RxDashboard size={20}  />} name={"dashboardstudent"}/>
<Scusualitem component={<CiCircleList size={20} />  } name={"students"}/>
<Scusualitem  component={<BsCalendarDate size={20} />} name={"scusual"}/>
<Scusualitem  component={<MdOutlinePersonAddAlt1 size={20} /> } name={"Addstudents"}/>
<Scusualitem  component={<CiSettings size={20} />} name={"Addstudents"}/>
</div>

<div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2 }}>
<Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
<div style={{color:"white",fontSize:10}}>abdelilah </div>
<div style={{color:"white",fontSize:10}}>zaidane</div>

</div>



    </div>
    <div Style={{width:"95%"}} id="detaille">
        <Outlet/>
      </div>
    </div>)


    
}