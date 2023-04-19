import React from "react";
import "./animation.css";
import {AiOutlineCheckCircle} from 'react-icons/ai';
export default function Step({Title,Detailles,status}){
    var color="white";
    var iconecolor="white";
  
    if(status){
        color="yellow";
        iconecolor="yellow";
        
    }
    return(

        <div style={{display:'flex',alignItems:'center',padding:1+'rem'}}>
            <div style={{padding:1+"rem"}}>
            <AiOutlineCheckCircle color={iconecolor} size={30}/>
        </div>

        <div>
            <h4 style={{margin:0,color:color}}  className={status?"animatecolor":""}>{Title}</h4>
            <p style={{font:10+"px",color:status?"gainsboro":"white",margin:0}}>{Detailles}</p>
        </div>
            
        </div>
       
    )
}