import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user ='Aman Sharma' age ={18}/>
      <Card user ='Govind' age ={21}/>
      <Card user ='Atul' age ={18}/>
    </div>
      
  )
}

export default App
