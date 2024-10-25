import React from 'react'
import Card from './components/Card'
import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [input,setInput] = useState(" ")
  const [city,setCity] = useState('City')
  const [temp,setTemp] = useState(null)
  const [err,setErr] = useState(null)
  const [humidity,setHumidity] = useState(null)
  const [windspeed,setWindspeed] = useState(null)
  const handleChange = (event)=>{
     setInput(event.target.value)
  }

  const handleSubmit = (event)=>{
     event.preventDefault()
     setCity(input)
     setInput(" ")
  }

  useEffect(()=>{
    if(city!=='City'){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfac359de79a0a7b8973a15e73d4ece5&units=metric`).then((response)=>{
        setTemp(response.data.main.temp)
        setHumidity(response.data.main.humidity)
        setWindspeed(response.data.wind.speed)
        setErr(null)
      }).catch((err)=>{
        setTemp(null)
        setHumidity(null)
        setWindspeed(null)
        setErr("City Not found Pls try again")
      })
    }
  },[city])
  
  
  return (
    <div className="app"><Card  handleChange={handleChange}
    handleSubmit={handleSubmit}
    city={city}
    input={input}
    temp={temp}
    error={err}
    humidity={humidity}
    windspeed={windspeed}/></div>
  )
}

export default App
