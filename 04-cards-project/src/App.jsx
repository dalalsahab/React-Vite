import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Figma",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    role: "UX Designer",
    posted: "2 days ago",
    type: "Full-Time",
    mode: "In Office",
    salary: "$200k",
    location: "California, USA"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    role: "Frontend Developer",
    posted: "1 day ago",
    type: "Internship",
    mode: "Remote",
    salary: "$80k",
    location: "New York, USA"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    role: "Backend Engineer",
    posted: "3 days ago",
    type: "Full-Time",
    mode: "Hybrid",
    salary: "$150k",
    location: "Seattle, USA"
  },
  {
    id: 4,
    company: "Apple",
    logo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    role: "Graphic Designer",
    posted: "5 days ago",
    type: "Contract",
    mode: "Remote",
    salary: "$120k",
    location: "Texas, USA"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    role: "UI Designer",
    posted: "4 days ago",
    type: "Part-Time",
    mode: "Hybrid",
    salary: "$90k",
    location: "Los Angeles, USA"
  },
  {
    id: 6,
    company: "Amazon",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
    role: "Software Engineer",
    posted: "6 days ago",
    type: "Full-Time",
    mode: "In Office",
    salary: "$170k",
    location: "Chicago, USA"
  },
  {
    id: 7,
    company: "Meta",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    role: "React Developer",
    posted: "1 week ago",
    type: "Internship",
    mode: "Remote",
    salary: "$75k",
    location: "London, UK"
  },
  {
    id: 8,
    company: "Airbnb",
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png",
    role: "Junior UI/UX Designer",
    posted: "8 hours ago",
    type: "Contract",
    mode: "Remote",
    salary: "$100/hr",
    location: "Berlin, Germany"
  },
  {
    id: 9,
    company: "Spotify",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    role: "Product Designer",
    posted: "2 weeks ago",
    type: "Full-Time",
    mode: "Hybrid",
    salary: "$140k",
    location: "Stockholm, Sweden"
  },
  {
    id: 10,
    company: "Tesla",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969124.png",
    role: "App Developer",
    posted: "3 days ago",
    type: "Full-Time",
    mode: "In Office",
    salary: "$160k",
    location: "Austin, USA"
  }
];
  return (
    <div class="parent">
      {jobs.map(function(elems, idx){
        return <div key = {idx}>
        <Card logo = {elems.logo} company = {elems.company} role = {elems.role} posted = {elems.posted} type = {elems.type} mode = {elems.mode} salary = {elems.salary} location = {elems.location} />
        </div>
      })}
      
  
</div>
  )
}

export default App
