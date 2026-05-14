import React from 'react'

const Card = (props) => {
    console.log(props.user, props.age);
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1778557403328-24ccdcc2a820?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
