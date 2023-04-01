import React from 'react'
import "./ImageBox.css"

function ImageBox() {
  return (
    <div className='imagebox'>
        <div className='imagebox-img-container'>
            <img src='images/l.jpg' alt="img" />
        </div>
        <div className='imagebox-img-container-2'>
            <img src='images/i6.jpg' alt="img" />
            <img src='images/i2.jpg' alt="img" />
            <img src='images/i4.jpg' alt="img" />
            <img src='images/i7.jpg' alt="img" />
        </div>
        
        <div className='imagebox-img-container'>
            <img src='images/r.jpg' alt="img" />
        </div>
        
        </div>
  )
}

export default ImageBox