import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('');
  const [details, setDetails] = useState('');
  const [notes, setNotes] = useState([]);
  function addNotesHandler(e){
    e.preventDefault();
    const copyNotes = [...notes];
    copyNotes.push({task, details});
    setNotes(copyNotes);
    setTask('');
    setDetails('');
    console.log(copyNotes);
  }
  return (
<div className="min-h-screen text-white flex  lg:flex-row">

  <div className="w-1/2 border-r bg-gray-950 border-gray-500 p-10">
    <h1 className="text-5xl font-bold mb-10">
      Add Notes
    </h1>

    <form action="
    " onSubmit={(e)=>{
      addNotesHandler(e);
    }}>
      <div className="flex flex-col gap-6">
        <input
        type="text" value={task}
        placeholder="Enter Notes Heading"
        className="w-full border-2 border-gray-400 bg-transparent rounded-md px-5 py-4 text-xl outline-none"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <textarea
        placeholder="Write Details here" value={details}
        rows="8"
        className="w-full border-2 border-gray-400 bg-transparent rounded-md px-5 py-4 text-xl outline-none resize-none"
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      ></textarea>

      <button className="bg-white text-black text-2xl font-semibold py-4 rounded-md hover:bg-gray-200 transition-all duration-300">
        Add Note
      </button>
    </div>
    </form>
  </div>


  <div className="w-1/2 p-10 bg-slate-950">

    <h1 className="text-5xl font-bold mb-10">
      Recent Notes
    </h1>
      <div className="flex-nowrap flex-row justify-between gap-50">

        </div>
    <div className="flex flex-wrap gap-10">
        {notes.map((elem, idx)=>{
      return(
      
      <div key={idx} className="w-[180px] bg-[#F4F5DE] rounded-xl p-4 text-black relative">
        <div className="flex justify-between px-2 absolute -top-3 left-0 w-full">
          <div className="w-3 h-6 bg-black rounded-full"></div>
          <div className="w-3 h-6 bg-black rounded-full"></div>
          <div className="w-3 h-6 bg-black rounded-full"></div>
          <div className="w-3 h-6 bg-black rounded-full"></div>
          <div className="w-3 h-6 bg-black rounded-full"></div>
          <div className="w-3 h-6 bg-black rounded-full"></div>
        </div>

        <div className="mt-5">

          <h2 className="text-3xl font-bold leading-tight">
            {elem.task}
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            {elem.details}
          </p>

        </div>


        <button className="w-full bg-pink-600 text-white py-2 rounded-md mt-10 font-semibold hover:bg-pink-700 transition-all duration-300" onClick={()=>{
          const copyNotes = [...notes];
          copyNotes.splice(idx, 1);
          setNotes(copyNotes);
        }}>
          Delete
        </button>

      </div>
      )
    })}

    </div>
    
  </div>
</div>
  )
}

export default App
