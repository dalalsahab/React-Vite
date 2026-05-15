// with get data button

import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=3&limit=30");
    setUserData(response.data);
    
  }
  let printUserData = "No user Available"
  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){
      return (
        <div >
        <div className='h-55 w-60 my-5'>
            <a href={elem.url} target='_blank'>
            <img className='hover:hover:scale-105 h-full w-full object-cover border-white border-2 rounded-xl' src ={elem.download_url} alt=""/>
            <h2 className='px-1.5 text-2xl'>
              {elem.author}
            </h2>
            </a>
          
        </div>
          
        </div>
      )
    })
  }

  return (
    <div className='bg-gray-800 h-screen text-white px-6 py-5 font-bold text-3xl w-full overflow-auto'>
    <button className='bg-green-400 rounded-3xl px-6 py-5 hover:bg-green-700 border-3 border-slate-300' 
    onClick={()=>{
      getData();
    }}
    >
    Get Data
    </button>
      <div className='flex flex-wrap gap-10 my-10 mx-10'>
          {printUserData}
          
      </div>
      
        
      
    
    </div>

  )
}

export default App
