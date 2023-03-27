import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <div className='footer'>
        
        <h2 className='footer-headline'>Contact Us</h2>
        <div className='footer-location'>
        <LocationOnIcon />
        <p>gadget grave center </p>
        </div>
        <div className='footer-email'>
        <EmailIcon />
        <p>gadgetgrave@email.com</p>
        </div>
        
        <div className='footer-social'>
        <LinkedInIcon />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        </div>

        </div>
  )
}

export default Footer