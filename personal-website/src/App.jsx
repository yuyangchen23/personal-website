import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { Projects } from './pages/projects/Projects.jsx';
import { Experience } from './pages/experience/Experience.jsx';
import './App.css'
function App() {


  return (
    <div className='min-h-screen selection:bg-accent selection:text-secondary'>
      <HomePage />
      <Projects />
      <Experience />
    </div>
      
  );
}

export default App
