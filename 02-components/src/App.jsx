import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const user = "Sarthak";
  const age = 89;
  return (
    <div> 
      <Navbar />
      <Card />
      <Navbar />
      <Card />
    </div>
  )
}

export default App
