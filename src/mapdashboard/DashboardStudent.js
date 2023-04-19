import React from "react";
import CurrentPickups from "./CurrentPickups";
import Mapdashboard from "./Mapdashboard";
export default function DashboardStudent(){
    return (
        <div style={{display:"flex"}}>
<CurrentPickups/>
<Mapdashboard/>
        </div>
    )
}