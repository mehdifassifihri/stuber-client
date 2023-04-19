import React from "react";
import {CiAlarmOn} from "react-icons/ci";
import { NavLink  } from "react-router-dom";
import "./animationofitemsidbar.css"
export default function Scusualitem({name,component}){
    
return (
    <div >
   
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"0.3rem 0.5rem 0.3rem 0.5rem",padding:"0.5rem"}} className="itemsidbar">
    <NavLink
                    to={`/studentdashboard/${name}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >{component}</NavLink>
    </div>
    </div>
)

}