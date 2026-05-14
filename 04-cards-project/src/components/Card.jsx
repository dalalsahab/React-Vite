import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div class="card">

    <div class="top">
      <div class="logo">
        <img src= {props.logo} alt="" />
      </div>

      <div class="save">Save <div className="save-logo"><Bookmark  size={18}/></div></div>
    </div>

    <div class="center">
      <p class="company">{props.company} • {props.posted}</p>

      <h2>{props.role}</h2>

      <div class="tags">
        <span>{props.type}</span>
        <span>{props.mode}</span>
      </div>
    </div>

    <div class="bottom">
      <div class="salary">
        <h3>{props.salary}</h3>
        <p>{props.location}</p>
      </div>

      <button>Apply now</button>
    </div>

  </div>
  )
}

export default Card
