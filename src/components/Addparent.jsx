import React from 'react'
import '../css/addparent.css'

const Addparent = () => {
  return (
    <div className='box'>
        
        <form className='form'>
        <p>ADD PARENT</p>
        <input placeholder='First name' type="text" id="fname" name="fname"/>
        <input placeholder='Last name' type="text" id="fname" name="fname"/>
        <input placeholder='Email' type="text" id="fname" name="fname" pattern="[a-z0-9._%+-]+@[a-z]+.[a-z]+"/>
        <input placeholder='Password' type="text" id="fname" name="fname"/>
        <button>Add</button>
        </form>
    </div>
  )
}

export default Addparent