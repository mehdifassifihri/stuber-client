import React from 'react'
import Map from './Map'
import Content from './Content'

const Setitinerar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" ,margin:"30px"}}>
      <Map/>
      <div style={{ flex: 1 }}>
        <Content />
      </div>
    </div>
  )
}

export default Setitinerar