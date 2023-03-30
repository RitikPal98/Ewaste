import React from 'react'
import WorkShowCard from '../../components/WorkShowCard'
import "./Workshow.css"
function Workshow() {
  return (
    <div className='workshow'>
        <div className="workshow-card-container">
        <WorkShowCard img="images/6.jpg" info="" />
        <WorkShowCard img="images/2.jpg" info="" />
        <WorkShowCard img="images/4.jpg" info="" />
        <WorkShowCard img="images/1.jpg" info="" />
        
        </div>
        </div>
  )
}

export default Workshow