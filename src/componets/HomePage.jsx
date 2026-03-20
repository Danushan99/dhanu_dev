import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import HeroSection from "./HeroSection";
import DevelopmentProcess from "./DevelopmentProcess";
import AboutPage from "./About";
import ExperienceSection from "./ExperienceSection";
import StatsCounter from "./StatsCounter";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CursorTrail from "./CursorTrail";

const HomePage = () => {
  return (
    <div className="bg-Home">
      <CursorTrail />
      <NavBar />
      <section id="hero">
        <Portfolio />
      </section>
      <HeroSection />
      <DevelopmentProcess />
      <section id="about">
        <AboutPage />
      </section>
      <ExperienceSection />
      <StatsCounter />
      <section id="work">
        <ProjectsSection />
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
