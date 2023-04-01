import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (
    <div className='home-slider'>
        <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        axis='horizontal'
        showThumbs={false}
        dynamicHeight={false}
        showIndicators={false}
        >
                <div>
                    <img src="images/a1.jpg" alt="banner" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="images/1.jpg" alt="banner" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="images/l1.jpg" alt="banner" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="images/b1.jpg" alt="banner" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
  )
}

export default Slider