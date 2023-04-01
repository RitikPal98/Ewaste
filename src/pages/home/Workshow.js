import React from 'react'
import WorkShowCard from '../../components/WorkShowCard'
import "./Workshow.css"
function Workshow() {
  return (
    <div className='workshow'>
      <h1>What We Want</h1>
        <div className="workshow-card-container">
        <WorkShowCard img="images/i4.jpg" title="Increase e-waste collection" info="our organization's primary goal is to increase the amount of e-waste that we collect. This is crucial because the more electronic waste we are able to collect, the greater our impact will be on reducing the harmful environmental effects of e-waste." />
        <WorkShowCard img="images/i3.jpg" title="Environmental impact" info="Our aim is to reduce the negative impact of e-waste on the environment. By collecting and properly disposing of e-waste, we can prevent toxic substances from polluting the air, soil, and water. Additionally, recycling e-waste reduces the need for raw materials and conserves natural resources." />
        <WorkShowCard img="images/i5.jpg" title="Sustainable waste management" info="We promote sustainable waste management practices, both on campus and in the wider community. By collecting and recycling e-waste, we can reduce the amount of waste that goes to landfills and incinerators, which can have negative environmental and health impacts. Additionally, by promoting responsible consumption and waste reduction, we can help to reduce the overall amount of waste generated." />
        <WorkShowCard img="images/i2.jpg" title="Educate and engage students" info="The fourth goal of educating and engaging students on the importance of e-waste recycling and sustainable living practices is crucial for our university-based non-profit startup that collects e-waste from students. By educating and engaging students, we promote a culture of environmental responsibility and encourage long-term behavior change." />
        
        </div>
        </div>
  )
}

export default Workshow