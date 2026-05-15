import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const App = () => {
  // localStorage.setItem('user','Govind');
  // localStorage.setItem('age',21);
  // localStorage.removeItem('age');
  // localStorage.clear();
  // const user = {
  //   userName: 'Govind',
  //   age:21,
  //   city: "Rohtak"
  // }
  // localStorage.setItem('user', JSON.stringify(user));
  // const data = localStorage.getItem('user');
  // console.log(JSON.parse(data).city);
  // console.log(localStorage.getItem('age'));


  // let's talk about API calls in React now

  // Promise
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   console.log(data);
  // }

  // Axios
  const [data, setData] = useState([])
  async function getData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    console.log(response.data);
    setData(response.data);
  }
  
  return (
    <div>
      <button onClick= {getData} > Get Data
      </button>
      <div>
        {data.map((elem, idx) => {
          return <h3>{idx + 1} Hello Mr {elem.name}</h3>
        })}
      </div>
    </div>
  )
}

export default App

// Next topic is useEffect Hook Explained from 7.54.00
