import { Typography } from '@mui/material';
import './App.css';
import AboutMeComp from './components/about-me';
import ProjectsComp from './components/projects';
import SkillsComp from './components/skills';
import TopContentComp from './components/top-content';

export default function App() {

  return (
    <div className='App'>
      <Typography component="h2" id='Top' />
      <TopContentComp />
      <AboutMeComp />
      <SkillsComp />
      <ProjectsComp />
    </div>
  );
}