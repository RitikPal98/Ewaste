import React, { useEffect, useState } from 'react'
import "./Header.css"
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll=()=>{
    const scrollY =window.scrollY;
    if(scrollY>80){
      setScrolled(true);
    }else{
      setScrolled(false)
    }
  };
  const headerOverlay={
    top:scrolled?0:'-100px'
  }  
  
  return (
    <div className='header'>
        <div style={headerOverlay} className='header-overlay'>
        <h1 id="overlay-logo" style={{fontSize:"2.2rem"}} className='header-logo'>Gadget Grave</h1>
        <div className='header-nav'>
          <a href="#about">About</a>
          <a href="#aim">Aim</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>  
        </div>
        <h1 className='header-logo'>Gadget Grave</h1>
        <div className='header-nav'>
          <a href="#about">About</a>
          <a href="#aim">Aim</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        </div>
  )
}

export default Header