import React from "react";
import Input from "antd/es/input/Input";
import { AutoComplete, Button, Result,Modal } from 'antd';
import Imageupload from "./Imageupload";
import Image from "./Image";
import {CgOrganisation} from "react-icons/cg";
import { useState } from "react";
import "./animation.css";
import LocationSignup from './LocationSignup';
export default function CompanyInfo({index,changestep}){
const [on,seton]=useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return (
       <div style={{display:"flex",alignItems:"center",height:100+"%",width:"100%"}}>



            <div style={{padding:2+"rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:90+"%",width:50+"%",margin:'0 auto',opacity:0+"%"}} className="animate">
            <div> <Image icon={<CgOrganisation size={20}/>}/></div>
            <h2 style={{margin:0.3+"rem"}}>Company Information:</h2>
            <div style={{color:"gray",margin:0.5+"rem"}}>Must be at least 8 caracteres</div>
            
            <div style={{width:80+"%"}}>Logo*</div>
            <div style={{margin:0.5+"rem"}}><Imageupload/></div>   
           
            <div style={{margin:0.5+"rem",width:80+"%"}}> <div >Name*</div><Input placeholder="Enter your First Name"/></div>
            
            <div style={{margin:0.5+"rem",width:80+"%"}}><div>adress*</div><Input placeholder="Enter your Last Last Name" /></div>
            <Button type="primary" onClick={()=>{showModal()}} style={{width:80+"%"}}> Finish </Button>
            </div>

            <div style={{width:50+"%",height:100+"%"}}>
              <LocationSignup/>
            </div>





            <Modal title="succed" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Result
    status="success"
    title="Your Insecreption is secced "
    subTitle="please go to login page to enter your acount."
    
    extra={[
      <Button type="primary" key="console" >
        Go to login page
      </Button>
    ]}
  />

      </Modal>
         
            
            

       
        </div>
    )
}