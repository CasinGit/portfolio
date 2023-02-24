import { Typography } from '@mui/material';
import './App.css';
import AboutMeComp from './components/about-me';
import CareersComp from './components/careers';
import ProjectsComp from './components/projects';
import SkillsComp from './components/skills';
import TopContentComp from './components/top-content';

export default function App() {
  const isMobile = /iPhone|iPad|iPod|BlackBerry|Windows Phone|Android/i.test(window.navigator.userAgent)

  if (isMobile) {
    console.log(`current device is mobile!\n${window.navigator.userAgent}`);
  } else {
    console.log(`current device is not mobile!\n${window.navigator.userAgent}`);
  }

  return (
    <div className='App'>
      <Typography component="h2" id='Top' />
      <TopContentComp />
      <AboutMeComp />
      <SkillsComp />
      <ProjectsComp />
      <CareersComp />
    </div>
  );
}