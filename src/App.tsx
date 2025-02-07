import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Skills from './components/commands/Skills';
import PacmanWorld from './components/PacmanWorld';
import BackgroundMusic from './components/BackgroundMusic';
import Grid from './components/Grid';

const AppContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="relative">
      <BackgroundMusic />
      <PacmanWorld />
      <div className="absolute inset-0 pointer-events-none">
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
