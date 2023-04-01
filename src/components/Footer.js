import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';


// https://twitter.com/gadgetgrave2023
function Footer() {
  return (
    <div className='footer'>
        
        <h2 className='footer-headline'>Contact Us</h2>
        <div className='footer-location'>
        <LocationOnIcon />
        <p>DTU Main Bawana Road, Delhi</p>
        </div>
        <div className='footer-email'>
        <EmailIcon />
        <p>gadgetgrave.2023@gmail.com</p>
        </div>
        
        <div className='footer-social'>
        {/* <LinkedInIcon /> */}
    {/* <Link to="https://www.instagram.com/gadgetgrave2023/"> */}
        {/* <InstagramIcon /> */}
    {/* </Link> */}
    {/* <Link to="https://twitter.com/gadgetgrave2023"> */}

        {/* <TwitterIcon /> */}
    {/* </Link> */}
        </div>

        </div>
  )
}

export default Footer