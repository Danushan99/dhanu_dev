import NavBar from "./NavBar";
import AboutPage from "./About";
import Experience from "./Experience";
import Top from "./Projects"; // ensure filename matches
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import DevelopmentProcess from "./DevelopmentProcess";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import HeroSection from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";

const HomePage = () => {
  return (
    <div className="bg-Home">
      {/* <NavBar /> */}
      {/* <Portfolio /> */}
      <HeroSection />
      <DevelopmentProcess />
      <AboutPage />
      <Experience />
      <SkillsSection />
      {/* <Top/> */}
      <ExperienceSection /> 
      <ProjectsSection />


      <ContactSection />

      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
