import React from 'react'
import { Link } from "react-router-dom";

const Categorie = (props) => {
  
  return (
    <div className='choice flex flex-col items-center text-center cursor-pointer'>
         <img className='w-5' src={props.image} alt="Bus"/>
         <Link className='text-white text-xs' to={props.link}>{props.name}</Link>
    </div>
  )
}

export default Categorie