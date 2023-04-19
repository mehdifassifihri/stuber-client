import React from "react";
import StepInfoAcount from "./StepInfoAcount";
import Points from "./Points";
import CompanyInfo from "./CompanyInfo"; 
import ResponsableInfo from "./ResponsableInfo";
import Passwordform from "./Passwordform";

export default function SignForms({index,changestep}){
    var forms=[<StepInfoAcount index={index} changestep={changestep}/>,<Passwordform index={index} changestep={changestep}/>,<ResponsableInfo index={index} changestep={changestep}/>,<CompanyInfo index={index} changestep={changestep}/>];
    return (
        <div style={{height:'100vh',width:70+"%"}}>
            <div style={{height:'90%',width:100+"%"}}>
            {forms[index]}
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <Points index={index}/></div>
        </div>
    )
}