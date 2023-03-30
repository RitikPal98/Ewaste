import React from 'react'
import "./ImageBox.css"

function ImageBox() {
  return (
    <div className='imagebox'>
        <div className='imagebox-img-container'>
            <img src='images/thumb.svg' alt="img" />
        </div>
        <div className='imagebox-img-container-2'>
            <img src='images/thumb.svg' alt="img" />
            <img src='images/thumb.svg' alt="img" />
            <img src='images/thumb.svg' alt="img" />
            <img src='images/thumb.svg' alt="img" />
        </div>
        
        <div className='imagebox-img-container'>
            <img src='images/thumb.svg' alt="img" />
        </div>
        
        </div>
  )
}

export default ImageBox