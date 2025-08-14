import NavBar from "./NavBar";
import AboutPage from "./About";
import Experience from "./Experience";
import Top from "./Projects"; // ensure filename matches
import Footer from "./Footer";
import Portfolio from "./Portfolio";


const HomePage = () => {
  return (
    <div className="bg-Home">
      <NavBar />
      <Portfolio />
      <AboutPage />
       <Experience />
      <Top/>
      <Footer/>
  </div>
  );
};

export default HomePage;
