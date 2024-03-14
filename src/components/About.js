import React from 'react'
import { Link } from 'react-router-dom'
import p from './blood2.jpg';


export default function About() {
  return (
    <div className='container'>
           {/* Breadcrumb */}
           <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
          {/* /Breadcrumb */}
        <h1> About</h1>
        <img height="200px"  src={p} />
        <p style={{textAlign:"center" ,margin:"80px"}}>"I built a React app website with a dummy API, displaying user data dynamically. It offers search and filter functionalities and features a responsive design, showcasing my proficiency in React development. This project underscores my dedication to delivering seamless user experiences and highlights my expertise in frontend development</p>
        <div> 
        <b> <p> Bishworup Mollik </p>
        <p> Bangabandhu Sheikh Mujibur Rahman Science and Technology University</p>
        </b>

        </div>
        
    </div>
  )
}
