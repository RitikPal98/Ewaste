import React from 'react'

function WorkShowCard({img,info}) {
  return (
    <>
        <div className="workshow-card">
            <div className='workshow-img-container'>
            <img className='pattern' src="images/pattern0.jpg" alt="drive-image"/>
            <img src={img} alt="drive-image"/>
            <img className="pattern" src="images/pattern.jpg" alt="drive-image"/>
            
            </div>
            <div className='card-info-container'>
            <p className='workshow-card-info'>            that these devices are disposed of in an environmentally responsible
            manner. The site offers easy and secure data destruction services,
            ensuring that personal and sensitive information is protected. With
            Gadget Grave, you can do your part in protecting the environment and
            ensuring that personal and sensitive information is protected. With
            Gadget Grave, you can do your part in protecting the environment and
           </p>
            </div>
        </div>
    </>
  )
}

export default WorkShowCard