import React from "react";
import Headermenu from "./Headermenu";
import Headlist from "./Headlist";
import Content from "./Content";
import { Button } from "antd";

export default function Menu(){
    var width="20px"
    var height="20px"
    return (
        <div style={{height:"100vh"}}>
            <div style={{height:"10%"}}>
            <Headermenu/>
            </div>
<div style={{padding:"1rem",height:"80%"}}><Headlist/><Content/></div>
<div style={{padding:"1rem",height:"10%",display:"flex",width:"100%",justifyContent:"end",gap:10,alignItems:"center"}}>
<Button type="primary">1</Button>
<Button type="primary">2</Button>
<Button type="primary">3</Button>

</div>
        </div>
        
        
    )
}