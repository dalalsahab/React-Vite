import React, { useState } from 'react'

const App = () => {
  function inputChanging (elem){
        console.log(elem)
      }
      const [a, seta] = useState(0);
      const [num, setnum] = useState({user: "Ankit",age:24});
      function changeUser(){
        const newNum = {...num};
        newNum.user = "Govind";
        newNum.age = 21;
        setnum(newNum);
      }
      function increaseNum(){
        seta(a+1);
      }
      function decreaseNum(){
        seta(a-1);
      }
      function increaseNumBy5(){
        seta(a+5);
      }

      function submitHandler(elem){
        elem.preventDefault();
        console.log("Form is sumitted...", title)
        settitle('');
      }

      const [title, settitle] = useState('');
  return (
    <div className='flex justify-between items-center'>
      <h1>{a}</h1><br />
      <h1>Hello {num.user}, {num.age}</h1><br />
      <div>
      <button onClick={increaseNum}>Increase</button><br />
      <button onClick={decreaseNum}>Decrease</button><br />
      <button onClick={increaseNumBy5}>Increase by 5</button><br />
      <button onClick={changeUser}>Change User & Age</button><br />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
      // classic example of 2 way binding - from value to title to settitle to value backagain
        <input type="text" placeholder='Enter Your Name' value={title} onChange={(e)=>{
          settitle(e.target.value);
        }} />
        <button>Submit</button>
      </form>
      </div>


    </div>
  )
}

export default App
