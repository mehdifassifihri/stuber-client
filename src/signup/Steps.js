import React from "react";
import Step from "./Step";
export default function Steps({index}){
    //f9fbfc
    var data=[{Title:"Your Detailles",Detailles:"Please Enter your Name And Email"},{Title:"Choose Your Password",Detailles:"Must be at least 8 caracters"},{Title:"Company Information" ,Detailles:"Please Enter your Name And Email" },{Title:"Personale information", Detailles:"Please Enter your Name And Email"}]
    return <div style={{height:'100vh',background:'#151653',width:20+"%",padding:0.5+'rem',fontSize:14,borderRadius:"5px",margin:"5px"}}>

{data.map((element,i)=><Step Title={element.Title} Detailles={element.Detailles} status={index==i?true:false} />)}

    </div>
}