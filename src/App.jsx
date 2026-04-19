import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { Projects } from './pages/projects/Projects.jsx';
import { Experience } from './pages/experience/Experience.jsx';
import { SkillsSection } from './pages/skills/SkillsSection.jsx';
import { ContactPage } from './pages/contact/ContactPage.jsx';
import { Footer } from './pages/footer/Footer.jsx'
import { Header } from './pages/header/Header.jsx';
import './App.css'
function App() {


  return (
    <div className='min-h-screen selection:bg-accent selection:text-secondary'>
      <Header />
      <main>
        <HomePage />
        <Projects />
        <Experience />
        <SkillsSection />
        <ContactPage />
        <Footer />
      </main>
    </div>
  );
}

export default App
