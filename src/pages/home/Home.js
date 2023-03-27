import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import WorksCard from "../../components/WorksCard";
import "./Home.css";
function Home() {
  return (
    <div>
      <Header />

      <Slider />

      <div className="home-info-container">
        <div className="home-info-container-info">
          <h1>Who We Are</h1>
          <p>
            Gadget Grave is an online platform that is dedicated to collecting
            and managing electronic waste, also known as e-waste. The site is a
            convenient and eco-friendly solution for individuals and businesses
            looking to dispose of their used and unwanted electronics. Gadget
            Grave helps to reduce the amount of e-waste in landfills and ensure
            that these devices are disposed of in an environmentally responsible
            manner. The site offers easy and secure data destruction services,
            ensuring that personal and sensitive information is protected. With
            Gadget Grave, you can do your part in protecting the environment and
            keeping our planet clean and healthy for future generations.
          </p>
        </div>
        <div className="home-images-container">
            <img src="images/4.jpg" alt="" />
        </div>
      </div>
      <div className="home-card-container">
        <WorksCard image="images/avatar.jpg" name="Sunder Pichai" comment="" />
        <WorksCard image="images/avatar2.jpg" name="Elon Musk" comment="" />
        <WorksCard image="images/avatar3.jpg" name="Ratan Tata" comment="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
