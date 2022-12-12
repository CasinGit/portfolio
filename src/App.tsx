import './App.css';
import AboutMeComp from './components/about-me';
import SkillsComp from './components/skills';
import TopContentComp from './components/top-content';

export default function App() {

  return (
    <div className='App'>
      <TopContentComp />
      <AboutMeComp />
      <SkillsComp />
    </div>
  );
}