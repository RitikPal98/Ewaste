import React from 'react'
import WorksCard from '../../components/WorksCard'
// css on home.css
function Testimonials() {
  return (
    <div id="reviews" className="home-card-container">
      <div className='review-heading'>
        <h1>People's Review</h1>
      </div>
      <div>
    <WorksCard image="images/avatar.png" name="Manoj Sharma" comment="I was really happy to find out about this organization that collects e-waste on campus. It's such an easy way to dispose of old electronics responsibly, and I feel good knowing that the materials will be recycled properly. The volunteers were friendly and helpful too!" />
    <WorksCard image="images/avatar2.png" name="Shivani Bharti" comment="I've always been interested in sustainability, so I was excited to learn about this non-profit that collects e-waste from students. It's great to see that there are people working to promote responsible waste management on campus. I'll definitely be using their services again!" />
    <WorksCard image="images/avatar3.png" name="Gautam bhatt" comment="I had a bunch of old electronics that I didn't know what to do with, so I was relieved to find out about this organization. They made it super easy to drop off my e-waste, and I didn't have to worry about it ending up in a landfill. It's awesome to see college students taking action to protect the environment." />
      </div>
  </div>
  )
}

export default Testimonials