import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import BannerSection from './pages/home/BannerSection';
import LandasanSection from './pages/home/LandasanSection';
import WorkSection from './pages/home/WorkSection';
import ProjectSection from './pages/home/ProjectSection';
import TeamSection from './pages/home/TeamSection';
import YoutubeSection from './pages/home/YoutubeSection';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header/>
      <BannerSection/>
      <LandasanSection/>
      <WorkSection/>
      <ProjectSection/>
      <TeamSection/>
      <YoutubeSection/>
      <Footer/>
    </>
  );
}

export default App;