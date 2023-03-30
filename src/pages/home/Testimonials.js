import React from 'react'
import WorksCard from '../../components/WorksCard'
// css on home.css
function Testimonials() {
  return (
    <div className="home-card-container">
    <WorksCard image="images/avatar.jpg" name="Sunder Pichai" comment="" />
    <WorksCard image="images/avatar2.jpg" name="Elon Musk" comment="" />
    <WorksCard image="images/avatar3.jpg" name="Ratan Tata" comment="" />
  </div>
  )
}

export default Testimonials