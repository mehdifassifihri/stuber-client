import React from "react";
import Avatar from "antd/es/avatar/avatar";
import Editbutton from "./Editbuttons";
export default function Itemofcontent(){
    var size=13
    return(
        <div style={{display:"flex",justifyContent:"space-around",borderBottom:"1px solid gainsboro",padding:"0.2rem 0 0.2rem 0",display:"flex",alignItems:"center"}}>
        <div style={{textAlign:"center",flexBasis:"10%"}}>    <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar></div>         
<div style={{textAlign:"center",flexBasis:"15%",fontSize:size}}>abdelilah</div>
<div style={{textAlign:"center",flexBasis:"15%",fontSize:size}}>zaidane</div>
<div style={{textAlign:"center",flexBasis:"15%",fontSize:size}}>abdelilahzdn123@gmail.com</div>
<div style={{textAlign:"center",flexBasis:"20%",fontSize:size}}>0636036708</div>
<div style={{textAlign:"center",flexBasis:"25%",fontSize:size}}><Editbutton/></div>
                </div>
    )
}