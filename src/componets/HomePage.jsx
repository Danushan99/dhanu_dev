import React from "react";
import NavBar from "./NavBar";
import AboutPage from "./About";
import SliderView from "./SliderView";

const HomePage = () => {
  return (
    <div className="bg-Home">
      <NavBar />
      <SliderView />
      <AboutPage />
    </div>
  );
};

export default HomePage;
