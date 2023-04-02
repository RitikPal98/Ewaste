import React, { useEffect, useState } from 'react'

function WorkShowCard({img,title,info,scrollno,reversed}) {


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll=()=>{
    const scrollY =window.scrollY;
    if(scrollY>scrollno){
      setScrolled(true);
    }else{
      setScrolled(false)
    }
  };
  const handleImg={
    left:scrolled?0:'-500px'
  }  
  const handleText={
    right:scrolled?0:'-800px'
  }
  // if(reversed){

  //   } 
  // }else{
  // }

  return (
    <>
        <div className="workshow-card">
            <div style={handleImg} className='workshow-img-container'>
            <img className='pattern' src="images/pattern0.jpg" alt="drive-image"/>
            <img src={img} alt="drive-image"/>
            <img className="pattern" src="images/pattern.jpg" alt="drive-image"/>
            
            </div>
            <div style={handleText} className='card-info-container'>
              <h4>{title}</h4>
            <p className='workshow-card-info'>{info}
           </p>
            </div>
        </div>
    </>
  )
}

export default WorkShowCard