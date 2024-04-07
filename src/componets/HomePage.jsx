import React from "react";
import NavBar from "./NavBar";
import AboutPage from "./About";


import Top from "./Projects";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

const HomePage = () => {
  return (
    <div className="bg-Home">
      <NavBar />
      <Portfolio />
      <AboutPage />
      <Top/>
      <Footer/>
  </div>
  );
};

export default HomePage;
