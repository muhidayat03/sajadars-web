import React, { useEffect } from 'react';
import Header from './components/Header';
import BannerSection from './pages/home/BannerSection';
import LandasanSection from './pages/home/LandasanSection';
import WorkSection from './pages/home/WorkSection';
import ProjectSection from './pages/home/ProjectSection';
import TeamSection from './pages/home/TeamSection';
import YoutubeSection from './pages/home/YoutubeSection';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Element } from "react-scroll";
import styled from 'styled-components';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      // once: true
    })
  }, []);
  return (
    <div>
      <Header />
      <ContentSection>
        <Element name="banner-section" className="element">
          <BannerSection />
        </Element>
        <Element name="about-section" className="element">
          <LandasanSection />
        </Element>
        <Element name="workflow-section" className="element">
          <WorkSection />
        </Element>
        <Element name="project-section" className="element">
          <ProjectSection />
        </Element>
        <Element name="team-section" className="element">
          <TeamSection />
        </Element>
        <YoutubeSection />
      </ContentSection>
      <Footer />
    </div>
  );
}

const ContentSection = styled.div`
  padding-top: 60px;
  @media only screen and (max-width: 600px) {  
  background-color: red;
  } 
`;

export default App;