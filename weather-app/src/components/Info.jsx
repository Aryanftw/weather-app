import React from 'react'

const Info = (props) => {
  let a = 'C'
  return (
    <div>
      <div style ={{width: "100%",display: "flex",flexDirection:"column",justifyContent:"center"}}>
        <h1 style={{marginLeft:"70px"}}>{props.temp !== null?(`${props.temp}°C`) : "N/A"}</h1>
        <h3 style={{marginLeft:"110px"}}>{props.city}</h3>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
          <p style={{marginRight:"50px"}}>Humidity : {props.humidity !== null?(`${props.humidity} %`) : "N/A"}</p>
          <p>Wind Speed : {props.windspeed !== null?(`${props.windspeed} m/s`) : "N/A"}</p>
        </div>
      </div>
    </div>
  )
}

export default Info