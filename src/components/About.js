import React from 'react'
import { Link } from 'react-router-dom'

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
        <p> This Assignment of Technext</p>
        <p style={{textAlign:"left"}}>First, I would like to thank Technext for giving me this opportunity. I solve 1200 plus problems of various online judges in my university journey. I participated five times in the ICPC Preliminary Competition and twice in the ICPC Asia Dhaka Regional Competition.</p>
        <div> 
        <p> Bishworup Mollik </p>
        <p> Bangabandhu Sheikh Mujibur Rahman Science and Technology University</p>

        </div>
        
    </div>
  )
}
