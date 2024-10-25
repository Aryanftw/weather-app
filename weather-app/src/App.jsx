import React from 'react'
import Card from './components/Card'
import { useState } from 'react'

const App = () => {
  const [input,setInput] = useState(" ")
  const [city,setCity] = useState('City')
  const handleChange = (event)=>{
     setInput(event.target.value)
  }

  const handleSubmit = (event)=>{
     event.preventDefault()
     setCity(input)
     setInput(" ")
  }
  
  return (
    <div className="app"><Card  handleChange={handleChange}
    handleSubmit={handleSubmit}
    city={city}
    input={input}/></div>
  )
}

export default App
