import React from "react";
import Direction from "./currentPickup/Directions";
import CurrentPickup from "./currentPickup/CurrentPickup";
export default function CurrentPickups({id,tableoflocations,setid}){
    return (
        <div style={{width:50+"%",height:100+"vh",display:"flex",background:"#f1f3f4",justifyContent:"space-around",padding:"0.5rem",overflow:"scroll",flexWrap:"wrap"}}>
     
        {tableoflocations.map(el=><CurrentPickup id={id} data={el} setid={setid} key={el.id}/>)}
        </div>
    )
}