import React from "react";
import Itemofcontent from "./Itemofcontent";
export default function Headlist(){
  
      var size="13px"

    return (
        <div style={{display:"flex",justifyContent:"space-around",borderTop:"1px solid gainsboro",borderBottom:"1px solid gainsboro",padding:"0.5rem 0 0.5rem 0",backgroundColor:"#fafbff"}}>
<div style={{textAlign:"center",color:"gray",flexBasis:"10%",fontSize:size}}>Image</div>         
        <div style={{textAlign:"center",color:"gray",flexBasis:"15%",fontSize:size}}>Name</div>
        <div style={{textAlign:"center",color:"gray",flexBasis:"15%",fontSize:size}}>Prename</div>
        <div style={{textAlign:"center",color:"gray",flexBasis:"15%",fontSize:size}}>Email</div>
        <div style={{textAlign:"center",color:"gray",flexBasis:"20%",fontSize:size}}>Phone number</div>
        <div style={{textAlign:"center",color:"gray",flexBasis:"25%",fontSize:size}}>Edit</div>

        </div>
    )
}