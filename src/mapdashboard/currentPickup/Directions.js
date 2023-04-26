import React from "react";
import { Radio, Timeline } from 'antd';
import { useState } from 'react';

export default function Direction(){

    
    
    

    return (
        <div style={{display:"flex",border:"solid black 1px",borderRadius:"5px",padding:"0.5rem"}}>
             <div style={{width:"30%",display:"flex",flexDirection:"column",height:"50%"}}>
        <div>
            30:50:00
        </div>
        <div>
            56 mile left
        </div>
        </div>
        <div style={{width:"60%"}}>
        <Timeline
        
        mode={"left"}
    
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]} />
        </div>

       
        </div>
    )
}