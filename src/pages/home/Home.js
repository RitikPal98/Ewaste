import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import ImageBox from "./ImageBox";
import Testimonials from "./Testimonials";
import Workshow from "./Workshow";
import "./Home.css";
import About from "./About";
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Workshow />
      <Testimonials />
      <ImageBox />
      <Footer />
    </div>
  );
}

export default Home;
