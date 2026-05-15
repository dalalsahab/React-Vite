// without get data button - pagination

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[index]);
  let printUserData = <div className='flex justify-center h-screen w-full'>
      <h3 className='text-gray-400 text-5xl'>Loading...</h3>
  </div>
   
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
    <div className='bg-slate-800 h-screen text-white px-6 py-5 font-bold text-3xl w-full overflow-auto'>
    <h2 className='fixed px-5 py-5 mx-5 my-5 bg-green-200 text-3xl rounded-full text-white'>{index}</h2>
      <div className='flex flex-wrap gap-10 my-10 mx-10'>
          {printUserData}

      </div>
          <div className='flex justify-center items-center gap-15 py-5'>
          <button className='bg-green-400 py-2 px-5 text-xl hover:scale-105 rounded cursor-pointer'
          onClick={()=>{
              if(index>1){
                setIndex(index-1);
                setUserData([]);
              }
          }}>
          Prev</button>
          <h2> Page {index} </h2>
          <button className='bg-green-400 py-2 px-5 text-xl hover:scale-105 rounded cursor-pointer'
          onClick={()=>{
            setIndex(index+1);
            setUserData([]);
          }}>
          Next</button>
          </div>
      
      
        
      
    
    </div>

  )
}

export default App
