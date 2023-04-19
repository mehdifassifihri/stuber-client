import React from "react";
import Studentinput from "./Studentiput";
import Mapstudent from "./Mapstudent";
import { Button } from "antd";
export default  function StudentForm(){

   
    return (
        
    <div style={{display:"flex",width:100+"%",height:100+"%",justifyContent:"center",alignItems:"center",gap:50}}>
    <Studentinput/>
    
    <Mapstudent/>

    

    </div>)


}