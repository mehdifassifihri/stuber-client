import React from "react";
import Steps from "./Steps";
import SignForms from "./SignForms";
import { useState } from "react";

export default function Signup(){
const [numberofstep,setstape]=useState(0);
    return(
        <div style={{height:'100vh',width:100+"%",display:"flex",backgroundColor:"white"}}>
<Steps index={numberofstep} />
<SignForms index={numberofstep} changestep={setstape}/>
        </div>
    )
}