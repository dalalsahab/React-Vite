import React, { useEffect, useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(0)
  const [n, setN] = useState(10)
  useEffect(function(){
    console.log("useEffect is running");
    console.log("num 1 is changing");
  },[num])
  useEffect(function(){
    console.log("useEffect is running");
    console.log("num 2 is changing");
  },[n])
  return (
    <div>
      <h1>
          {num}
      </h1>
      <h1>
          {n}
      </h1>
      <button onMouseEnter={()=>{
        setNum(num+1);
      }}
      onMouseLeave={()=>{
        setN(n+10);
      }}
      className='button'
      >Click</button>
  
    </div>
  )
}

export default App
