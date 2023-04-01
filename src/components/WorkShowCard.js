import React from 'react'

function WorkShowCard({img,title,info}) {
  return (
    <>
        <div className="workshow-card">
            <div className='workshow-img-container'>
            <img className='pattern' src="images/pattern0.jpg" alt="drive-image"/>
            <img src={img} alt="drive-image"/>
            <img className="pattern" src="images/pattern.jpg" alt="drive-image"/>
            
            </div>
            <div className='card-info-container'>
              <h4>{title}</h4>
            <p className='workshow-card-info'>{info}
           </p>
            </div>
        </div>
    </>
  )
}

export default WorkShowCard