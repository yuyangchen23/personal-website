import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { Projects } from './pages/Projects';
import './App.css'
function App() {


  return (
    <div className='min-h-screen selection:bg-accent selection:text-secondary'>
      <HomePage />
      <Projects />
    </div>
      
  );
}

export default App
