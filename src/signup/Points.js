import React from "react";
import {TbPointFilled} from 'react-icons/tb'
export default function Points({index}){
    var table=[0,1,2,3]
    return (
        <div style={{display:"flex",gap:1,padding:2+"rem",alignItems:"center"}}>

            {table.map((element)=>index==element?<TbPointFilled color="blue" size={30} />:<TbPointFilled />)}
            
        </div>
    )
}