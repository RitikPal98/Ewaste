import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="contact" className="footer">
      <h2 className="footer-headline">Contact Us</h2>
      <div className="footer-location">
        <LocationOnIcon />
        <p>DTU Shahbad Daulatpur, Bawana Road, Delhi 110042</p>
      </div>
      <div className="footer-email">
        <EmailIcon />
        <p>gadgetgrave.2023@gmail.com</p>
      </div>

      <div className="footer-social">
        <a href="https://www.linkedin.com/in/ewaste-drive-574702270/">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/gadgetgrave2023/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/gadgetgrave2023">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
