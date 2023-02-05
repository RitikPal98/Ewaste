import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (
    <div className='home-slider'>
        <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        axis='horizontal'
        showThumbs={false}
        dynamicHeight={false}
        showIndicators={false}
        >
                <div>
                    <img src="images/1.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="images/2.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="images/5.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="images/6.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
  )
}

export default Slider