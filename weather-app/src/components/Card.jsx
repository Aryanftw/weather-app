import React from 'react'
import Info from './Info'
import Navbar from './Navbar'

const Card = ({handleChange,handleSubmit,city,input}) => {
  return (
    <div className='main' style = {{marginLeft: "550px",border:"2px solid transparent",backgroundColor: "#0093E9",height:"550px",width:"450px",display:"flex",flexDirection:"column",justifyContent:"space-evenly", alignItems:"center",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",borderRadius:"30px"
    ,border:"2px solid white"}}>
      <Navbar handleChange={handleChange}
      handleSubmit={handleSubmit}
      input={input}/>
      <Info city={city}/>
    </div>
  )
}


export default Card