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


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      // once: true
    })
  }, []);
  return (
    <div style={{ maxWidth: 1280, margin: 'auto' }}>
      <Header />
      <BannerSection />
      <LandasanSection />
      <WorkSection />
      <ProjectSection />
      <TeamSection />
      <YoutubeSection />
      <Footer />
    </div>
  );
}

export default App;