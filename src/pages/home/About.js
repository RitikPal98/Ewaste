import React from "react";
// css on home.css
function About() {
  return (
    <div id="about" className="home-info-container">
      <div className="home-info-container-info">
        <h1>Who we are</h1>
        <p>
          Welcome to our non-profit startup that focuses on collecting e-waste
          from university and college students across different campuses. Our
          goal is to provide a convenient and responsible way for students to
          dispose of their electronic waste while promoting sustainability and
          environmental consciousness. <br></br>
          As a university-based non-profit
          organization, we understand the challenges of responsible e-waste
          disposal, and we aim to make the process as easy and accessible as
          possible for students. We provide collection bins on campus, as well
          as drop-off locations, making it simple for students to recycle their
          old electronics. We are committed to ensuring that all e-waste we
          collect is processed in an environmentally responsible and sustainable
          manner.<br></br> 
          We work with certified e-waste recycling partners to ensure
          that all materials are safely and properly disposed of, reducing the
          negative impact on the environment. By choosing to recycle your
          e-waste with us, you are not only helping to protect the environment,
          but also supporting our mission to promote sustainability and
          responsible waste management practices. Join us in our efforts to make
          a positive impact on the planet by properly disposing of your
          electronic waste today!
        </p>
      </div>
      <div className="home-images-container">
        <img src="images/b.jpg" alt="banner" />
      </div>
    </div>
  );
}

export default About;
