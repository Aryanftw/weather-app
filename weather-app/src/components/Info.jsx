import React from 'react'

const Info = (props) => {
  return (
    <div>
      <div style ={{width: "100%",display: "flex",flexDirection:"column",justifyContent:"center"}}>
        <h1 style={{marginLeft:"20px"}}>Temperature</h1>
        <h3 style={{marginLeft:"150px"}}>{props.city}</h3>
        <div style={{width:"100%",display:"flex",gap:"200px"}}>
          <p>Humidity</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}

export default Info